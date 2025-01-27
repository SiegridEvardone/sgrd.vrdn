emailjs.init("9Pzt-0u-TeaOVqZOa"); // Replace with your EmailJS User ID

        document.getElementById("contact-form").addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent default form submission

            emailjs.sendForm("service_4gse4hv", "template_46r60un", "#contact-form")
                .then(function() {
                    alert("Your email has been sent successfully!");
                })
                .catch(function(error) {
                    console.error("Error:", error);
                    alert("Failed to send the email. Please try again later.");
                });
        });