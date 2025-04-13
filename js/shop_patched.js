
const products = [
  /* Auto */
  { name: "BMW", price: 265, category: "автомобілі", image: "..//img/img-auto/auto/bmw.png" },
  { name: "Сарка", price: 350, category: "автомобілі", image: "..//img/img-auto/auto/sarka.png" },
  { name: "Зил", price: 265, category: "автомобілі", image: "..//img/img-auto/auto/zil.png" },
  { name: "Гюнтер", price: 350, category: "автомобілі", image: "..//img/img-auto/auto/gunter.png" },
  { name: "Динго", price: 1300, category: "автомобілі", image: "..//img/img-auto/auto/dingo.png" },
  { name: "Хаммер", price: 1300, category: "автомобілі", image: "..//img/img-auto/auto/hammer.png" },
  { name: "Dingo", price: 1300, category: "автомобілі", image: "..//img/img-auto/auto/niva.png" },
  { name: "Волга", price: 1300, category: "автомобілі", image: "..//img/img-auto/auto/olga.png" },
  { name: "Ветреез", price: 1300, category: "автомобілі", image: "..//img/img-auto/auto/vetreez.png" },
  { name: "Запорожець", price: 1300, category: "автомобілі", image: "..//img/img-auto/auto/zapor.png" },


  /* Furnitura */
  { name: "Shovel", price: 50, category: "фурнітура", image: "..//img/img-auto/furnitura/1.png" },
  { name: "Shovel", price: 50, category: "фурнітура", image: "..//img/img-auto/furnitura/2.png" },
  { name: "Shovel", price: 50, category: "фурнітура", image: "..//img/img-auto/furnitura/3.png" },
  { name: "Shovel", price: 50, category: "фурнітура", image: "..//img/img-auto/furnitura/4.png" },
  { name: "Shovel", price: 50, category: "фурнітура", image: "..//img/img-auto/furnitura/5.png" },
  { name: "Shovel", price: 50, category: "фурнітура", image: "..//img/img-auto/furnitura/6.png" },
  { name: "Shovel", price: 50, category: "фурнітура", image: "..//img/img-auto/furnitura/7.png" },
  { name: "Shovel", price: 50, category: "фурнітура", image: "..//img/img-auto/furnitura/8.png" },
  { name: "Shovel", price: 50, category: "фурнітура", image: "..//img/img-auto/furnitura/9.png" },

  /* Стройка */
  { name: "Shovel", price: 50, category: "будівництво", image: "..//img/img-auto/stroika/axe.png" },
  { name: "Shovel", price: 50, category: "будівництво", image: "..//img/img-auto/stroika/barbedwire.png" },
  { name: "Shovel", price: 50, category: "будівництво", image: "..//img/img-auto/stroika/bk1.png" },
  { name: "Shovel", price: 50, category: "будівництво", image: "..//img/img-auto/stroika/bk2.png" },
  { name: "Shovel", price: 50, category: "будівництво", image: "..//img/img-auto/stroika/black-box.png" },
  { name: "Shovel", price: 50, category: "будівництво", image: "..//img/img-auto/stroika/codelock.png" },
  { name: "Shovel", price: 50, category: "будівництво", image: "..//img/img-auto/stroika/epoxy_putty.png" },
  { name: "Shovel", price: 50, category: "будівництво", image: "..//img/img-auto/stroika/flagkit.png" },
  { name: "Shovel", price: 50, category: "будівництво", image: "..//img/img-auto/stroika/hammer.png" },
  { name: "Shovel", price: 50, category: "будівництво", image: "..//img/img-auto/stroika/hatchet.png" },
  { name: "Shovel", price: 50, category: "будівництво", image: "..//img/img-auto/stroika/metalplate.png" },
  { name: "Shovel", price: 50, category: "будівництво", image: "..//img/img-auto/stroika/metalwire.png" },
  { name: "Shovel", price: 50, category: "будівництво", image: "..//img/img-auto/stroika/nails.png" },
  { name: "Shovel", price: 50, category: "будівництво", image: "..//img/img-auto/stroika/planks.png" },
  { name: "Shovel", price: 50, category: "будівництво", image: "..//img/img-auto/stroika/pliers.png" },
  { name: "Shovel", price: 50, category: "будівництво", image: "..//img/img-auto/stroika/saw.png" },
  { name: "Shovel", price: 50, category: "будівництво", image: "..//img/img-auto/stroika/shovel.png" },
  { name: "Shovel", price: 50, category: "будівництво", image: "..//img/img-auto/stroika/sledgehammer.png" },
  { name: "Shovel", price: 50, category: "будівництво", image: "..//img/img-auto/stroika/woodlogs.png" },

  /* Сети одягу */

  { name: "Shovel", price: 50, category: "Сети одягу", image: "..//img/img-auto/set-cloth/1.png" },
  { name: "Shovel", price: 50, category: "Сети одягу", image: "..//img/img-auto/set-cloth/2.png" },
  { name: "Shovel", price: 50, category: "Сети одягу", image: "..//img/img-auto/set-cloth/3.png" },
  { name: "Shovel", price: 50, category: "Сети одягу", image: "..//img/img-auto/set-cloth/4.png" },
  { name: "Shovel", price: 50, category: "Сети одягу", image: "..//img/img-auto/set-cloth/5.png" },
  { name: "Shovel", price: 50, category: "Сети одягу", image: "..//img/img-auto/set-cloth/6.png" },
  { name: "Shovel", price: 50, category: "Сети одягу", image: "..//img/img-auto/set-cloth/7.png" },
  { name: "Shovel", price: 50, category: "Сети одягу", image: "..//img/img-auto/set-cloth/8.png" },
  { name: "Shovel", price: 50, category: "Сети одягу", image: "..//img/img-auto/set-cloth/9.png" },
  { name: "Shovel", price: 50, category: "Сети одягу", image: "..//img/img-auto/set-cloth/10.png" },

];

let cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartIcon = document.getElementById('cart-icon');
const cartContainer = document.getElementById('cart-container');
const cartItemsList = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const container = document.getElementById('products');
const userAuthorized = localStorage.getItem('steam_id') !== null;

function renderProducts(filter = 'all') {
  container.innerHTML = '';
  products.forEach(item => {
    if (filter === 'all' || item.category.toLowerCase() === filter.toLowerCase()) {
      const el = document.createElement('div');
      el.className = 'product-card';
      const imgSrc = item.image ? item.image : 'https://via.placeholder.com/150?text=No+Image';
      el.innerHTML = `
        <img src="${imgSrc}" alt="${item.name}" />
        <div class="title">${item.name}</div>
        <div class="price">${item.price} UAH</div>
        <button onclick='addToCart(${JSON.stringify(item)})'>Додати до кошика</button>
      `;
      container.appendChild(el);
    }
  });
}

window.addEventListener('DOMContentLoaded', () => {
  renderProducts();

  document.querySelectorAll('.category-filter li').forEach(li => {
    li.addEventListener('click', () => {
      document.querySelectorAll('.category-filter li').forEach(el => el.classList.remove('active'));
      li.classList.add('active');
      const cat = li.getAttribute('data-filter');
      renderProducts(cat);
    });
  });

  renderCart();
  if (cart.length > 0) {
    cartContainer.style.display = 'block';
    cartIcon.style.display = 'none';
  }
});

cartIcon.addEventListener('click', () => {
  if (cart.length > 0) {
    cartIcon.style.display = 'none';
    cartContainer.style.display = 'block';
  }
});


function addToCart(item) {
  const existingItem = cart.find(i => i.name === item.name);
  if (existingItem) {
    existingItem.quantity = (existingItem.quantity || 1) + 1;
  } else {
    item.quantity = 1;
    cart.push(item);
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}

function renderCart() {
  cartItemsList.innerHTML = '';
  let total = 0;

  if (cart.length === 0) {
    cartContainer.style.display = 'none';
    cartTotal.textContent = '0 UAH';
    return;
  } else {
    cartContainer.style.display = 'block';
  }

  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${item.name} (${item.quantity || 1}) - ${item.price * (item.quantity || 1)} UAH
      <button onclick="removeFromCart(${index})">✖</button>
    `;
    cartItemsList.appendChild(li);
    total += item.price * (item.quantity || 1);
  });

  cartTotal.textContent = `${total} UAH`;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}

// ensure cart is shown on load
window.addEventListener('DOMContentLoaded', () => {
  renderCart();
});
