document.addEventListener("DOMContentLoaded", () => {
  const timeElement = document.getElementById("user-time");

  const updateTime = () => {
    timeElement.textContent = `Current Time: ${Date.now()} ms`;
  };

  updateTime(); // show immediately
  setInterval(updateTime, 1000); // update every second
});

// contact page logic
// Contact form validation
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");
    const successMsg = document.getElementById("success-msg");

    // Error fields
    const errors = {
      name: document.getElementById("error-name"),
      email: document.getElementById("error-email"),
      subject: document.getElementById("error-subject"),
      message: document.getElementById("error-message"),
    };

    let valid = true;

    // Reset errors
    Object.values(errors).forEach((el) => (el.textContent = ""));

    // Validation logic
    if (name.value.trim() === "") {
      errors.name.textContent = "Full name is required.";
      valid = false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email.value.trim())) {
      errors.email.textContent = "Please enter a valid email.";
      valid = false;
    }

    if (subject.value.trim() === "") {
      errors.subject.textContent = "Subject is required.";
      valid = false;
    }

    if (message.value.trim().length < 10) {
      errors.message.textContent = "Message must be at least 10 characters.";
      valid = false;
    }

    // Show success message
    if (valid) {
      successMsg.style.display = "block";
      contactForm.reset();

      setTimeout(() => {
        successMsg.style.display = "none";
      }, 4000);
    }
  });
}
