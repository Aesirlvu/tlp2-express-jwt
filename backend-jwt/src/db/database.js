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

  return connection;
};
