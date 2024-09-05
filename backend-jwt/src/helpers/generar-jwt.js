import jwt from "jsonwebtoken";
<<<<<<< HEAD
import { SECRET_KEY } from "../config/env.js";

export default (userId) => {
=======
import { env } from "../config/env.js";

export const generarJwt = (userId) => {
>>>>>>> 62ba003d5cde38092bbd49f33c1367947075b7f2
  return new Promise((resolve, reject) => {
    const payload = { userId };
    jwt.sign(
      payload,
<<<<<<< HEAD
      SECRET_KEY,
      {
        expiresIn: "4h",
=======
      env.SECRET_KEY.JWT,
      {
        expiresIn: "5h",
>>>>>>> 62ba003d5cde38092bbd49f33c1367947075b7f2
      },
      (error, token) => {
        if (error) {
          console.log(error);
          reject("No se pudo generar el token");
        } else {
          resolve(token);
        }
      }
    );
  });
};
