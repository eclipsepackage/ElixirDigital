// tracking.js - Tracking System functionality

function initializeTrackingSystem() {
  const trackingForm = document.getElementById("trackingForm");

  if (trackingForm) {
    trackingForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value.trim().toLowerCase();
      const errorMessage = document.getElementById("errorMessage");
      const statusSection = document.getElementById("statusSection");

      // Hide error message initially
      if (errorMessage) {
        errorMessage.style.display = "none";
      }

      // Check if status section exists (data rendered by Flask)
      if (statusSection) {
        // Show status section and scroll to it
        statusSection.style.display = "block";
        statusSection.scrollIntoView({ behavior: "smooth" });
      } else {
        // Show error message if no data found
        if (errorMessage) {
          errorMessage.style.display = "block";
        }
      }
    });
  }
}

// Export function for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { initializeTrackingSystem };
}