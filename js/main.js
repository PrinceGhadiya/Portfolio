document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle nav on menu click
    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('open');
        menuToggle.classList.toggle('open');
    });

    // Close menu when a link is clicked (for mobile UX)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('open');
            menuToggle.classList.remove('open');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.querySelector('.preloader');
    window.addEventListener('load', function() {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    });

    // Typed.js initialization
if (document.querySelector('.typed-text')) {
    const typed = new Typed('.typed-text', {
        strings: ['Flutter Developer', 'UI/UX Designer', 'Mobile App Expert', 'Dart Programmer'],
        typeSpeed: 80,
        backSpeed: 80,
        loop: true,
        showCursor: false,
        cursorChar: '|'
    });
}
    // Theme Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Change icon
        const icon = this.querySelector('i');
        icon.classList.toggle('fa-moon');
        icon.classList.toggle('fa-sun');
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    
    menuToggle.addEventListener('click', function() {
        navbar.classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-times');
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navbar.classList.remove('active');
            menuToggle.querySelector('i').classList.remove('fa-times');
        });
    });

    // Active link on scroll
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 300) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Back to Top Button
    const backToTop = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    });
    
    backToTop.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Project Filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Animate progress bars on scroll
    const progressBars = document.querySelectorAll('.progress');
    
    function animateProgressBars() {
        progressBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width + '%';
        });
    }
    
    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                
                // Animate progress bars when skills section is visible
                if (entry.target.id === 'skills') {
                    animateProgressBars();
                }
            }
        });
    }, {
        threshold: 0.1
    });
    
    document.querySelectorAll('[data-animate]').forEach(el => {
        observer.observe(el);
    });

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

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            console.log({ name, email, subject, message });
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }
});

 // Wait until the DOM is fully loaded
 document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    // Loop through each button and add a click event
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'active' class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add 'active' class to the clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            // Loop through all project cards
            projectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                // Show all cards if filter is 'all'
                if (filterValue === 'all' || filterValue === cardCategory) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});