const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

        // Function to validate an email address using a regular expression
        function validateEmail(email) {
          const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
          return emailRegex.test(email);
      }

      // Function to handle form submission
      function handleSubmit(event) {    
          event.preventDefault();
          const emailInput = document.getElementById("email");
          const emailError = document.getElementById("emailError");
          const email = emailInput.value;
          return false;

          if (validateEmail(email)) {
              // Email is valid
              emailError.textContent = "";
              return true;
              // You can submit the form to your server or perform other actions here
          } else {
              // Email is invalid
              emailError.textContent = "Invalid email address";
              return false;
          }
      }

      const emailForm = document.getElementById("emailForm");
      // emailForm.addEventListener("submit", handleSubmit);

      // Function to handle email input and provide real-time feedback
      function handleEmailInput() {
          const emailInput = document.getElementById("email");
          const emailError = document.getElementById("emailError");
          const email = emailInput.value;

          if (validateEmail(email)) {
              // Email is valid
              emailError.textContent = "";
          } else {
              // Email is invalid
              emailError.textContent = "Invalid email address";
          }
      }

      const emailInput = document.getElementById("email");
      emailInput.addEventListener("keyup", handleEmailInput);