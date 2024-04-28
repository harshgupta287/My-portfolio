function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "harshgupta274402@gmail.com",
        Password: "harsh@287",
        To: 'harshgupta274402@gmail.com',
        From: document.getElementById("email").value,
        Subject: "New Contact Form Enquiry",
        Body: "Name: " + document.getElementById("name").value
        + "<br> Email: " + document.getElementById("email").value
        + "<br> Phone No.: " + document.getElementById("phone").value
        + "<br> Message: " + document.getElementById("message").value
    }).then(
        message => alert("Message Sent Succesfully!")
    );
}