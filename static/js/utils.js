// utils.js - Utility functions and main initialization

// Utility function to check if element exists
function elementExists(selector) {
  return document.querySelector(selector) !== null;
}

// Main initialization function
function initializeAllComponents() {
  // Initialize components based on page content
  if (elementExists('.hamburger') || elementExists('#theme-toggle')) {
    if (typeof initializeHamburgerMenu !== 'undefined') initializeHamburgerMenu();
    if (typeof initializeThemeToggle !== 'undefined') initializeThemeToggle();
  }
  
  if (elementExists('.feedback-track')) {
    if (typeof initializeFeedbackCarousel !== 'undefined') initializeFeedbackCarousel();
  }
  
  if (elementExists('#contactForm') || elementExists('#feedbackForm') || elementExists('#loginForm')) {
    if (typeof initializeContactForm !== 'undefined') initializeContactForm();
    if (typeof initializeFeedbackForm !== 'undefined') initializeFeedbackForm();
    if (typeof initializeLoginForm !== 'undefined') initializeLoginForm();
  }
  
  if (elementExists('.star')) {
    if (typeof initializeStarRating !== 'undefined') initializeStarRating();
  }
  
  if (elementExists('#trackingForm')) {
    if (typeof initializeTrackingSystem !== 'undefined') initializeTrackingSystem();
  }
}

// Export function for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { initializeAllComponents, elementExists };
}