import express from "express";
import authRouter from "./src/routes/auth.routes.js";
import path from "path";
import { env } from "./src/config/environment.js";
import { userEntity } from "./src/model/user.model.js";
import { Middlewares } from "./src/middlewares/middlewares.js";

const app = express();
const __dirname = path.resolve();

app.use(express.json());

const HOST = env.SERVER.HOST;
const PORT = env.SERVER.PORT;

Middlewares(app);
app.use(express.static(path.join(__dirname, "public")));

app.use("/auth", authRouter);

(async function () {
  await userEntity();
  app.listen(PORT, () => console.log(`Corriendo en: ${HOST}:${PORT} 👍`));
})();
