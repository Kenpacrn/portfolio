// Smooth Scroll Animations
const sections = document.querySelectorAll('.fade-in');

const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// Hamburger Menu for Mobile Navigation
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Contact Form Interaction
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thanks for reaching out! I will get back to you soon.');
});