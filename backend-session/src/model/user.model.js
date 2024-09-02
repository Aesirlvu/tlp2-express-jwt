import { connectDb } from "../db/database.js";

export const userEntity = async () => {
  const connection = await connectDb();
  const query = `
  CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100),
    password VARCHAR(100)
    )`;

  await connection.execute(query);
  console.log("Tabla creada 👍");
};
