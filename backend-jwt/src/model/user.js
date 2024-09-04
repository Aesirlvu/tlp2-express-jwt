import { connectDB } from "../db/database.js";

export const userEntity = async () => {
  const connection = await connectDB();

  const createTableQuery = `CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL
  );`;

  await connection.execute(createTableQuery);

  console.log("Tabla (users) creada 👍");
};
