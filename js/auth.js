// auth.js — перевірка авторизації через Steam

document.addEventListener('DOMContentLoaded', () => {
  fetch('/user')
    .then(res => res.json())
    .then(data => {
      const userInfo = document.getElementById('user-info');
      const adminLink = document.getElementById('admin-link');
      const authBtn = document.getElementById('auth-btn');

      if (data.authenticated) {
        userInfo.textContent = `Вітаємо, ${data.username}`;
        authBtn.style.display = 'none';

        // Показуємо «Адмінку» лише для адміна
        if (data.isAdmin && adminLink) {
          adminLink.style.display = 'inline-block';
        }
      } else {
        authBtn.addEventListener('click', () => {
          window.location.href = '/auth/steam';
        });
      }
    });
});


// Показуємо історію покупок після авторизації
fetch("/api/my-orders")
  .then(res => res.json())
  .then(data => {
    const historyList = document.getElementById("history-list");
    if (!historyList) return;
    data.forEach(order => {
      const li = document.createElement("li");
      li.textContent = `${order.product} — ${order.status.toUpperCase()} — ${order.timestamp}`;
      historyList.appendChild(li);
    });
  });
