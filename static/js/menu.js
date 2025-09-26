// menu.js - Hamburger Menu and Theme Toggle functionality

// Hamburger Menu Toggle
function initializeHamburgerMenu() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    // Close menu when clicking on a link
    document.querySelectorAll(".nav-menu a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });
  }
}

// Theme Toggle
function initializeThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle");

  if (themeToggle) {
    // Check for saved theme preference or respect OS preference
    if (
      localStorage.getItem("theme") === "light" ||
      (window.matchMedia("(prefers-color-scheme: light)").matches && !localStorage.getItem("theme"))
    ) {
      document.body.classList.add("light-mode");
      themeToggle.checked = true;
    }

    themeToggle.addEventListener("change", () => {
      if (themeToggle.checked) {
        document.body.classList.add("light-mode");
        localStorage.setItem("theme", "light");
      } else {
        document.body.classList.remove("light-mode");
        localStorage.setItem("theme", "dark");
      }
    });
  }
}

// Export functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { initializeHamburgerMenu, initializeThemeToggle };
}