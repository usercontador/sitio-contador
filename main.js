document.addEventListener('DOMContentLoaded', () => {
  const contenedor = document.getElementById('contenido');
  const navLinks = document.querySelector('.nav-links');
  const toggle = document.getElementById('menu-toggle');

  function cargarSeccion() {
    let seccion = location.hash.slice(1) || 'inicio';
    fetch(`secciones/${seccion}.html`)
      .then(res => res.ok ? res.text() : Promise.reject('No encontrado'))
      .then(html => {
        contenedor.innerHTML = html;
        navLinks?.classList.remove('show'); // cerrar menú después de carga
      })
      .catch(() => contenedor.innerHTML = '<p>Sección no encontrada.</p>');
  }

  cargarSeccion();
  window.addEventListener('hashchange', cargarSeccion);

  toggle?.addEventListener('click', () => {
    navLinks?.classList.toggle('show');
  });

  // También cerrar si se hace clic en cualquier link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks?.classList.remove('show');
    });
  });
});