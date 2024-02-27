document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("register-username").value;
    var password = document.getElementById("register-password").value;
    
    if (localStorage.getItem(username) !== null) {
        showMessage("error", "Username already exists.");
    } else {
       
        localStorage.setItem(username, password);
        showMessage("success", "Registration successful!");
    }
});

function showMessage(type, message) {
    var messageDiv = document.getElementById("message");
    messageDiv.innerHTML = message;
    messageDiv.className = "message " + type;
    setTimeout(function() {
        messageDiv.innerHTML = "";
        messageDiv.className = "message";
    }, 3000);
}
