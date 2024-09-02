import mysql from "mysql2/promise";
import { env } from "../config/environment.js";

export const connectDb = async () => {
  const connection = await mysql.createConnection({
    host: env.DB.HOST,
    user: env.DB.USER,
    password: env.DB.PASS,
    database: env.DB.DATABASE,
  });
  return connection;
};
