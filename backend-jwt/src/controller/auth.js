import { connectDB } from "../db/database.js";
import { validateJwt } from "../middlewares/validar-jwt.js";
import { generarJwt } from "../helpers/generar-jwt.js";

export const userRegister = async (req, res) => {
  const connection = await connectDB();
  try {
    const { username, password } = req.body;

    const verifyUserQuery = `SELECT * FROM users 
    WHERE username = ? `;

    const insertQuery = `INSERT INTO users 
    (username, password) 
    VALUES (?, ?)`;

    const [checkUser] = await connection.query(verifyUserQuery, [username]);

    if (checkUser.length > 0) {
      return res.status(400).json({ message: "Usuario existente" });
    }

    await connection.query(insertQuery, [username, password]);

    return res.json({ message: "Usuario creado 👍" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error Inesperado" });
  }
};

export const userLogin = async (req, res) => {
  const connection = await connectDB();
  try {
    const { username, password } = req.body;

    const query = `SELECT * FROM users 
    WHERE username = ?
    AND password = ?`;

    const [user] = await connection.query(query, [username, password]);

    if (user.length === 0) {
      return res.status(401).json({ message: "Credenciales incorrectas ❌" });
    }

    const token = await generarJwt(user[0].id);

    req.session.token = token;

    res.cookie("authToken", token, {
      httpOnly: true, // La cookie no es accesible desde JavaScript
      secure: false, // Cambiar a true en producción con HTTPS
      maxAge: 3600000, // Expiración en milisegundos (1 hora)
    });

    return res.json({ message: "Inicio de sesión exitoso" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error Inesperado" });
  }
};

export const validateUserSession = (req, res) => {
  console.log(req.user);
  return res.json({
    message: "Acceso permitido a área protegida",
    user: req.user,
  });
};

export const logoutUser = (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "❌ Error al cerrar sesión ❌" });
      }

      res.clearCookie("authToken");
      return res.json({ message: "Cierre de sesión exitoso" });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error Inesperado" });
  }
};
