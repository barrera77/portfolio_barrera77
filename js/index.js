const mobileMenuButton = document.querySelector(".mobile-menu");
const dropdownMenu = document.querySelector(".dropdown");
const buttonIcon = document.querySelector(".mobile-menu-button i");
const contactForm = document.getElementById("contact-me");
const submitButton = document.querySelector(".btn-submit");

mobileMenuButton.addEventListener("click", (event) => {
  event.preventDefault();

  dropdownMenu.classList.toggle("active");

  if (dropdownMenu.classList.contains("active")) {
    buttonIcon.classList.remove("bi-list");
    buttonIcon.classList.add("bi-x-circle-fill");
  } else {
    buttonIcon.classList.remove("bi-x-circle-fill");
    buttonIcon.classList.add("bi-list");
  }
});

emailjs.init("2g_U2wWVhuWjmtq9z");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  submitButton.textContent = "Sending...";
  submitButton.disabled = true;

  emailjs.sendForm("service_4x2mm4o", "portfolio_template", contactForm).then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);
      alert("Message sent succesfully!");
      submitButton.textContent = "Send Message";
      submitButton.disabled = false;

      //TODO: Clear Form and fix button disabling logic
    },
    (error) => {
      console.log("FAILED...", error);
      alert("Failed to send message");
      submitButton.textContent = "Send Message";
      submitButton.disabled = false;
    }
  );
});
