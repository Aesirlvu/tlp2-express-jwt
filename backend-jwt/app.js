import express from "express";
import { serverMiddlewares } from "./src/middlewares/server.js";
import { env } from "./src/config/env.js";
import authRouter from "./src/routes/auth.routes.js";
import { userEntity } from "./src/model/user.js";

const PORT = env.SERVER.PORT;
const URL = env.SERVER.URL;

const app = express();
app.use(express.json());

serverMiddlewares(app);

app.use("/auth", authRouter);

(async function main() {
  await userEntity();
  app.listen(PORT, () => {
    console.log(`${URL}:${PORT} - 👍`);
  });
})();
