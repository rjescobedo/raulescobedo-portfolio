document.addEventListener('DOMContentLoaded', () => {
    const navbarNav = document.getElementById('portfolioNavbar');
    const navbarCollapse = new bootstrap.Collapse(navbarNav, { toggle: false });
    const navItems = document.querySelectorAll('.nav-item');
    const hamburger = document.querySelector('.hamburger');

    // Handle the hamburger toggle independently
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('is-active');
    });
    
    // Toggle "is-active" class on hamburger and close the navbar
    const closeNavbar = () => {
        if (navbarNav.classList.contains('show')) {
            hamburger.classList.toggle('is-active');
            navbarCollapse.hide();
        }
    };

    // Add click event listener to each nav item
    navItems.forEach(navItem => {
        navItem.addEventListener('click', closeNavbar);
    });

});