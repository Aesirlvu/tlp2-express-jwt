import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 5500,
  },
  root: "./",
  base: "/",
  publicDir: "public",
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
  plugins: [],
});
