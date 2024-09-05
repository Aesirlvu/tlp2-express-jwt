import { Router } from "express";
import {
  userLogin,
  logoutUser,
  validateUserSession,
  userRegister,
} from "../controller/auth.js";
import { validateJwt } from "../middlewares/validar-jwt.js";

const authRouter = Router();

authRouter.post("/register", userRegister);

authRouter.post("/login", userLogin);

authRouter.get("/session", validateJwt, validateUserSession);

authRouter.post("/logout", logoutUser);

export default authRouter;
