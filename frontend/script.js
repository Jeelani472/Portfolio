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
                const response =await fetch("/submit-form", 
                    {
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
    
    
