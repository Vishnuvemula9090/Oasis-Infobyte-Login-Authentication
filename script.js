document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    // Dummy credentials
    var validUsername = "admin";
    var validPassword = "password123";

    if (username === validUsername && password === validPassword) {
        alert('Login successful!');
        // Redirect to another page or perform any other actions upon successful login
    } else {
        errorMessage.classList.remove('hidden');
    }
});
