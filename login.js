document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;
    
    if (localStorage.getItem(username) === password) {
        showMessage("success", "Login successful!");
    } else {
        showMessage("error", "Invalid username or password.");
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
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;
    
    if (localStorage.getItem(username) === password) {
        showMessage("success", "Login successful!");
    
        window.location.href = "home.html";
    } else {
        showMessage("error", "Invalid username or password.");
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
