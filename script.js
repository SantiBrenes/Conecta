function mostrar(id) {
  const secciones = document.querySelectorAll('.page');

  secciones.forEach(sec => {
    sec.classList.remove('visible');
  });

  document.getElementById(id).classList.add('visible');

  document.querySelector('.menu').classList.remove('show');

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function toggleMenu() {
  document.querySelector('.menu').classList.toggle('show');
}
