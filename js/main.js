// Fonction pour le défilement en douceur
function smoothScroll(target, duration) {
  const targetElement = document.querySelector(target);
  const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
  const navHeight = document.querySelector('.menu').offsetHeight - 100; // Hauteur de la barre de navigation
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition - navHeight;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

// Écouteurs d'événements pour les liens de section
const sectionLinks = document.querySelectorAll('.text-link');
sectionLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const target = event.currentTarget.getAttribute('href');
    smoothScroll(target, 2500); // Durée du défilement en millisecondes
  });
});
<!--formulaire de contact-->
new Vue({
  el: '#app',
  data: {
    nom: '',
    email: '',
    message: ''
  },
  methods: {
    submitForm() {
      const emailContent = `
                        Nom : ${this.nom}
                        Email : ${this.email}
                        Message : ${this.message}
                    `;

      const email = "stevenbachimont@gmail.com";
      const subject = "Nouveau de contact";

      const isChrome = /Chrome/.test(navigator.userAgent);

      if (isChrome) {
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailContent)}`;
        window.open(gmailUrl);
      } else {
        const mailtoUri = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailContent)}`;
        window.location.href = mailtoUri;
      }
    }
  }

});
