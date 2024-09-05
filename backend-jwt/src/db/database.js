<<<<<<< HEAD
import mysql from "mysql2";
import { environment } from "../config/env";

export const connectDB = () => {
  const connection = mysql.createConnection({
    host: environment.DB.HOST,
    user: environment.DB.USER,
    password: environment.DB.PASSWORD,
    database: environment.DB.NAME,
  });

  connection.connect((err) => {
    if (err) {
      console.error("Error connecting to the database:", err.stack);
      return;
    }
    console.log("Connected to the database as id " + connection.threadId);
  });

=======
import mysql2 from "mysql2/promise";
import { env } from "../config/env.js";

export const connectDB = async () => {
  const connection = await mysql2.createConnection({
    host: env.DB.HOST,
    user: env.DB.USER,
    password: env.DB.PASSWORD,
    database: env.DB.DATABASE,
  });
>>>>>>> 62ba003d5cde38092bbd49f33c1367947075b7f2
  return connection;
};
