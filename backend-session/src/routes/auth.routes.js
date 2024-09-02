import { Router } from "express";
import {
  login,
  logout,
  register,
  session,
} from "../controller/auth.controller.js";

const authRouter = Router();

//Register route
authRouter.post("/register", register);
//Login route
authRouter.post("/login", login);
// Ruta para obtener los datos de la sesión
authRouter.get("/session", session);
// Ruta para cerrar la sesión
authRouter.post("/logout", logout);

export default authRouter;
