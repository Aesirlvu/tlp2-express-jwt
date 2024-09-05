import "dotenv/config";

<<<<<<< HEAD
export const PORT = process.env.PORT || 4000;
export const SECRET_KEY = process.env.SECRET_KEY || "seed-of-backend-jwt";

export const environment = {
  SERVER: {
    PORT: process.env.SERVER_PORT,
    URL: process.env.SERVER_URL,
  },
  DB: {
    HOST: process.env.DB_HOST,
    PORT: process.env.DB_PORT,
    NAME: process.env.DB_NAME,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
  },
  SECRET_KEYS: {
=======
export const env = {
  SERVER: {
    URL: process.env.SERVER_URL,
    PORT: process.env.SERVER_PORT,
  },
  DB: {
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    DATABASE: process.env.DATABASE_NAME,
  },
  SECRET_KEY: {
>>>>>>> 62ba003d5cde38092bbd49f33c1367947075b7f2
    JWT: process.env.JWT_SECRET,
    SESSION: process.env.SESSION_SECRET,
  },
};
