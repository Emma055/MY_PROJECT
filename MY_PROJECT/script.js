// Smooth scrolling for navigation links
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    });
});

// Dynamic functionality for "Join Now" buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Thank you for joining GameZone!');
    });
});

// Responsive menu toggle (if you later add a hamburger menu for smaller screens)
const navToggle = document.createElement('div');
navToggle.className = 'nav-toggle';
navToggle.innerHTML = '☰';
document.querySelector('.header').appendChild(navToggle);

navToggle.addEventListener('click', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('open');
});








/*about section*/
// Smooth scrolling for navigation links
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior
        const targetId = this.getAttribute('href').split(".")[0]; // Get the href without extension
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    });
});

// Alert message for "Join Now" buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Welcome to GameZone! Thank you for joining us.');
    });
});

// Responsive menu toggle (for small screens)
const navToggle = document.createElement('div');
navToggle.className = 'nav-toggle';
navToggle.textContent = '☰'; // Hamburger menu icon
document.querySelector('.header').appendChild(navToggle);

navToggle.addEventListener('click', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('open'); // Toggle the 'open' class
});
