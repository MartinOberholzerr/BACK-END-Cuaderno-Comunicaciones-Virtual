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
  