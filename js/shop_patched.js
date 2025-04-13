
const products = [
  /* Auto */
  { name: "BMW", price: 250, category: "автомобілі", image: "..//img/img-auto/auto/bmw.png" },
  { name: "Sarka", price: 135, category: "автомобілі", image: "..//img/img-auto/auto/sarka.png" },
  { name: "ЗІЛ", price: 200, category: "автомобілі", image: "..//img/img-auto/auto/zil.png" },
  { name: "Gunter", price: 350, category: "автомобілі", image: "..//img/img-auto/auto/gunter.png" },
  { name: "Dingo ATF", price: 500, category: "автомобілі", image: "..//img/img-auto/auto/dingo.png" },
  { name: "HMMWV", price: 200 , category: "автомобілі", image: "..//img/img-auto/auto/hammer.png" },
  { name: "Ada 4x4", price: 135, category: "автомобілі", image: "..//img/img-auto/auto/niva.png" },
  { name: "ГАЗ-24 Волга", price: 135, category: "автомобілі", image: "..//img/img-auto/auto/olga.png" },
  { name: "M3S", price: 150, category: "автомобілі", image: "..//img/img-auto/auto/vetreez.png" },
  { name: "Запорожець", price: 200, category: "автомобілі", image: "..//img/img-auto/auto/zapor.png" },


  /* Furnitura */
  { name: "Шкаф Великий", price: 50, category: "фурнітура", image: "..//img/img-auto/furnitura/1.png" },
  { name: "Шкафа для Зброї", price: 50, category: "фурнітура", image: "..//img/img-auto/furnitura/2.png" },
  { name: "Піддон", price: 50, category: "фурнітура", image: "..//img/img-auto/furnitura/5.png" },
  { name: "Плита", price: 50, category: "фурнітура", image: "..//img/img-auto/furnitura/7.png" },
  { name: "Бочка", price: 50, category: "фурнітура", image: "..//img/img-auto/furnitura/3.png" },
  { name: "Стійка Для Костюма", price: 40, category: "фурнітура", image: "..//img/img-auto/furnitura/4.png" },
  { name: "Набір дерев’яних ящиків, 10 шт.", price: 70, category: "фурнітура", image: "..//img/img-auto/furnitura/6.png" },
  { name: "Стійка Для Ящиків", price: 50, category: "фурнітура", image: "..//img/img-auto/furnitura/8.png" },
  { name: "Стійка для зброї", price: 50, category: "фурнітура", image: "..//img/img-auto/furnitura/9.png" },

  /* Стройка */
  { name: "Колун", price: 50, category: "будівництво", image: "..//img/img-auto/stroika/axe.png" },
  { name: "Колючий дрiт", price: 20, category: "будівництво", image: "..//img/img-auto/stroika/barbedwire.png" },
  { name: "Codelock", price: 50, category: "будівництво", image: "..//img/img-auto/stroika/codelock.png" },
  { name: "Викрутка", price: 50, category: "будівництво", image: "..//img/img-auto/stroika/epoxy_putty.png" },
  { name: "Набiр для флагштока", price: 100, category: "будівництво", image: "..//img/img-auto/stroika/flagkit.png" },
  { name: "Молоток", price: 20, category: "будівництво", image: "..//img/img-auto/stroika/hammer.png" },
  { name: "Чорний ящик", price: 100, category: "будівництво", image: "..//img/img-auto/stroika/black-box.png" },
  { name: "Сокира", price: 35, category: "будівництво", image: "..//img/img-auto/stroika/hatchet.png" },
  { name: "Листи металу <br>10 шт.", price: 75, category: "будівництво", image: "..//img/img-auto/stroika/metalplate.png" },
  { name: "Дрiт", price: 20, category: "будівництво", image: "..//img/img-auto/stroika/metalwire.png" },
  { name: "Цвяхи", price: 50, category: "будівництво", image: "..//img/img-auto/stroika/nails.png" },
  { name: "Дошка 10 шт.", price: 30, category: "будівництво", image: "..//img/img-auto/stroika/planks.png" },
  { name: "Плоскогубцi", price: 40, category: "будівництво", image: "..//img/img-auto/stroika/pliers.png" },
  { name: "Пила", price: 35, category: "будівництво", image: "..//img/img-auto/stroika/saw.png" },
  { name: "Лопата", price: 25, category: "будівництво", image: "..//img/img-auto/stroika/shovel.png" },
  { name: "Кувалда", price: 40, category: "будівництво", image: "..//img/img-auto/stroika/sledgehammer.png" },
  { name: "Колода 10 шт. ", price: 30, category: "будівництво", image: "..//img/img-auto/stroika/woodlogs.png" },

  /* Сети одягу */

  { name: "Лісовий патруль", price: 200, category: "Сети одягу", image: "..//img/img-auto/set-cloth/1.png" },
  { name: "Тактик", price: 200, category: "Сети одягу", image: "..//img/img-auto/set-cloth/2.png" },
  { name: "Черногорский авторитет", price: 150, category: "Сети одягу", image: "..//img/img-auto/set-cloth/3.png" },
  { name: "Сталкер", price: 250, category: "Сети одягу", image: "..//img/img-auto/set-cloth/4.png" },
  { name: "Пустельний боєць", price: 300, category: "Сети одягу", image: "..//img/img-auto/set-cloth/5.png" },
  { name: "Кібер-рейнджер", price: 200, category: "Сети одягу", image: "..//img/img-auto/set-cloth/6.png" },
  { name: "Привид", price: 150, category: "Сети одягу", image: "..//img/img-auto/set-cloth/7.png" },
  { name: "Повстанський дух", price: 200, category: "Сети одягу", image: "..//img/img-auto/set-cloth/8.png" },
  { name: "Клоун-месник", price: 200, category: "Сети одягу", image: "..//img/img-auto/set-cloth/9.png" },
  { name: "Нічний рейдер", price: 200, category: "Сети одягу", image: "..//img/img-auto/set-cloth/10.png" },

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
