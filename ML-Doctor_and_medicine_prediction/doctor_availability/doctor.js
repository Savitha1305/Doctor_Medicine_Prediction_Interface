let selectedTime = null;

function selectTime(time) {
    selectedTime = time;
    const timeButtons = document.querySelectorAll('.time-button');
    timeButtons.forEach(button => button.classList.remove('selected'));
    event.target.classList.add('selected');
}

function predictAvailability() {
    const doctorSelect = document.getElementById("doctor-select");
    const dateInput = document.getElementById("date-select");
    const resultDiv = document.getElementById("result");
    const loadingCircle = document.getElementById("loading");
    const selectedDate = new Date(dateInput.value);
    const today = new Date();

    // Check if a doctor is selected
    if (!doctorSelect.value) {
        alert("Please select a doctor.");
        return;
    }

    // Check if a time is selected
    if (!selectedTime) {
        alert("Please select a time.");
        return;
    }

    // Check if a valid date is selected
    if (!dateInput.value) {
        alert("Please select a date.");
        return;
    }

    // Check if the selected date is in the future
    if (selectedDate < today.setHours(0, 0, 0, 0)) {
        alert("Please select a future date.");
        return;
    }

    // Proceed with showing the loading animation and prediction
    resultDiv.style.display = "none";
    loadingCircle.style.display = "block";
    
    setTimeout(() => {
        loadingCircle.style.display = "none";
        
        // Randomly decide if the doctor is available or not for demonstration purposes
        const isAvailable = Math.random() > 0.5;
        
        if (isAvailable) {
            resultDiv.textContent = "Doctor is Available!";
            resultDiv.classList.add("available");
            resultDiv.classList.remove("not-available");
        } else {
            resultDiv.textContent = "Doctor is Not Available.";
            resultDiv.classList.add("not-available");
            resultDiv.classList.remove("available");
        }
        
        resultDiv.style.display = "block";
    }, 10000); // 10 seconds delay
}