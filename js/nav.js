document.addEventListener('DOMContentLoaded', () => {
    const navbarNav = document.getElementById('portfolioNavbar');
    const navbarCollapse = new bootstrap.Collapse(navbarNav, { toggle: false });
    const navItems = document.querySelectorAll('.nav-item');
    const hamburger = document.querySelector('.hamburger');

    
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
    
    // Handle the hamburger toggle independently
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('is-active');
    });

});

document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll("section");
    let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                window.history.replaceState(null, "", "/" + entry.target.id);
            }
        });
    }, { threshold: 0.5 });

    sections.forEach((section) => observer.observe(section));
});