import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  proxy: {
    "/api": {
      target: "https://trueno-backend.vercel.app", // Replace with your actual backend URL
      changeOrigin: true, // Needed for virtual hosted sites
      secure: false, // Set this to false if using http for local testing
      // rewrite: (path) => path.replace(/^\/api/, ""), // Removes the /api prefix when proxying
    },
  },
});
