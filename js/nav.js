document.addEventListener('DOMContentLoaded', () => {
    const navbarNav = document.getElementById('portfolioNavbar');
    const navbarCollapse = new bootstrap.Collapse(navbarNav, { toggle: false });
    const navItems = document.querySelectorAll('.nav-item:not(.dropdown) .nav-link, .dropdown-menu .dropdown-item');
    const profileDropdown = document.querySelector('.dropdown-toggle');
    const hamburger = document.querySelector('.hamburger');

    // Function to close navbar on item click (excluding dropdown toggle)
    const closeNavbar = () => {
        if (navbarNav.classList.contains('show')) {
            hamburger.classList.toggle('is-active');
            navbarCollapse.hide();
        }
    };

    // Attach event listeners to all nav items (excluding dropdown toggle)
    navItems.forEach(navItem => {
        navItem.addEventListener('click', closeNavbar);
    });

    // Prevent navbar from closing when clicking the Profile dropdown toggle
    profileDropdown.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    // Handle dropdown hover effects (for desktop)
    document.querySelectorAll(".nav-item.dropdown").forEach((dropdown) => {
        let menu = dropdown.querySelector(".dropdown-menu");

        dropdown.addEventListener("mouseenter", function () {
            menu.style.display = "block";
            menu.style.maxHeight = menu.scrollHeight + "px"; // Expand to fit content
            menu.style.opacity = "1";
            menu.style.transform = "translateY(0)";
            menu.style.visibility = "visible";
        });

        dropdown.addEventListener("mouseleave", function () {
            menu.style.maxHeight = "0"; // Collapse smoothly
            menu.style.opacity = "0";
            menu.style.transform = "translateY(-10px)";
            menu.style.visibility = "hidden";
            setTimeout(() => {
                menu.style.display = "none";
            }, 400); // Hide after transition completes
        });
    });

    // Handle dropdown click toggle (for mobile users)
    document.querySelectorAll('.dropdown-toggle').forEach(dropdownToggle => {
        dropdownToggle.addEventListener('click', function (event) {
            event.preventDefault();
            const parent = this.parentElement;
            parent.classList.toggle('show');
        });
    });

    // Handle the hamburger menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('is-active');
    });

    // Handles navbar disappearing on scroll down
    window.addEventListener("scroll", function () {
        const navbar = document.querySelector(".custom-nav");
        let scrollTop = window.scrollY;

        if (scrollTop > 70) {
            navbar.classList.add("nav-hidden"); // Hides navbar on scroll
        } else {
            navbar.classList.remove("nav-hidden"); // Shows navbar at top
        }
    });

    // Close navbar when clicking outside

    document.addEventListener('click', (event) => {
        const isClickInsideNavbar = navbarNav.contains(event.target || hamburger.contains(event.target));

        if (!isClickInsideNavbar) {
            closeNavbar();
        }
    })
});