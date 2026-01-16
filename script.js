function mostrar(id) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(p => p.classList.remove('show'));

  document.getElementById(id).classList.add('show');

  const menu = document.querySelector('.menu');
  menu.classList.remove('show');
}

function toggleMenu() {
  document.querySelector('.menu').classList.toggle('show');
}
