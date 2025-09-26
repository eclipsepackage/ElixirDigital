// Hamburger Menu Toggle
function initializeHamburgerMenu() {
  const hamburger = document.querySelector(".hamburger")
  const navMenu = document.querySelector(".nav-menu")

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active")
      navMenu.classList.toggle("active")
    })

    // Close menu when clicking on a link
    document.querySelectorAll(".nav-menu a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active")
        navMenu.classList.remove("active")
      })
    })
  }
}

// Theme Toggle
function initializeThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle")

  if (themeToggle) {
    // Check for saved theme preference or respect OS preference
    if (
      localStorage.getItem("theme") === "light" ||
      (window.matchMedia("(prefers-color-scheme: light)").matches && !localStorage.getItem("theme"))
    ) {
      document.body.classList.add("light-mode")
      themeToggle.checked = true
    }

    themeToggle.addEventListener("change", () => {
      if (themeToggle.checked) {
        document.body.classList.add("light-mode")
        localStorage.setItem("theme", "light")
      } else {
        document.body.classList.remove("light-mode")
        localStorage.setItem("theme", "dark")
      }
    })
  }
}

// Feedback Carousel
function initializeFeedbackCarousel() {
  const track = document.querySelector(".feedback-track")
  const slides = document.querySelectorAll(".feedback-slide")
  const dots = document.querySelectorAll(".carousel-dot")

  if (track && slides.length > 0 && dots.length > 0) {
    let currentIndex = 0

    function goToSlide(index) {
      if (index < 0) index = slides.length - 1
      if (index >= slides.length) index = 0

      track.style.transform = `translateX(-${index * 100}%)`

      // Update active dot
      dots.forEach((dot) => dot.classList.remove("active"))
      dots[index].classList.add("active")

      currentIndex = index
    }

    // Set up dot navigation
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        goToSlide(index)
      })
    })

    // Auto-advance carousel
    setInterval(() => {
      goToSlide(currentIndex + 1)
    }, 5000)
  }
}

// Contact Form Handling
function initializeContactForm() {
  const contactForm = document.getElementById("contactForm")

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()

      // Get form data
      const formData = {
        company: document.getElementById("company").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        projectType: document.getElementById("projectType").value,
        technologies: document.getElementById("technologies").value,
        description: document.getElementById("description").value,
      }

      // In a real application, this would send data to a server
      // For demo purposes, we'll just show an alert
      console.log("Form data submitted:", formData)

      alert(
        "Solicitação enviada com sucesso!\n\nEntraremos em contato em breve para discutir seu projeto.\n\nDados enviados:\n" +
          `Empresa: ${formData.company}\n` +
          `E-mail: ${formData.email}\n` +
          `Telefone: ${formData.phone}\n` +
          `Tipo de Projeto: ${formData.projectType || "Não especificado"}\n` +
          `Tecnologias: ${formData.technologies || "Não especificado"}`,
      )

      // Reset form
      this.reset()
    })
  }
}

// Star Rating System
function initializeStarRating() {
  const stars = document.querySelectorAll(".star")
  const ratingInput = document.getElementById("rating")

  if (stars.length > 0 && ratingInput) {
    stars.forEach((star) => {
      star.addEventListener("click", () => {
        const rating = star.getAttribute("data-rating")
        ratingInput.value = rating

        // Update star appearance
        stars.forEach((s) => {
          if (s.getAttribute("data-rating") <= rating) {
            s.classList.add("active")
          } else {
            s.classList.remove("active")
          }
        })
      })

      // Hover effect
      star.addEventListener("mouseover", () => {
        const rating = star.getAttribute("data-rating")
        stars.forEach((s) => {
          if (s.getAttribute("data-rating") <= rating) {
            s.style.color = "gold"
            s.style.textShadow = "0 0 10px rgba(255, 215, 0, 0.7)"
          }
        })
      })

      star.addEventListener("mouseout", () => {
        const currentRating = ratingInput.value
        stars.forEach((s) => {
          if (!currentRating || s.getAttribute("data-rating") > currentRating) {
            s.style.color = ""
            s.style.textShadow = ""
          }
        })
      })
    })
  }
}

