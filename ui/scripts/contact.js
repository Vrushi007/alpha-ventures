// Contact Form Handling
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const formSuccess = document.getElementById("formSuccess");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Validate form
      if (!validateForm(contactForm)) {
        showNotification(
          "Please fill in all required fields correctly.",
          "error"
        );
        return;
      }

      // Show loading state
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      submitButton.textContent = "Sending...";
      submitButton.disabled = true;

      // Collect form data
      const formData = new FormData(contactForm);
      const data = {};
      for (let [key, value] of formData.entries()) {
        data[key] = value;
      }

      // Handle form submission with static response (no backend needed)
      setTimeout(() => {
        // Always show success for demo purposes
        contactForm.style.display = "none";
        formSuccess.style.display = "block";

        // Scroll to success message
        formSuccess.scrollIntoView({ behavior: "smooth" });

        showNotification(
          "Thank you for your message! We'll get back to you soon."
        );

        // Log the form data to console for demo purposes
        console.log("Contact form submitted:", data);

        // Reset button state
        submitButton.textContent = originalText;
        submitButton.disabled = false;
      }, 1500);
    });
  }

  // Service type change handler
  const serviceTypeSelect = document.getElementById("serviceType");
  if (serviceTypeSelect) {
    serviceTypeSelect.addEventListener("change", function () {
      const messageTextarea = document.getElementById("message");
      const serviceType = this.value;

      // Update placeholder text based on service type
      const placeholders = {
        "executive-search":
          "Please describe the executive role you're looking to fill, including seniority level, industry experience, and key responsibilities...",
        "permanent-placement":
          "Please describe the permanent position(s) you need to fill, including required skills, experience level, and team structure...",
        "contract-staffing":
          "Please describe your contract staffing needs, including project duration, required skills, and start date...",
        "talent-consulting":
          "Please describe the talent challenges you're facing and what type of consulting support you need...",
        other:
          "Please describe your specific recruiting needs and how we can help...",
      };

      if (placeholders[serviceType]) {
        messageTextarea.placeholder = placeholders[serviceType];
      }
    });
  }

  // Real-time form validation
  const formInputs = document.querySelectorAll(
    "#contactForm input, #contactForm select, #contactForm textarea"
  );
  formInputs.forEach((input) => {
    input.addEventListener("blur", function () {
      validateField(this);
    });

    input.addEventListener("input", function () {
      // Remove error styling when user starts typing
      if (this.style.borderColor === "rgb(244, 67, 54)") {
        this.style.borderColor = "#e1e5e9";
      }
    });
  });

  // Character counter for message textarea
  const messageTextarea = document.getElementById("message");
  if (messageTextarea) {
    const charCounter = document.createElement("div");
    charCounter.className = "char-counter";
    charCounter.style.cssText = `
            text-align: right;
            font-size: 0.8rem;
            color: #666;
            margin-top: 0.5rem;
        `;
    messageTextarea.parentNode.appendChild(charCounter);

    messageTextarea.addEventListener("input", function () {
      const currentLength = this.value.length;
      const maxLength = 1000;
      charCounter.textContent = `${currentLength}/${maxLength} characters`;

      if (currentLength > maxLength * 0.9) {
        charCounter.style.color = "#f44336";
      } else {
        charCounter.style.color = "#666";
      }
    });

    // Initialize counter
    messageTextarea.dispatchEvent(new Event("input"));
  }
});

// Individual field validation
function validateField(field) {
  let isValid = true;

  // Required field validation
  if (field.hasAttribute("required") && !field.value.trim()) {
    field.style.borderColor = "#f44336";
    isValid = false;
  }

  // Email validation
  if (field.type === "email" && field.value.trim()) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(field.value)) {
      field.style.borderColor = "#f44336";
      isValid = false;
    }
  }

  // Phone validation (optional)
  if (field.type === "tel" && field.value.trim()) {
    const phoneRegex = /^[+]?[1-9]\d{0,15}$/;
    if (!phoneRegex.test(field.value.replace(/\D/g, ""))) {
      field.style.borderColor = "#f44336";
      isValid = false;
    }
  }

  if (isValid) {
    field.style.borderColor = "#e1e5e9";
  }

  return isValid;
}
