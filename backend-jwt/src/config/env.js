import "dotenv/config";

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
    JWT: process.env.JWT_SECRET,
    SESSION: process.env.SESSION_SECRET,
  },
};
