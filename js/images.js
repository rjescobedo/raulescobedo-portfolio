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