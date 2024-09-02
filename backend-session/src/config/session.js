import { env } from "./environment";

export const sessionConfig = {
  secret: env.SESSION.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false, // true solo si usas HTTPS
    httpOnly: true, // evita acceso a cookie desde JavaScript del cliente
    // sameSite: 'lax' // permite envío de cookies en navegadores modernos
  },
};
