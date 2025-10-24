document.addEventListener('DOMContentLoaded', () => {
  const contenedor = document.getElementById('contenido');
  const navLinks = document.querySelector('.nav-links');
  const toggle = document.getElementById('menu-toggle');
  const header = document.querySelector('header');

  function cargarSeccion() {
    let seccion = location.hash.slice(1) || 'inicio';
    fetch(`secciones/${seccion}.html`)
      .then(res => res.ok ? res.text() : Promise.reject('No encontrado'))
      .then(html => {
        contenedor.classList.remove('fade-in');
        contenedor.innerHTML = html;
        void contenedor.offsetWidth;
        contenedor.classList.add('fade-in');
        navLinks?.classList.remove('show');
      })
      .catch(() => contenedor.innerHTML = '<p>Sección no encontrada.</p>');
  }

  cargarSeccion();
  window.addEventListener('hashchange', cargarSeccion);

  toggle?.addEventListener('click', () => {
    navLinks?.classList.toggle('show');
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks?.classList.remove('show');
    });
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});