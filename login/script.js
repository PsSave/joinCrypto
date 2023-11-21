const perfilAcesso = [
  {
    email: `teste123@gmail.com`,
    password: `11233`
  }
]

document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.querySelector('.form');
  loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const perfilValido = perfilAcesso.find(profile => profile.email === email && profile.password === password);

    if (perfilValido) {
      window.location.href = 'http://127.0.0.1:5500/home/index.html';
    } else {
      alert('Credenciais inválidas. Tente novamente.');
    }
  });
});
