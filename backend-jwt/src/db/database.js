import mysql2 from "mysql2/promise";
import { env } from "../config/env.js";

export const connectDB = async () => {
  const connection = await mysql2.createConnection({
    host: env.DB.HOST,
    user: env.DB.USER,
    password: env.DB.PASSWORD,
    database: env.DB.NAME,
  });
  return connection;
};
