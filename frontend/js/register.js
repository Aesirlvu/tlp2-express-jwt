document
  .getElementById("register-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const divError = document.getElementById("message");

    const data = {
      username: username,
      password: password,
    };

    try {
      const registerResponse = await fetch(
        "http://localhost:4000/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!registerResponse.ok) {
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
      window.location.href = "login.html";
    } catch (error) {
      console.error("Error:", error);
      document.getElementById("message").innerText =
        "Ocurrió un error. Por favor, intenta nuevamente.";
    }
  });
