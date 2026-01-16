function mostrar(id) {
  const pages = document.querySelectorAll('.page');

  pages.forEach(p => {
    p.classList.remove('show');
  });

  const target = document.getElementById(id);
  if (target) {
    target.classList.add('show');
  }

  // Cerrar menú hamburguesa si está abierto
  const menu = document.querySelector('.menu');
  menu.classList.remove('show');
}

function toggleMenu() {
  document.querySelector('.menu').classList.toggle('show');
}
