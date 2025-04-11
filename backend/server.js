require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const SteamStrategy = require('passport-steam').Strategy;
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');
const axios = require('axios');

const app = express();
const PORT = 3000;

// === DATABASE ===
const db = new sqlite3.Database('./shop.db', (err) => {
  if (err) return console.error(err.message);
  console.log('Connected to SQLite database.');
});

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    steam_id TEXT UNIQUE,
    username TEXT,
    is_admin INTEGER DEFAULT 0
  )`);
  db.run(`CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    price INTEGER
  )`);
  db.run(`CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    product_id INTEGER,
    status TEXT DEFAULT 'pending',
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);
});

// === STEAM AUTH ===
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

passport.use(new SteamStrategy({
  returnURL: 'http://localhost:3000/auth/steam/return',
  realm: 'http://localhost:3000/',
  apiKey: process.env.STEAM_API_KEY
}, (identifier, profile, done) => {
  process.nextTick(() => {
    profile.identifier = identifier;
    return done(null, profile);
  });
}));

// === MIDDLEWARE ===
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(session({ secret: 'secretkey', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('../'));

// === STEAM ROUTES ===
app.get('/auth/steam', passport.authenticate('steam'));

app.get('/auth/steam/return',
  passport.authenticate('steam', { failureRedirect: '/' }),
  (req, res) => {
    const steamId = req.user.id;
    const username = req.user.displayName;
    db.run('INSERT OR IGNORE INTO users (steam_id, username) VALUES (?, ?)', [steamId, username]);
    res.redirect('/');
  }
);

app.get('/user', (req, res) => {
  if (!req.user) return res.json({ authenticated: false });
  const steamId = req.user.id;
  db.get('SELECT username, is_admin FROM users WHERE steam_id = ?', [steamId], (err, row) => {
    if (err || !row) return res.json({ authenticated: true, username: req.user.displayName, isAdmin: false });
    res.json({ authenticated: true, username: row.username, isAdmin: row.is_admin === 1 });
  });
});

// === PURCHASE ===
app.post('/purchase', (req, res) => {
  if (!req.user) return res.status(401).send('Unauthorized');
  const { productId, productName } = req.body;
  const steamId = req.user.id;

  db.get('SELECT id FROM users WHERE steam_id = ?', [steamId], (err, row) => {
    if (err || !row) return res.status(500).send('DB Error');
    const userId = row.id;
    db.run('INSERT INTO orders (user_id, product_id, status) VALUES (?, ?, ?)', [userId, productId, 'pending']);
    const logLine = `[${new Date().toISOString()}] STEAM_ID: ${steamId} | USERNAME: ${req.user.displayName} | ITEM: ${productName}\n`;
    fs.appendFileSync(path.join(__dirname, 'purchase_log.txt'), logLine);
    sendToDiscord(logLine.trim());
    res.json({ success: true });
  });
});

// === ADMIN APIs ===
app.get('/api/orders', (req, res) => {
  const query = `
    SELECT o.id, u.username, u.steam_id, p.name as product, o.status, o.timestamp
    FROM orders o
    JOIN users u ON o.user_id = u.id
    JOIN products p ON o.product_id = p.id
    ORDER BY o.timestamp DESC
  `;
  db.all(query, [], (err, rows) => {
    if (err) return res.status(500).send('DB Error');
    res.json(rows);
  });
});

app.get('/api/products', (req, res) => {
  db.all('SELECT * FROM products', [], (err, rows) => {
    if (err) return res.status(500).send('DB Error');
    res.json(rows);
  });
});

app.post('/api/products', (req, res) => {
  const { name, price } = req.body;
  db.run('INSERT INTO products (name, price) VALUES (?, ?)', [name, price], err => {
    if (err) return res.status(500).send('Insert Error');
    res.status(201).send('Created');
  });
});

app.delete('/api/products/:id', (req, res) => {
  db.run('DELETE FROM products WHERE id = ?', [req.params.id], err => {
    if (err) return res.status(500).send('Delete Error');
    res.status(200).send('Deleted');
  });
});

// === ORDER STATUS ===
app.post('/api/orders/update-status', (req, res) => {
  const { orderId, status } = req.body;
  db.run('UPDATE orders SET status = ? WHERE id = ?', [status, orderId], err => {
    if (err) return res.status(500).send('DB Error');
    res.send('OK');
  });
});

// === MY ORDERS ===
app.get('/api/my-orders', (req, res) => {
  if (!req.user) return res.status(401).send('Unauthorized');
  db.get('SELECT id FROM users WHERE steam_id = ?', [req.user.id], (err, row) => {
    if (err || !row) return res.status(500).send('DB Error');
    db.all('SELECT o.id, p.name as product, o.timestamp, o.status FROM orders o JOIN products p ON o.product_id = p.id WHERE o.user_id = ?', [row.id], (err, rows) => {
      if (err) return res.status(500).send('DB Error');
      res.json(rows);
    });
  });
});

// === EXPORT CSV ===
app.get('/api/export/csv', (req, res) => {
  const query = `
    SELECT o.id, u.username, u.steam_id, p.name as product, o.timestamp
    FROM orders o
    JOIN users u ON o.user_id = u.id
    JOIN products p ON o.product_id = p.id
    ORDER BY o.timestamp DESC
  `;
  db.all(query, [], (err, rows) => {
    if (err) return res.status(500).send('DB Error');
    const csv = [
      'ID,Username,SteamID,Product,Timestamp',
      ...rows.map(r => `${r.id},${r.username},${r.steam_id},${r.product},${r.timestamp}`)
    ].join('\n');
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename="orders.csv"');
    res.send(csv);
  });
});

// === MONOBANK PAYMENT ===
app.post('/pay-mono', (req, res) => {
  const { username, amount, comment } = req.body;
  const token = process.env.MONO_TOKEN;
  const payload = {
    amount: amount * 100,
    ccy: 980,
    redirectUrl: 'http://localhost:3000/',
    merchantPaymInfo: {
      reference: `order-${Date.now()}`,
      destination: `Оплата для ${username}: ${comment}`
    }
  };
  axios.post('https://api.monobank.ua/api/merchant/invoice/create', payload, {
    headers: { 'X-Token': token }
  })
    .then(response => {
      const url = response.data.pageUrl;
      res.json({ success: true, url });
    })
    .catch(err => {
      console.error(err.response?.data || err.message);
      res.status(500).send('Помилка створення платежу');
    });
});

// === DISCORD ===
const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
function sendToDiscord(message) {
  if (!webhookUrl) return;
  axios.post(webhookUrl, { content: message }).catch(console.error);
}

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));