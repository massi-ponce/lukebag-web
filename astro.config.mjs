import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// SITE_URL y BASE_PATH los entrega automáticamente el workflow de GitHub Pages
// (.github/workflows/deploy.yml). En tu computador no necesitas configurarlos.
export default defineConfig({
  site: process.env.SITE_URL || "https://lukebag.cl",
  base: process.env.BASE_PATH || "/",
  vite: {
    plugins: [tailwindcss()],
  },
});
