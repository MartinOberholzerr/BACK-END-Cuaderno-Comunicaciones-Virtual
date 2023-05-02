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
        return user.username === enteredUsername && user.password === enteredPassword;
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
//registro
var registroForm = document.getElementById('registroForm');
var errorMensaje = document.getElementById('errorMensaje');
if (registroForm) {
    registroForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var dniInput = document.getElementById('dni');
        var passwordInput = document.getElementById('password');
        var confirmPasswordInput = document.getElementById('confirmPassword');
        var dni = dniInput.value.trim();
        var password = passwordInput.value.trim();
        var confirmPassword = confirmPasswordInput.value.trim();
        var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/;
        if (dni.length < 7) {
            errorMensaje.textContent = 'El DNI debe tener un mínimo de 7 caracteres';
        }
        else if (!password.match(passwordRegex)) {
            errorMensaje.textContent = 'La contraseña debe tener un mínimo de 8 caracteres, una mayúscula y un número';
        }
        else if (password !== confirmPassword) {
            errorMensaje.textContent = 'Las contraseñas no coinciden';
        }
        else {
            // Aquí puedes colocar el código para registrar al usuario
            registroForm.reset();
            errorMensaje.textContent = '';
        }
    });
}
