import cors from "cors";
import session from "express-session";
import morgan from "morgan";
import { sessionConfig } from "../config/session.js"; // Ruta corregida
import { corsConfig } from "../config/cors.js"; // Ruta corregida

export const Middlewares = (app) => {
  app.use(cors(corsConfig));
  app.use(morgan("dev"));
  app.use(session(sessionConfig));
};
