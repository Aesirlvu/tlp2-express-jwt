import { connectDB } from "../db/database.js";

export const initUserModel = () => {
  const connection = connectDB();

  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(100) NOT NULL,
      password VARCHAR(100) NOT NULL
    );
    `;

  connection.query(query, (error) => {
    if (error) {
      console.error("Error creating table users:", error);
      return;
    }
    console.log("Table users created successfully");
  });
};
