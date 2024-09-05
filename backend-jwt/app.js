<<<<<<< HEAD
// server.js
import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import cors from "cors";

import { PORT } from "./src/config/env.js";
import generarJwt from "./src/helpers/generar-jwt.js";
import validarJwt from "./src/middlewares/validar-jwt.js";
import { database } from "./src/db/database.js";
import morgan from "morgan";

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5500",
      "http://localhost:3000",
      "http://127.0.0.1:3000",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(session());

// Endpoint de inicio de sesión (login)
app.post("/login");

// Endpoint para validar la sesión
app.get("/session");

// Endpoint de cierre de sesión (logout)
app.post("/logout");

// Servidor escuchando
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
=======
import express from "express";
import { serverMiddlewares } from "./src/middlewares/server.js";
import { env } from "./src/config/env.js";
import authRouter from "./src/routes/auth.routes.js";
import { userEntity } from "./src/model/user.js";

const PORT = env.SERVER.PORT;
const URL = env.SERVER.URL;

const app = express();
app.use(express.json());

serverMiddlewares(app);

app.use("/auth", authRouter);

(async function main() {
  await userEntity();
  app.listen(PORT, () => {
    console.log(`${URL}:${PORT} - 👍`);
  });
})();
>>>>>>> 62ba003d5cde38092bbd49f33c1367947075b7f2
