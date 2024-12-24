function predictAvailability() {
    // Clear previous results and messages
    document.getElementById("error-message").textContent = "";
    document.getElementById("availability-result").textContent = "";
    document.getElementById("loading").style.display = "block";
    
    const hospital = document.getElementById("hospital-select").value;
    const medicine = document.getElementById("medicine-select").value;
    
    // Validation
    if (hospital === "" || medicine === "") {
        document.getElementById("error-message").textContent = "Please select both hospital and medicine.";
        document.getElementById("loading").style.display = "none";
        return;
    }
    
    // Simulate an API call with a timeout for demonstration purposes
    setTimeout(() => {
        document.getElementById("loading").style.display = "none";
        
        // Placeholder for actual prediction logic
        const isAvailable = Math.random() > 0.5; // Randomly decide "Yes" or "No" for now
        
        document.getElementById("availability-result").textContent = 
            isAvailable ? "Yes, Medicine is available" : "No, Medicine is not available";
    }, 10000); // 2 seconds delay to simulate loading
}
