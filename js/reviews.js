const googleReviews = [
    {
        name: "Kaitlin E.",
        review: "Raul designed an app for me to use with my clients. It is easy to navigate, professional, and works on both the phone and on safari. I’m impressed with his creativity and specific attention to detail that he brings in the design itself. He also explained thoroughly how to work through the site and was open to input from me along the way. He communicated really well with me and continues to do so if there’s any change I want to make to how the app looks or runs.",
        rating: 5,
        source: 'Google'
    }, 
    {
        name: "Enid P.",
        review: "Raul captured my vision perfectly & went above and beyond! He was quick, responsive, and so extremely creative in his work.",
        rating: 5,
        source: 'Thumbtack'
    }
];

function displayReviews(reviews) {
    const reviewList = document.getElementById('review-list');
    reviewList.innerHTML = ''; // Clear existing content

    reviews.forEach((review) => {
        const reviewContainer = document.createElement('div');
        reviewContainer.classList.add('review-card');

        const reviewRating = document.createElement('div');
        reviewRating.classList.add('review-rating');
        reviewRating.innerHTML = generateStars(review.rating);

        const reviewDescription = document.createElement('p');
        reviewDescription.classList.add('review-description');
        
        const isLongReview = review.review.length > 150;

        if (isLongReview) {
            reviewDescription.textContent = `"${review.review.substring(0, 150)}..."`;
            reviewDescription.setAttribute("data-full-text", `"${review.review}"`);
            reviewDescription.setAttribute("data-short-text", `"${review.review.substring(0, 150)}..."`);
        } else {
            reviewDescription.textContent = `"${review.review}"`; // Show full text for short reviews
        }

        const reviewName = document.createElement('h3');
        reviewName.classList.add('review-name');
        reviewName.textContent = `- ${review.name}`;

        const reviewSource = document.createElement('p');
        reviewSource.classList.add('review-source');
        reviewSource.textContent = `${review.source} Review`;

        reviewContainer.appendChild(reviewRating);
        reviewContainer.appendChild(reviewDescription);

        if (isLongReview) {
            const readMoreBtn = document.createElement('button');
            readMoreBtn.classList.add('read-more-btn');
            readMoreBtn.textContent = "Read More";
            readMoreBtn.setAttribute("data-expanded", "false");

            readMoreBtn.addEventListener("click", () => {
                const isExpanded = readMoreBtn.getAttribute("data-expanded") === "true";
                reviewDescription.textContent = isExpanded ? reviewDescription.getAttribute("data-short-text") : reviewDescription.getAttribute("data-full-text");
                readMoreBtn.textContent = isExpanded ? "Read More" : "Show Less";
                readMoreBtn.setAttribute("data-expanded", isExpanded ? "false" : "true");
            });

            reviewContainer.appendChild(readMoreBtn);
        }

        reviewContainer.appendChild(reviewName);
        reviewContainer.appendChild(reviewSource);
        reviewList.appendChild(reviewContainer);
    });
}

// Function to generate star rating dynamically
function generateStars(rating) {
    let stars = "";
    for (let i = 0; i < 5; i++) {
        stars += i < rating ? "⭐" : "☆";
    }
    return stars;
}

displayReviews(googleReviews);