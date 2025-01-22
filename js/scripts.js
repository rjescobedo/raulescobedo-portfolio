//Dark mode
const darkModeToggle = document.getElementById('dark-mode-toggle');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.classList.toggle('dark-mode');
});

// Dynamically load profile photo
const img = document.querySelector('.intro_img');

const handleImageLoad = () => {
    img.classList.add('loaded');
};

// Check if the image has already loaded (cached) or add an event listener
if (img.complete) {
    handleImageLoad();
} else {
    img.onload = handleImageLoad;
    img.onerror = () => console.error("Image failed to load.");
}


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