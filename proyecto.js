
function mostrarsección(sección) {
}
document.querySelectorAll('.navbar-animada li').forEach((li) => {
  li.addEventListener('click', function () {
    document.querySelectorAll('.navbar-animada li').forEach((item) => item.classList.remove('active-element'));
    this.classList.add('active-element');
  });
});

let lastScrollTop = 0;
const navbar = document.getElementById("navChoco");
let isExpanded = true;

window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop && isExpanded) {
    // Bajando: minimizar
    navbar.classList.add("minimized");
    isExpanded = false;
  } else if (scrollTop < lastScrollTop && !isExpanded) {
    // Subiendo: si llegamos al top, expandir
    if (scrollTop <= 0) {
      navbar.classList.remove("minimized");
      isExpanded = true;
    }
  }

  lastScrollTop = scrollTop;
});

// Clic manual para expandir
navbar.addEventListener("click", () => {
  if (navbar.classList.contains("minimized")) {
    navbar.classList.remove("minimized");
    isExpanded = true;
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Expansión de bloques de estadísticas
document.addEventListener('DOMContentLoaded', () => {
  const bloques = document.querySelectorAll('.estadistica');
  const fondo = document.getElementById('fondoOscuro');

  bloques.forEach(bloque => {
    bloque.addEventListener('click', e => {
      e.stopPropagation();
      bloques.forEach(b => b.classList.remove('expandida')); // cierra los otros
      bloque.classList.add('expandida');
      fondo.classList.add('activo');
    });
  });

  document.addEventListener('click', () => {
    bloques.forEach(b => b.classList.remove('expandida'));
    fondo.classList.remove('activo');
  });

  fondo.addEventListener('click', () => {
    bloques.forEach(b => b.classList.remove('expandida'));
    fondo.classList.remove('activo');
  });
});

