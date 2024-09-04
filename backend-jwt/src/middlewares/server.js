import cookieParser from "cookie-parser";
import session from "express-session";
import cors from "cors";
import morgan from "morgan";

import { corsOptions } from "../config/cors.js";
import { seessionOptions } from "../config/session.js";

export const serverMiddlewares = (app) => {
  app.use(cors(corsOptions));
  app.use(morgan("dev"));
  app.use(cookieParser());
  app.use(session(seessionOptions));
};
