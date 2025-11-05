document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('.sidebar ul li a');
  const logoLink = document.querySelector('.logo-link');
  const sections = document.querySelectorAll('.section');

  function showSection(id) {
    sections.forEach(section => {
      if (section.id === id) {
        section.classList.add('active');
        section.focus();
        window.scrollTo(0, 0);
      } else {
        section.classList.remove('active');
      }
    });

    links.forEach(l => l.classList.remove('active'));
    links.forEach(l => {
      if (l.getAttribute('data-section') === id) {
        l.classList.add('active');
      }
    });
  }

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetSection = link.getAttribute('data-section');
      showSection(targetSection);
    });
  });

  logoLink.addEventListener('click', e => {
    e.preventDefault();
    showSection('inicio');
  });

  // Configura aquí tu número WhatsApp (sin signos ni espacios, código país incluido)
  const whatsappNumber = '573124283066'; // Cambia este número por el tuyo

  const whatsappBtn = document.getElementById('whatsapp-btn');
  whatsappBtn.href = `https://wa.me/${whatsappNumber}`;
  whatsappBtn.target = '_blank';
});
