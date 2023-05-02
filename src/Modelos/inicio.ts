interface User {
    username: string;
    password: string;
  }
  
  const users: User[] = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" },
    { username: "user3", password: "password3" },
  ];
  
  const form = document.querySelector("form") as HTMLFormElement;
  const resultDiv = document.getElementById("result") as HTMLDivElement;
  
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const usernameInput = form.elements.namedItem(
      "username"
    ) as HTMLInputElement;
    const passwordInput = form.elements.namedItem(
      "password"
    ) as HTMLInputElement;
  
    const enteredUsername = usernameInput.value.trim();
    const enteredPassword = passwordInput.value.trim();
  
    const foundUser = users.find(
      (user) =>
        user.username === enteredUsername && user.password === enteredPassword
    );
  
    if (foundUser) {
      console.log("Usuario exitoso");
      resultDiv.textContent = "Usuario exitoso";
    } else {
      console.log("Usuario equivocado");
      resultDiv.textContent = "Usuario equivocado";
    }
  
    usernameInput.value = "";
    passwordInput.value = "";
  });
  

//registro

const registroForm = document.getElementById('registroForm') as HTMLFormElement;
const errorMensaje = document.getElementById('errorMensaje') as HTMLParagraphElement;

if (registroForm) {
  registroForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const dniInput = document.getElementById('dni') as HTMLInputElement;
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    const confirmPasswordInput = document.getElementById('confirmPassword') as HTMLInputElement;

    const dni = dniInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (dni.length <7) {
      errorMensaje.textContent = 'El DNI debe tener un mínimo de 7 caracteres';
    } else if (!password.match(passwordRegex)) {
      errorMensaje.textContent = 'La contraseña debe tener un mínimo de 8 caracteres, una mayúscula y un número';
    } else if (password !== confirmPassword) {
      errorMensaje.textContent = 'Las contraseñas no coinciden';
    } else {
      // Aquí puedes colocar el código para registrar al usuario
      registroForm.reset();
      errorMensaje.textContent = '';
    }
  });
}

