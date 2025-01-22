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