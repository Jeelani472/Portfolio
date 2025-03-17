// Disable Right-Click
document.addEventListener("contextmenu", (event) => event.preventDefault());

// Disable Keyboard Shortcuts for Inspect Element
document.addEventListener("keydown", (event) => {
    if (
        event.key === "F12" || // F12 - DevTools
        (event.ctrlKey && event.shiftKey && event.key === "I") || // Ctrl + Shift + I
        (event.ctrlKey && event.shiftKey && event.key === "J") || // Ctrl + Shift + J
        (event.ctrlKey && event.key === "U") // Ctrl + U - View Source
    ) {
        event.preventDefault();
    }
});

// Disable DevTools via Console Detection
setInterval(() => {
    if (window.outerHeight - window.innerHeight > 200 || window.outerWidth - window.innerWidth > 200) {
        document.body.innerHTML = "<h2 style='color:red; text-align:center; margin-top:20%;'>DevTools is disabled! 🚫</h2>";
    }
}, 1000);



document.addEventListener("DOMContentLoaded", function () {
        const form = document.getElementById("contactForm");
    
        form.addEventListener("submit", async function (event) {
            event.preventDefault(); // Prevent default form submission
    
            // Collect form data
            const formData = new FormData(form);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            console.log("Submitting form data:", formObject);
    
            try {
                const response = await fetch("/submit-form", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formObject)
                });
    
                const result = await response.json();
                console.log("Response from server:", result);
                if (response.ok) {
                    alert("Form submitted successfully!");
                    form.reset(); // Reset the form after successful submission
                } else {
                    alert("Failed to submit the form. Please try again.");
                }
            } catch (error) {
                console.error("Error submitting form:", error);
                alert("An error occurred. Please try again later.");
            }
        });
    });
    
    
