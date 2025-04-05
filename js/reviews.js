import { googleReviews } from './data.js';

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
        reviewName.textContent = `${review.name}`;

        const reviewSource = document.createElement('p');
        reviewSource.classList.add('review-source');
        reviewSource.textContent = `${review.source}`;

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
        stars += i < rating ? " ⭐ " : " ☆ ";
    }
    return stars;
}

displayReviews(googleReviews);