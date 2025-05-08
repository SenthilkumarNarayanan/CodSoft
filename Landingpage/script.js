const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

// Toggle the menu visibility and change the hamburger icon
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle the visibility of the menu

    // Toggle between the hamburger and close icon
    hamburger.classList.toggle('open');
});

// Close the hamburger menu when a menu item is clicked
const menuLinks = document.querySelectorAll('.nav-links li a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active'); // Close the menu
            hamburger.classList.remove('open'); // Reset the hamburger icon to open state
        }
    });
});
