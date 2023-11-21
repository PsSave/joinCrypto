function getCartItems() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  return cartItems;
}


