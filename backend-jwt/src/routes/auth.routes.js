import { Router } from "express";
import {
  userLogin,
  logoutUser,
  validateUserSession,
  userRegister,
} from "../controller/auth.js";

const authRouter = Router();

authRouter.post("/register", userRegister);

authRouter.post("/login", userLogin);

authRouter.get("/session", validateUserSession);

authRouter.post("/logout", logoutUser);

export default authRouter;
