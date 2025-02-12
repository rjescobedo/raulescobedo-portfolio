const googleReviews = [
    {
        name: "Kaitlin E.",
        review: "Raul designed an app for me to use with my clients. It is easy to navigate, professional, and works on both the phone and on safari. I’m impressed with his creativity and specific attention to detail that he brings in the design itself. He also explained thoroughly how to work through the site and was open to input from me along the way. He communicated really well with me and continues to do so if there’s any change I want to make to how the app looks or runs.",
        rating: 5
    }
]
    function displayReview(reviews) {
    const reviewCard = document.getElementById('review-card');
    reviewCard.innerHTML = ''; // Clear existing content

    reviews.forEach((review) => {
        const reviewContainer = document.createElement('div');
        reviewContainer.classList.add('review-container');

        const reviewRating = document.createElement('div');
        reviewRating.classList.add('review-rating');
        reviewRating.innerHTML = generateStars(review.rating); // Generate star rating dynamically

        const reviewDescription = document.createElement('p');
        reviewDescription.classList.add('review-description');
        reviewDescription.textContent = `"${review.review}"`;

        const reviewName = document.createElement('h3');
        reviewName.classList.add('review-name');
        reviewName.textContent = `- ${review.name}`;

        // Append elements to review container
        reviewContainer.appendChild(reviewRating);
        reviewContainer.appendChild(reviewDescription);
        reviewContainer.appendChild(reviewName);

        // Append review container to the main card
        reviewCard.appendChild(reviewContainer);
    });
}

// Function to generate star rating dynamically
function generateStars(rating) {
    let stars = "";
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars += " ⭐ "; // Filled star
        } else {
            stars += "☆"; // Empty star
        }
    }
    return stars;
}

displayReview(googleReviews);