import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "./",
  plugins: [
    react(),
    tailwindcss({
      config: {
        content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
        theme: {
          extend: {
            fontFamily: {
              sans: ["Poppins", "sans-serif"],
            },
          },
        },
        darkMode: "class",
        plugins: [],
      },
    }),
  ],
});
