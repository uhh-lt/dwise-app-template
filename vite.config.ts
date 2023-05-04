import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // aliases https://stackoverflow.com/questions/75201705/how-to-set-multiple-aliases-in-vite-react
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      // "@api": `${path.resolve(__dirname, "./src/api")}`,
      // "@components": `${path.resolve(__dirname, "./src/components/")}`,
      // "@plugins": `${path.resolve(__dirname, "./src/plugins/")}`,
      // "@views": path.resolve(__dirname, "./src/views"),
    },
  },
});
