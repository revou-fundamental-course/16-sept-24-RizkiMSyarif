// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const birthdayDate = document.getElementById('birthday-date').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById('message').value;

    // Update output elements
    document.getElementById('sender-full-name').textContent = name;
    document.getElementById('sender-birthday-date').textContent = birthdayDate;
    document.getElementById('sender-full-gender').textContent = gender;
    document.getElementById('sender-full-message').textContent = message;

    // Update current time
    updateCurrentTime();

    // Clear form fields
    document.getElementById('messageForm').reset();

    return false;
}

// Function to update current time
function updateCurrentTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('current-time').textContent = timeString;
}

// Update time every second
setInterval(updateCurrentTime, 1000);

// Initial time update
updateCurrentTime();

// Add event listener to the form
document.getElementById('messageForm').addEventListener('submit', handleSubmit);