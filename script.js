// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Handle Form Submission
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for your message!');
  form.reset();
});
