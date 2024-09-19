document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.querySelector('.signin-container form');
    
    const nameInput = signupForm.querySelector('input[type="text"]');
    const emailInput = signupForm.querySelector('input[type="email"]');
    const passwordInput = signupForm.querySelector('input[type="password"]');
    
    signupForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form submission to server

        // Get input values
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        
        // Validate inputs
        let errorMessages = [];
        
        if (!name) {
            errorMessages.push("Name is required.");
        }
        
        if (!email || !isValidEmail(email)) {
            errorMessages.push("Please enter a valid email.");
        }
        
        if (!password || password.length < 6) {
            errorMessages.push("Password must be at least 6 characters.");
        }
        
        if (errorMessages.length > 0) {
            alert(errorMessages.join("\n")); // Show error messages in an alert
        } else {
            alert("Signup successful!");
            // You can redirect or proceed with backend logic here
        }
    });
    
    // Function to validate email format
    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});
