const heroSection = document.querySelector('.hire_me-hero');

const handleImageLoad = () => {
    heroSection.classList.add('loaded');
};

// Create a new Image object to check if the background image is loaded
const img = new Image();
img.src = '/img/hire_me-hero.avif';  // The path to your image

// Check if the image has already loaded (cached) or add an event listener
img.onload = handleImageLoad;
img.onerror = () => console.error("Image failed to load.");