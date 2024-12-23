// Toggle Mobile Menu
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.navbar .mobile-menu-toggle');
    console.log('Hello');
    console.log('toggleButton =========>',toggleButton)

    const mobileMenu = document.querySelector('.navbar .mobile-menu-items');

    toggleButton.addEventListener('click', function() {
        console.log('saumya');
        mobileMenu.classList.toggle('active');

    });
});

// Change navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    console.log('navbar ====>',navbar);
    console.log(window.scrollY);
    if(window.scrollY > 0) {
        navbar.classList.add('navbar-scroll');
    }
     else {
        navbar.classList.remove('navbar-scroll');
    }
})