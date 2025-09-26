// forms.js - Form handling for contact, feedback, and login forms

// Contact Form Handling
function initializeContactForm() {
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form data
      const formData = {
        company: document.getElementById("company").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        technologies: document.getElementById("technologies").value,
        description: document.getElementById("description").value,
      };

      // In a real application, this would send data to a server
      // For demo purposes, we'll just show an alert
      console.log("Form data submitted:", formData);

      alert(
        "Solicitação enviada com sucesso!\n\nEntraremos em contato em breve para discutir seu projeto.\n\nDados enviados:\n" +
          `Empresa: ${formData.company}\n` +
          `E-mail: ${formData.email}\n` +
          `Telefone: ${formData.phone}\n` +
          `Tecnologias: ${formData.technologies || "Não especificado"}`,
      );

      // Reset form
      this.reset();
    });
  }
}

// Feedback Form Handling
function initializeFeedbackForm() {
  const feedbackForm = document.getElementById("feedbackForm");
  const ratingInput = document.getElementById("rating");

  if (feedbackForm) {
    feedbackForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Basic validation
      if (ratingInput && !ratingInput.value) {
        alert("Por favor, selecione uma avaliação com as estrelas.");
        return;
      }

      // Get form data
      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        project: document.getElementById("project").value,
        rating: ratingInput ? ratingInput.value : "",
        message: document.getElementById("message").value,
      };

      // In a real application, this would send data to a server
      console.log("Feedback submitted:", formData);

      // Show success message
      const successMessage = document.getElementById("successMessage");
      if (successMessage) {
        successMessage.style.display = "block";
        successMessage.scrollIntoView({ behavior: "smooth" });
      }

      // Reset form
      this.reset();
      
      // Reset star rating if exists
      const stars = document.querySelectorAll(".star");
      if (stars.length > 0) {
        stars.forEach((star) => star.classList.remove("active"));
      }
      if (ratingInput) {
        ratingInput.value = "";
      }

      // Hide form
      this.style.display = "none";
    });
  }
}

// Login Form Handling
function initializeLoginForm() {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      // Simple demo authentication
      if (username === "admin" && password === "elixir2025") {
        alert("Login realizado com sucesso! Redirecionando para o painel administrativo...");
        // In a real application, this would redirect to the admin dashboard
        // window.location.href = 'admin-dashboard.html';
      } else {
        alert("Credenciais inválidas. Tente novamente.\n\nDica: Use admin/elixir2025 para demo");
      }
    });
  }
}

// Export functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { initializeContactForm, initializeFeedbackForm, initializeLoginForm };
}