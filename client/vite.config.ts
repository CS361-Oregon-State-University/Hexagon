import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/test": {
        target: "http://127.0.0.1:8000/",
        changeOrigin: true,
      },
      "/username": {
        target: "http://127.0.0.1:8000/",
        changeOrigin: true,
      },
      "/updateUsername": {
        target: "http://127.0.0.1:8000/",
        changeOrigin: true,
      },
      "/loginInfo": {
        target: "http://127.0.0.1:8000/",
        changeOrigin: true,
      },
      "/getWorkouts": {
        target: "http://127.0.0.1:8000/",
        changeOrigin: true,
      },
    },
  },
});
