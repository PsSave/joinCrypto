function addMoreCoins(cryptoName) {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  // Verifica se a moeda já está no carrinho
  const existingItem = cartItems.find(item => item.cryptoName === cryptoName);

  if (existingItem) {
    // Se a moeda já estiver no carrinho, aumenta a quantidade
    existingItem.quantity += 1;
  }

  // Atualiza o localStorage e a interface do usuário
  localStorage.setItem("cart", JSON.stringify(cartItems));
  updateCart();
  updateTotalPrice();
}

function updateCart() {
  const cartItemsContainer = document.getElementById("cartItemsContainer");
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  // Limpar conteúdo atual
  cartItemsContainer.innerHTML = "";

  // Adicionar itens ao carrinho
  cartItems.forEach(item => {
    const productDiv = document.createElement("div");
    productDiv.innerHTML = `
      <img src="${item.cryptoImg}" alt="${item.cryptoName}">
      <p>${item.cryptoName}</p>
      <p>${item.cryptoPrice} x ${item.quantity}</p>
      <button onclick="addMoreCoins('${item.cryptoName}')">+</button>
      <button onclick="removeCoins('${item.cryptoName}')">-</button>
      <button onclick="removeItem('${item.cryptoName}')">
        <i class="fas fa-trash-alt"></i>
      </button>
    `;
    cartItemsContainer.appendChild(productDiv);
  });
}
