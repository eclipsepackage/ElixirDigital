// rating.js - Star Rating System functionality

function initializeStarRating() {
  const stars = document.querySelectorAll(".star");
  const ratingInput = document.getElementById("rating");

  if (stars.length > 0 && ratingInput) {
    stars.forEach((star) => {
      star.addEventListener("click", () => {
        const rating = star.getAttribute("data-rating");
        ratingInput.value = rating;

        // Update star appearance
        stars.forEach((s) => {
          if (s.getAttribute("data-rating") <= rating) {
            s.classList.add("active");
          } else {
            s.classList.remove("active");
          }
        });
      });

      // Hover effect
      star.addEventListener("mouseover", () => {
        const rating = star.getAttribute("data-rating");
        stars.forEach((s) => {
          if (s.getAttribute("data-rating") <= rating) {
            s.style.color = "gold";
            s.style.textShadow = "0 0 10px rgba(255, 215, 0, 0.7)";
          }
        });
      });

      star.addEventListener("mouseout", () => {
        const currentRating = ratingInput.value;
        stars.forEach((s) => {
          if (!currentRating || s.getAttribute("data-rating") > currentRating) {
            s.style.color = "";
            s.style.textShadow = "";
          }
        });
      });
    });
  }
}

// Export function for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { initializeStarRating };
}