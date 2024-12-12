document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Message sent successfully!\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
        // Reset the form
        e.target.reset();
    } else {
        alert("Please fill out all fields.");
    }
});

// Get the navbar element
const navbar = document.getElementById('navbar');

// When the user scrolls, execute the function
window.onscroll = function() {
  // Check if the page has been scrolled more than 50px
  if (window.scrollY > 50) {
    navbar.classList.add('sticky'); // Add class to change background color
  } else {
    navbar.classList.remove('sticky'); // Remove class to keep it transparent
  }
};
