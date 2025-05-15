import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: parseInt(import.meta.env.VITE_PORT) || 5173,
  },
  plugins: [react(), tailwindcss()],
});
