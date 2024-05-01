function SendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_4ie7ovt", "template_2omm9rh", params)
        .then(function(response) {
            alert("Email sent successfully!");
            console.log("SUCCESS!", response);
        }, function(error) {
            alert("Email could not be sent. Please try again later.");
            console.log("FAILED...", error);
        });
}
