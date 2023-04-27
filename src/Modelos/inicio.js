var users = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" },
    { username: "user3", password: "password3" },
];
var form = document.querySelector("form");
var resultDiv = document.getElementById("result");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var usernameInput = form.elements.namedItem("username");
    var passwordInput = form.elements.namedItem("password");
    var enteredUsername = usernameInput.value.trim();
    var enteredPassword = passwordInput.value.trim();
    var foundUser = users.find(function (user) {
        return user.username === enteredUsername && user.password === enteredPassword;//
    });
    if (foundUser) {
        console.log("Usuario exitoso");
        resultDiv.textContent = "Usuario exitoso";
    }
    else {
        console.log("Usuario equivocado");
        resultDiv.textContent = "Usuario equivocado";
    }
    usernameInput.value = "";
    passwordInput.value = "";
});
