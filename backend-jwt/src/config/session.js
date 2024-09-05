import { env } from "./env.js";

export const seessionOptions = {
  secret: env.SECRET_KEYS.SESSION, // Cambia esto por una clave secreta en producción
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }, // Usar 'true' si usas HTTPS
};
