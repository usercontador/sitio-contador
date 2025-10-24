document.addEventListener('DOMContentLoaded', () => {
  const contenedor = document.getElementById('contenido');

  function cargarSeccion() {
    let seccion = location.hash.slice(1) || 'inicio';
    fetch(`secciones/${seccion}.html`)
      .then(res => res.ok ? res.text() : Promise.reject('No encontrado'))
      .then(html => contenedor.innerHTML = html)
      .catch(() => contenedor.innerHTML = '<p>Sección no encontrada.</p>');
  }

  cargarSeccion();
  window.addEventListener('hashchange', () => {
    cargarSeccion();

    // 🔽 Cerrar menú hamburguesa al navegar
    const navLinks = document.querySelector('.nav-links');
    navLinks?.classList.remove('show');
  });

  // Botón menú hamburguesa
  const toggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }
});