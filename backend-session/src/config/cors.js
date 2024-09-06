export const corsConfig = {
  // Permitir solicitudes desde el front-end
  origin: [
    "http://localhost:3000",
    "http://localhost:4000",
    "http://localhost:5500",
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true, // Habilitar envío de cookies
};
