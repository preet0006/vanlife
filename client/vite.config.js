import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { analyzer } from "vite-bundle-analyzer";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ["babel-plugin-react-compiler"],
      },
    }),
    tailwindcss(),
    analyzer({
      analyzerMode: "static",
      openAnalyzer: true,
    }),
  ],

  build: {
    outDir: "dist",
    emptyOutDir: true,

    minify: "esbuild",
    cssMinify: true,

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },

    sourcemap: false,
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
