document.getElementById('bitcoin-card').addEventListener('click', function(event) {
  updateInfo('Bitcoin', 'O Bitcoin é a primeira e mais popular criptomoeda, lançada em 2009. Operando em uma rede descentralizada, permite transações seguras e globais, desafiando o sistema financeiro tradicional. Sua oferta limitada confere-lhe características de reserva de valor.', event);
});
document.getElementById('ethereum-card').addEventListener('click', function(event) {
  updateInfo('Ethereum', 'O Ethereum é uma criptomoeda lançada em 2015, conhecida por sua capacidade de suportar contratos inteligentes. Além de transações financeiras seguras, oferece uma plataforma para aplicativos descentralizados (DApps), ampliando as possibilidades de inovação e automação na blockchain.', event);
});
document.getElementById('tron-card').addEventListener('click', function(event) {
updateInfo('Tron', 'A Tron é uma criptomoeda que visa construir uma internet descentralizada e livre. Fundada por Justin Sun, a Tron busca criar um ambiente onde os usuários possam publicar, armazenar e possuir dados de maneira econômica.', event);
});

document.getElementById('dash-card').addEventListener('click', function(event) {
  updateInfo('Dash', 'Dash é uma criptomoeda que se concentra na privacidade e na velocidade das transações. Ela permite transações instantâneas e privadas, tornando-a uma escolha popular para aqueles que buscam maior anonimato nas transações.', event);
});

function updateInfo(cryptoName, cryptoDescription, event) {
  document.querySelector('.info-header h3').textContent = cryptoName;
  document.querySelector('.info-header p').textContent = cryptoDescription;

  document.querySelectorAll('.card').forEach(function(card) {
    card.classList.remove('active');
  });
  event.target.classList.add('active');
  document.querySelector('.info-header button').style.display = 'block';
}

function addToCart(event) {
  let purchaseInfo = null;
  let cart = [];

  const activeCard = document.querySelector('.card.active');
  if (activeCard) {
    purchaseInfo = {
      cryptoName: activeCard.querySelector('.tag p').textContent,
      cryptoPrice: activeCard.querySelector('span').textContent,
      cryptoImg: activeCard.querySelector('img').src,
    };
  }

  try {
    const storedCart = localStorage.getItem('cart');
    cart = storedCart ? JSON.parse(storedCart) : [];
  } catch (error) {
    console.error('Erro ao analisar o carrinho do localStorage:', error);
  }

  if (purchaseInfo) {
    const isAlreadyInCart = cart.some(
      (item) =>
        item.cryptoName === purchaseInfo.cryptoName &&
        item.cryptoPrice === purchaseInfo.cryptoPrice
    );

    if (!isAlreadyInCart) {
      cart.push(purchaseInfo);
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartCounter();
      console.log('Item adicionado ao carrinho:', purchaseInfo);
    } else {
      console.log('Item já está no carrinho:', purchaseInfo);
    }
  } else {
    console.error('Nenhum cartão ativo encontrado para adicionar ao carrinho.');
  }
}

function updateCartCounter() {
  const cartCounterElement = document.querySelector('.car-shop small');
  let cartCount = parseInt(cartCounterElement.textContent) || 0;
  cartCount++;
  cartCounterElement.textContent = cartCount;

  // Atualizar o localStorage com o novo valor do contador
  localStorage.setItem('cartCount', cartCount);
}

const storedCartCount = localStorage.getItem('cartCount');
if (storedCartCount) {
  const cartCounterElement = document.querySelector('.car-shop small');
  cartCounterElement.textContent = storedCartCount;
}

document.querySelector('.fa-arrow-right-from-bracket').addEventListener('click', function() {
  window.location.href = 'http://127.0.0.1:5500/login/index.html';
});

document.querySelector('.info-header button').addEventListener('click', (e) => addToCart(e));

