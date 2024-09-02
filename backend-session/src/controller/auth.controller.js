//Auth controller

import { connectDb } from "../db/database.js";

export const register = async (req, res) => {
  const connection = await connectDb();

  try {
    const { username, password } = req.body;

    const query = `
            INSERT INTO users (username, password)
            VALUES (?, ?)`;

    const checkQuery = `
            SELECT * FROM users
            WHERE username = ?`;

    const [checkUser] = await connection.execute(checkQuery, [username]);

    if (checkUser.length > 0) {
      return res.status(400).json({ message: "Usuario ya registrado" });
    }

    await connection.execute(query, [username, password]);

    return res.json({
      message: "Usuario registrado",
    });
  } catch (error) {
    return res.status(500).json({ message: "Error en el servidor" });
  }
};

export const login = async (req, res) => {
  const connection = await connectDb();

  try {
    const { username, password } = req.body;

    const query = `
        SELECT * FROM users
        WHERE username = ?
        AND password = ?`;

    const [user] = await connection.execute(query, [username, password]);

    if (user.length > 0) {
      const loggedInUser = user[0];

      req.session.userId = loggedInUser.id;
      req.session.username = loggedInUser.username;

      return res.json({
        message: "Inicio de sesión exitoso",
        user: { id: loggedInUser.id, username: loggedInUser.username },
      });
    } else {
      return res.status(401).json({ message: "Credenciales incorrectas" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error en el servidor" });
  }
};

export const session = async (req, res) => {
  if (req.session.userId) {
    return res.json({
      loggedIn: true,
      user: { id: req.session.userId, username: req.session.username },
    });
  } else {
    return res
      .status(401)
      .json({ loggedIn: false, message: "No hay sesión activa" });
  }
};

export const logout = async (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: "Error al cerrar la sesión" });
    }
    res.clearCookie("connect.sid"); // Nombre de cookie por defecto para express-session
    return res.json({ message: "Sesión cerrada exitosamente" });
  });
};