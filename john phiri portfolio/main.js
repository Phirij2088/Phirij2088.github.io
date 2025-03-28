document.addEventListener('DOMContentLoaded', function() {

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li');
const yearSpan = document.getElementById('year');

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    // Toggle active class on hamburger
    hamburger.classList.toggle('active');
    
    // Toggle active class on nav links
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a nav item
navItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Set current year in footer
yearSpan.textContent = new Date().getFullYear();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Sticky navbar on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('sticky', window.scrollY > 0);
});

// Animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.skill-card, .section-title');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Set initial state for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.skill-card, .section-title');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.5s ease';
    });
    
    // Trigger animation once after page load
    setTimeout(animateOnScroll, 500);
});

// Add scroll event listener for animation
window.addEventListener('scroll', animateOnScroll);



// Contact form handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send the data to a server
    // For now, we'll just log it and show a success message
    console.log({name, email, subject, message});
    
    alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon.`);
    
    // Reset the form
    this.reset();
});
});

