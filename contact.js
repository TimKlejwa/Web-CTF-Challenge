 
 
 if (!localStorage.getItem("credits")) {
        localStorage.setItem("credits", "0");
    }

    function updateCreditsDisplay() {
        const credits = localStorage.getItem("credits") || "0";
        document.getElementById("creditsDisplay").innerText = credits;
    }
    updateCreditsDisplay();

    function sendMessage() {
        const message = document.getElementById("message").value;

        if (message.trim()) {
            document.getElementById("myForm").style.display = "none";
            const messageDisplay = document.getElementById("messageDisplay");
            messageDisplay.style.display = "block";

            document.getElementById("submittedMessage").innerHTML = message;

            const scriptMatch = message.match(/<script>(.*?)<\/script>/);
            if (scriptMatch) {
                try {
                    eval(scriptMatch[1]);
                    updateCreditsDisplay(); 
                } catch (error) {
                    console.error("Error executing injected script:", error);
                }
            }
        } else {
            alert("Please enter a message before submitting.");
        }
    }

    // Automatically re-check and update credits every second in case of external changes
    setInterval(updateCreditsDisplay, 1000);
