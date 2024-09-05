import "dotenv/config";

export const env = {
  SERVER: {
    URL: process.env.SERVER_URL,
    PORT: process.env.SERVER_PORT,
  },
  DB: {
    HOST: process.env.DB_HOST,
    NAME: process.env.DB_NAME,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
  },
  SECRET_KEYS: {
    JWT: process.env.JWT_SECRET,
    SESSION: process.env.SESSION_SECRET,
  },
};
