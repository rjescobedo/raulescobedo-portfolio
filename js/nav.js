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

    // Handles the navbar so it begins fixed and goes away gracefully
    window.addEventListener("scroll", function () {
        const navbar = document.querySelector(".custom-nav");
        let scrollTop = window.scrollY;

        if (scrollTop > 70) {
            // If scrolled past 70px, hide navbar
            navbar.classList.add("nav-hidden");
        } else {
            // If at the top (scrollY === 0), show navbar
            navbar.classList.remove("nav-hidden");
        }
    });

});