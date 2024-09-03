import { environment } from "./env";

export const sessionOptions = {
  secret: environment.SECRET_KEYS.SESSION, // Cambia esto por una clave secreta en producción
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }, // Usar 'true' si usas HTTPS
};
