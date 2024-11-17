document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    // Display a success message
    document.getElementById("response").innerText = `Thank you, ${name}! I will get back to you soon.`;
    
    // Clear the form
    document.getElementById("contactForm").reset();
    
});
