import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Configuración correcta de Vite
export default defineConfig({
  plugins: [react()],
  root: ".",          // raíz del proyecto frontend
  publicDir: "public",
  server: {
    port: 5173,
  },
});
