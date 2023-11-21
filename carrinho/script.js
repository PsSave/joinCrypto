function getCartItems() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  return cartItems;
}

function renderCartItems() {
  const cartItemsContainer = document.getElementById('cartItemsContainer');
  const cartItems = getCartItems();

  cartItemsContainer.innerHTML = '';

  cartItems.forEach(item => {
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('info-cart');

    itemContainer.innerHTML = `
      <div> 
        <img src="${item.cryptoImg}" alt="${item.cryptoName}">
        <i class="fas fa-trash-alt" onclick="removeCoins('${item.cryptoName}')"></i>
      </div>
      
    `;

    const title = document.createElement('p');
    title.classList.add('title');
    title.textContent = item.cryptoName;

    const priceContainer = document.createElement('div');
    priceContainer.classList.add('price-cart');

    priceContainer.innerHTML = `
      <p>${item.cryptoPrice}</p>
      <div>
        <button onclick="removeCoins('${item.cryptoName}')">-</button>
        <span>1</span>
        <button onclick="addMoreCoins('${item.cryptoName}')">+</button>
      </div>
    `;

    itemContainer.appendChild(title);
    itemContainer.appendChild(priceContainer);
    cartItemsContainer.appendChild(itemContainer);
  });

  updateTotalPrice();
}

function updateTotalPrice() {
  const cartItems = getCartItems();
  const totalPriceElement = document.getElementById('totalPrice');

  const totalPrice = cartItems.reduce((total, item) => {
    const price = parseFloat(item.cryptoPrice.replace('R$ ', '').replace(',', ''));
    return total + price;
  }, 0);

  totalPriceElement.textContent = `R$ ${totalPrice.toFixed(2)}`;
}

