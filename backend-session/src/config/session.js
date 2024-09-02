export const sessionConfig = {
  secret: "mi-string-secreto3215",
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false, // true solo si usas HTTPS
    httpOnly: true, // evita acceso a cookie desde JavaScript del cliente
    // sameSite: 'lax' // permite envío de cookies en navegadores modernos
  },
};
