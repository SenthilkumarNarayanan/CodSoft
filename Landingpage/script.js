document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const body = document.body;
  
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  
    darkModeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
    });
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  });
  