// Navbar: reduce padding al hacer scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Scroll suave para el botón del hero
document.querySelector('.btn-outline').addEventListener('click', (e) => {
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
});
