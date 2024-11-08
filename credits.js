// Initialize credits in localStorage if not already set
if (!localStorage.getItem("credits")) {
    localStorage.setItem("credits", "0");
}

// Function to update credits display
function updateCreditsDisplay() {
    const credits = localStorage.getItem("credits") || "0";
    const creditsDisplay = document.getElementById("creditsDisplay");
    if (creditsDisplay) {
        creditsDisplay.innerText = credits;
    }
}

// Call the function to update credits display on page load
updateCreditsDisplay();

// Automatically update credits every second in case of external changes
setInterval(updateCreditsDisplay, 1000);