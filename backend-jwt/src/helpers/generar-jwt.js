import jwt from "jsonwebtoken";
import { env } from "../config/env.js";

export const generarJwt = (userId) => {
  return new Promise((resolve, reject) => {
    const payload = { userId };
    jwt.sign(
      payload,
      env.SECRET_KEYS.JWT,
      {
        expiresIn: "5h",
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
