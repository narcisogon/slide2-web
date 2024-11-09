// script.js

// Function to load HTML into a specific element
function loadHTML(elementId, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;

            // After loading header, set active navigation link
            if (elementId === 'header') {
                setActiveNavLink();
            }
        })
        .catch(error => console.error('Error loading ' + url + ':', error));
}

// Function to set the active navigation link based on current page
function setActiveNavLink() {
    const path = window.location.pathname;
    const page = path.split("/").pop();

    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === page) {
            link.classList.add('active');
        } else if (page === "" && link.getAttribute('href') === "index.html") {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Function to handle mobile menu toggle
function handleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const nav = document.querySelector('nav');

    menu.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

// Function to handle accordion in FAQs
function handleAccordion() {
    const acc = document.getElementsByClassName("accordion");

    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
}

// Function to handle form validations and submissions
function handleForms() {
    // Contact Form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Simple validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === '' || email === '' || subject === '' || message === '') {
                alert('Please fill in all fields.');
                return;
            }

            // Simulate form submission
            alert('Thank you for contacting us! We will get back to you soon.');

            // Reset the form
            contactForm.reset();
        });
    }

    // Booking Form
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Simple validation
            const name = document.getElementById('booking-name').value.trim();
            const email = document.getElementById('booking-email').value.trim();
            const date = document.getElementById('booking-date').value;
            const ticketType = document.getElementById('ticket-type').value;
            const guests = document.getElementById('guests').value;

            if (name === '' || email === '' || date === '' || ticketType === '' || guests === '') {
                alert('Please fill in all fields.');
                return;
            }

            // Simulate form submission
            alert('Thank you for your booking! We will confirm your reservation soon.');

            // Reset the form
            bookingForm.reset();
        });
    }
}

// Function to handle testimonial slider
function handleTestimonials() {
    const testimonials = document.querySelectorAll('.testimonial');
    let current = 0;

    setInterval(() => {
        testimonials[current].classList.remove('active');
        current = (current + 1) % testimonials.length;
        testimonials[current].classList.add('active');
    }, 5000); // Change testimonial every 5 seconds
}

// Function to handle attractions carousel
function handleCarousel() {
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let current = 0;

    function showSlide(index) {
        carouselItems.forEach((item, i) => {
            item.classList.remove('active');
            if (i === index) {
                item.classList.add('active');
            }
        });
    }

    prevBtn.addEventListener('click', () => {
        current = (current === 0) ? carouselItems.length - 1 : current - 1;
        showSlide(current);
    });

    nextBtn.addEventListener('click', () => {
        current = (current === carouselItems.length - 1) ? 0 : current + 1;
        showSlide(current);
    });

    // Initialize
    showSlide(current);
}

// Initialize all functionalities after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Load Header and Footer
    loadHTML('header', 'header.html');
    loadHTML('footer', 'footer.html');

    // Handle Mobile Menu
    handleMobileMenu();

    // Handle FAQs Accordion
    handleAccordion();

    // Handle Forms
    handleForms();

    // Handle Testimonials
    handleTestimonials();

    // Handle Carousel
    handleCarousel();
});
