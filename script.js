// Hero Section Animation
const intro = document.querySelector('.intro-text');
const pic = document.querySelector('.profile-pic');
const hero = document.querySelector('.hero');

const heroObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      intro.classList.add('animate-left');
      pic.classList.add('animate-right');
    }
  });
}, { threshold: 0.5 });
heroObserver.observe(hero);

// Project Cards Reveal + Hover Trigger
const projectCards = document.querySelectorAll('.project-card');
const revealOnScroll = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
};
const observer = new IntersectionObserver(revealOnScroll, { threshold: 0.1 });
projectCards.forEach(card => observer.observe(card));

// About Section Animation
const aboutSection = document.querySelector('#about');
const aboutObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      aboutSection.classList.add('animate-about');
      aboutObserver.unobserve(aboutSection);
    }
  });
}, { threshold: 0.3 });
aboutObserver.observe(aboutSection);

// Contact Section Animation
const contactSection = document.querySelector('#contact');
const contactObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      contactSection.classList.add('animate-contact');
      contactObserver.unobserve(contactSection);
    }
  });
}, { threshold: 0.3 });
contactObserver.observe(contactSection);
