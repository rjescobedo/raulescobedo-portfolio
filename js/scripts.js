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

    // Optionally: Handle the hamburger toggle independently if needed
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('is-active');
    });
});

//Dark mode
const darkModeToggle = document.getElementById('dark-mode-toggle');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.classList.toggle('dark-mode');
});

//Dynamically load profile photo
const img = document.querySelector('.intro_img');

img.onload = () => {
    img.classList.add('loaded');
};


//Puns
async function fetchPun() {
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');
        const data = await response.json();
        if (data.joke) {
            document.getElementById('pun').innerText = data.joke;
        } else {
            document.getElementById('pun').innerText = "Couldn't fetch a pun today, try again later!";
        }
    } catch (error) {
        document.getElementById('pun').innerText = "Error fetching pun: " + error.message;
    }
}
fetchPun();

//Contact Form
// Select the form and status elements
const contactForm = document.getElementById('contact-form');
const status = document.getElementById('status');

// Add the submit event listener
contactForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    const formData = new FormData(contactForm); // Collect form data

    try {
        // Send the form data to Formspree
        const response = await fetch(contactForm.action, {
            method: contactForm.method,
            body: formData,
            headers: {
                Accept: 'application/json',
            },
        });

        if (response.ok) {
            // Success: Update the status message and reset the form
            updateStatus(
                "Thank you for reaching out! Your message has been sent successfully. I'll get back to you soon!",
                'success'
            );
            contactForm.reset();
        } else {
            // Failure: Display an error message
            updateStatus(
                "Oops! Something went wrong, and we couldn't send your message. Please try again or contact me directly at raul.escobedo1012@gmail.com.",
                'error'
            );
        }
    } catch (error) {
        // Handle network or unexpected errors
        updateStatus(
            "Oops! Something went wrong, and we couldn't send your message. Please try again or contact me directly at raul.escobedo1012@gmail.com. Thank you!",
            'error'
        );
    }
});

/**
 * Updates the status message on the page.
 * @param {string} message - The message to display.
 * @param {string} className - The CSS class to apply ('success' or 'error').
 */
function updateStatus(message, className) {
    status.textContent = message;
    status.className = className;
}

// Handles smooth scrolling behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 50; // Adjust for fixed headers or spacing
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});