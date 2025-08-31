// Esconde/mostra a barra de navegação conforme o scroll
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
  if (!navbar) return; // segurança caso o elemento não exista
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Rolando para baixo - esconde
    navbar.classList.add('hidden');
  } else {
    // Rolando para cima - mostra
    navbar.classList.remove('hidden');
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
