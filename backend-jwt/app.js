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
