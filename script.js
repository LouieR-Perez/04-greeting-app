let userName = "Luis";

// Get the input, button, and message elements from the page
let nameInput = document.getElementById("nameInput");
let welcomeBtn = document.getElementById("welcomeBtn");
let welcomeMsg = document.getElementById("welcomeMsg");

// Add a click event to the button
welcomeBtn.onclick = function() {
  // Get the name entered by the user
  let enteredName = nameInput.value;

  // If the input is empty, use the default userName
  let nameToShow = enteredName ? enteredName : userName;

  // Show a fun personalized message
  welcomeMsg.textContent = "🎉 Welcome, " + nameToShow + "! Glad you're here! 🎈";

  // Clear the input field
  nameInput.value = "";
};