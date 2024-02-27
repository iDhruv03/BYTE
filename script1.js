document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;
    if (username === localStorage.getItem("username") && password === localStorage.getItem("password")) {
        showMessage("success", "Login successful!");
    } else {
        showMessage("error", "Invalid username or password.");
    }
});

document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("register-username").value;
    var password = document.getElementById("register-password").value;
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    showMessage("success", "Registration successful!");
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
