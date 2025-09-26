// carousel.js - Feedback Carousel functionality

function initializeFeedbackCarousel() {
  const track = document.querySelector(".feedback-track");
  const slides = document.querySelectorAll(".feedback-slide");
  const dots = document.querySelectorAll(".carousel-dot");

  if (track && slides.length > 0 && dots.length > 0) {
    let currentIndex = 0;

    function goToSlide(index) {
      if (index < 0) index = slides.length - 1;
      if (index >= slides.length) index = 0;

      track.style.transform = `translateX(-${index * 100}%)`;

      // Update active dot
      dots.forEach((dot) => dot.classList.remove("active"));
      dots[index].classList.add("active");

      currentIndex = index;
    }

    // Set up dot navigation
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        goToSlide(index);
      });
    });

    // Auto-advance carousel
    setInterval(() => {
      goToSlide(currentIndex + 1);
    }, 5000);
  }
}

// Export function for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { initializeFeedbackCarousel };
}