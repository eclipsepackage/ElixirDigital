document.addEventListener("DOMContentLoaded", () => {
  if (typeof initializeAllComponents !== 'undefined') {
    initializeAllComponents();
  } else {
    // Fallback: Initialize components directly if utils.js is not available
    console.warn('utils.js not loaded, initializing components directly');
    
    // Initialize components based on availability
    if (typeof initializeHamburgerMenu === 'function') initializeHamburgerMenu();
    if (typeof initializeThemeToggle === 'function') initializeThemeToggle();
    if (typeof initializeFeedbackCarousel === 'function') initializeFeedbackCarousel();
    if (typeof initializeContactForm === 'function') initializeContactForm();
    if (typeof initializeStarRating === 'function') initializeStarRating();
    if (typeof initializeFeedbackForm === 'function') initializeFeedbackForm();
    if (typeof initializeTrackingSystem === 'function') initializeTrackingSystem();
    if (typeof initializeLoginForm === 'function') initializeLoginForm();
  }
});