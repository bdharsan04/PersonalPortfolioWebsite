document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    const navbar = document.getElementById('navbar');
    const backToTop = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            backToTop.classList.add('active');
        } else {
            navbar.style.boxShadow = 'none';
            backToTop.classList.remove('active');
        }
    });
    
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 300) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
    
    document.getElementById('year').textContent = new Date().getFullYear();
    
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    const formSuccess = document.getElementById('formSuccess');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;
        
        document.querySelectorAll('.error-message').forEach(msg => {
            msg.style.display = 'none';
        });
        
        if (nameInput.value.trim() === '') {
            nameInput.nextElementSibling.style.display = 'block';
            isValid = false;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            emailInput.nextElementSibling.style.display = 'block';
            isValid = false;
        }
        
        if (subjectInput.value.trim() === '') {
            subjectInput.nextElementSibling.style.display = 'block';
            isValid = false;
        }
        
        if (messageInput.value.trim() === '') {
            messageInput.nextElementSibling.style.display = 'block';
            isValid = false;
        }
        
        if (isValid) {
            formSuccess.style.display = 'block';
            contactForm.reset();
            
            setTimeout(() => {
                formSuccess.style.display = 'none';
            }, 3000);
        }
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
