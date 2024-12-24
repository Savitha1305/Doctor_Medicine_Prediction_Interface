function validateForm() {
    // Get form fields
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Error message elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    // Success message element
    const successMessage = document.getElementById("successMessage");

    // Clear previous error messages
    nameError.style.display = "none";
    emailError.style.display = "none";
    messageError.style.display = "none";
    successMessage.style.display = "none";

    let isValid = true;

    // Validate Name
    if (name === "") {
        nameError.style.display = "block";
        isValid = false;
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || !emailPattern.test(email)) {
        emailError.style.display = "block";
        isValid = false;
    }

    // Validate Message
    if (message === "") {
        messageError.style.display = "block";
        isValid = false;
    }

    // Show success message if form is valid
    if (isValid) {
        successMessage.style.display = "block";
        
        // Clear form fields
        document.getElementById("contactForm").reset();

        // Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.style.display = "none";
        }, 5000);
    }

    return false; // Prevent actual form submission for demonstration
}
