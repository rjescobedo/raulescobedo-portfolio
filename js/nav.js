document.addEventListener('DOMContentLoaded', () => {
    const navbarNav = document.getElementById('portfolioNavbar');
    const navbarCollapse = new bootstrap.Collapse(navbarNav, { toggle: false });
    const navItems = document.querySelectorAll('.nav-item:not(.dropdown) .nav-link, .dropdown-menu .dropdown-item'); // Excludes dropdown toggle
    const profileDropdown = document.querySelector('.dropdown-toggle');
    const hamburger = document.querySelector('.hamburger');

    // Close navbar when clicking on an item inside (but not the dropdown toggle)
    const closeNavbar = () => {
        if (navbarNav.classList.contains('show')) {
            hamburger.classList.toggle('is-active');
            navbarCollapse.hide();
        }
    };

    // Add click event listener to each nav item EXCEPT the Profile dropdown toggle
    navItems.forEach(navItem => {
        navItem.addEventListener('click', closeNavbar);
    });

    // Prevent navbar from closing when clicking the Profile dropdown toggle
    profileDropdown.addEventListener('click', (event) => {
        event.stopPropagation(); // Stops the event from bubbling up
    });

    // Handle the hamburger toggle independently
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('is-active');
    });
});