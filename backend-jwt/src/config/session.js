<<<<<<< HEAD
import { environment } from "./env";

export const sessionOptions = {
  secret: environment.SECRET_KEYS.SESSION, // Cambia esto por una clave secreta en producción
=======
import { env } from "./env.js";

export const seessionOptions = {
  secret: env.SECRET_KEY.SESSION, // Cambia esto por una clave secreta en producción
>>>>>>> 62ba003d5cde38092bbd49f33c1367947075b7f2
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }, // Usar 'true' si usas HTTPS
};