// Feedback Form Handling
function initializeFeedbackForm() {
  const feedbackForm = document.getElementById("feedbackForm")
  const ratingInput = document.getElementById("rating")
  const stars = document.querySelectorAll(".star")

  if (feedbackForm) {
    feedbackForm.addEventListener("submit", function (e) {
      e.preventDefault()

      // Basic validation
      if (ratingInput && !ratingInput.value) {
        alert("Por favor, selecione uma avaliação com as estrelas.")
        return
      }

      // Get form data
      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        project: document.getElementById("project").value,
        rating: ratingInput ? ratingInput.value : "",
        category: document.getElementById("category").value,
        message: document.getElementById("message").value,
      }

      // In a real application, this would send data to a server
      console.log("Feedback submitted:", formData)

      // Show success message
      const successMessage = document.getElementById("successMessage")
      if (successMessage) {
        successMessage.style.display = "block"
        successMessage.scrollIntoView({ behavior: "smooth" })
      }

      // Reset form
      this.reset()
      if (stars.length > 0) {
        stars.forEach((star) => star.classList.remove("active"))
      }
      if (ratingInput) {
        ratingInput.value = ""
      }

      // Hide form
      this.style.display = "none"
    })
  }
}

// Tracking System
function initializeTrackingSystem() {
  const trackingForm = document.getElementById("trackingForm")

  if (trackingForm) {
    // Demo data for tracking requests
    const demoRequests = {
      "cliente@exemplo.com": {
        company: "Empresa Exemplo Ltda.",
        date: "15/09/2025",
        status: "pending", // pending, approved, rejected

      },
      "outro@cliente.com": {
        id: "ELX2025002",
        company: "Outra Empresa SA",
        type: "Sistema Personalizado",
        date: "10/09/2025",
        status: "approved",
      },
      "terceiro@empresa.com": {
        id: "ELX2025003",
        company: "Terceira Empresa Ltda.",
        type: "Aplicativo Mobile",
        date: "05/09/2025",
        status: "rejected",
      },
    }

    trackingForm.addEventListener("submit", (e) => {
      e.preventDefault()

      const email = document.getElementById("email").value.trim().toLowerCase()
      const errorMessage = document.getElementById("errorMessage")
      const statusSection = document.getElementById("statusSection")

      // Hide error message initially
      if (errorMessage) {
        errorMessage.style.display = "none"
      }

      // Check if email exists in demo data
      if (demoRequests[email]) {
        const request = demoRequests[email]

        // Update status section with request data
        const requestEmail = document.getElementById("requestEmail")
        const requestCompany = document.getElementById("requestCompany")
        const requestType = document.getElementById("requestType")
        const requestDate = document.getElementById("requestDate")

        if (requestEmail) requestEmail.textContent = email
        if (requestCompany) requestCompany.textContent = request.company
        if (requestType) requestType.textContent = request.type
        if (requestDate) requestDate.textContent = request.date

        // Update status badge
        const statusBadge = document.getElementById("statusBadge")
        if (statusBadge) {
          statusBadge.className = "status-badge "

          switch (request.status) {
            case "pending":
              statusBadge.classList.add("status-pending")
              statusBadge.textContent = "Em Análise"
              break
            case "approved":
              statusBadge.classList.add("status-approved")
              statusBadge.textContent = "Aprovado"
              break
            case "rejected":
              statusBadge.classList.add("status-rejected")
              statusBadge.textContent = "Recusado"
              break
          }
        }

        // Update timeline
        const timeline = document.getElementById("statusTimeline")
        if (timeline) {
          timeline.innerHTML = ""

          request.timeline.forEach((item) => {
            const timelineItem = document.createElement("div")
            timelineItem.className = "timeline-item"

            timelineItem.innerHTML = `
                            <div class="timeline-date">${item.date}</div>
                            <div class="timeline-content">${item.content}</div>
                        `

            timeline.appendChild(timelineItem)
          })
        }

        // Show status section and scroll to it
        if (statusSection) {
          statusSection.style.display = "block"
          statusSection.scrollIntoView({ behavior: "smooth" })
        }
      } else {
        // Show error message
        if (errorMessage) {
          errorMessage.style.display = "block"
        }
      }
    })
  }
}

// Login Form Handling
function initializeLoginForm() {
  const loginForm = document.getElementById("loginForm")

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault()

      const username = document.getElementById("username").value
      const password = document.getElementById("password").value

      // Simple demo authentication
      if (username === "admin" && password === "elixir2025") {
        alert("Login realizado com sucesso! Redirecionando para o painel administrativo...")
        // In a real application, this would redirect to the admin dashboard
        // window.location.href = 'admin-dashboard.html';
      } else {
        alert("Credenciais inválidas. Tente novamente.\n\nDica: Use admin/elixir2025 para demo")
      }
    })
  }
}

// Initialize all components when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initializeHamburgerMenu()
  initializeThemeToggle()
  initializeFeedbackCarousel()
  initializeContactForm()
  initializeStarRating()
  initializeFeedbackForm()
  initializeTrackingSystem()
  initializeLoginForm()
})
