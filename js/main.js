
class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#_ABCDEFGHIJKLMNOPQQRSTUVWXYZ本网站目前正在重建，以提高导航的质量本サイトは、ナビゲーションの品質向上のため、現在再構築中です。для улучшения качества навигации';
    this.update = this.update.bind(this);
  }

  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => this.resolve = resolve);
    this.queue = [];

    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 100);
      const end = start + Math.floor(Math.random() * 100);
      this.queue.push({ from, to, start, end });
    }

    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }

  update() {
    let output = '';
    let complete = 0;

    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];

      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.01) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }

    this.el.innerHTML = output;

    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }

  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

let phrases = [
  'Développement WEB',
  'Arts Numériques',
  'A propos'
];

const textContainers = Array.from(document.querySelectorAll('.text-container'));
const fxArray = textContainers.map(container => new TextScramble(container.querySelector('.text')));

let counter = 0;

const setTextAndContinue = () => {
  fxArray[counter].setText(phrases[counter]).then(() => {
    setTimeout(() => {
      if (counter < phrases.length - 1) {
        textContainers[counter].classList.add('hide');
        counter++;
        textContainers[counter].classList.remove('hide');
        setTextAndContinue();
      }
    }, 30);
  });
};

textContainers[counter].classList.remove('hide');
setTextAndContinue();

const title = document.querySelector('.title');
title.classList.add('visible');


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