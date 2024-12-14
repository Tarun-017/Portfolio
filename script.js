// Navigation Bar Element
const navbar = document.getElementById('navbar');

window.onscroll = function () {
  if (window.scrollY > 50){
    navbar.classList.add('sticky'); 
  } 
  else {
    navbar.classList.remove('sticky'); 
  }
};

// Hamburger logo
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  nav.classList.toggle('active');
});

// Contect Input Element
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    alert(`Message sent successfully!\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
    e.target.reset();
  } 
  else {
    alert("Please fill out all fields.");
  }
});