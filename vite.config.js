import { defineConfig, transformWithEsbuild } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    {
      name: "treat-js-files-as-jsx",
      async transform(code, id) {
        if (!id.match(/src\/.*\.js$/)) return null;

        // Use the exposed transform from vite, instead of directly
        // transforming with esbuild
        return transformWithEsbuild(code, id, {
          loader: "jsx",
          jsx: "automatic",
        });
      },
    },
    react(),
  ],
  server: {
    port: 7070,
    proxy: {
      "^/auth": {
        target: "http://139.144.67.77:5902/",
        changeOrigin: true,
        secure: false,
      },
      "^/identity": {
        target: "http://139.144.67.77:5902/",
        changeOrigin: true,
        secure: false,
      },
      "^/intro": {
        target: "http://139.144.67.77:5902/",
        changeOrigin: true,
        secure: false,
      },
      "^/v1": {
        target: "http://139.144.67.77:5902/",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  envPrefix: "APP_",

  optimizeDeps: {
    force: true,
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },
});
