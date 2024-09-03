import { connectDB } from "../db/database";

export const login = async (req, res) => {
  const connection = await connectDB();
  try {
    const { username, password } = req.body;

    const query = `
        SELECT * FROM users
        WHERE username = ?
        AND password = ?
        `;

    const [user] = connection.query(query, [username, password]);

    if (!user.length) {
    }
    // Validación de usuario
    if (!user) {
    }

    // Generar token JWT
    const token = await generarJwt(user.id);

    // Almacenar el token en la sesión del servidor
    req.session.token = token;

    // Almacenar el token en una cookie segura
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
