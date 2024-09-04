document
  .getElementById("login-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const divError = document.getElementById("message");

    if (!username || !password) {
      document.getElementById("message").innerText =
        "Por favor, completa todos los campos.";
      return;
    }

    try {
      const loginResponse = await fetch("http://localhost:4000/auth/login", {
        method: "POST",
        credentials: "include", // Importante para enviar las cookies de sesión
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!loginResponse.ok) {
        divError.innerText = "Credenciales inválidas";
        divError.classList.add(
          "bg-danger",
          "text-white",
          "text-center",
          "rounded",
          "p-2",
          "mt-3"
        );

        setTimeout(() => {
          divError.hidden = true;
        }, 3500);

        return;
      }

      const sessionResponse = await fetch(
        "http://localhost:4000/auth/session",
        {
          credentials: "include", // Importante para obtener las cookies de sesión
        }
      );

      const data = await sessionResponse.json();
      console.log(data);
      window.location.href = "home.html";
    } catch (error) {
      console.error("Error:", error);
      document.getElementById("message").innerText =
        "Ocurrió un error. Por favor, intenta nuevamente.";
    }
  });
