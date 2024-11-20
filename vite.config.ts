import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@assets": "/src/assets",
      "@components": "/src/components",
      "@constants": "/src/constants",
      "@errors": "/src/errors",
      "@hooks": "/src/hooks",
      "@icons": "/src/icons",
      "@layouts": "/src/layouts",
      "@pages": "/src/pages",
      "@services": "/src/services",
      "@stores": "/src/stores",
    },
  },
  plugins: [react()],
  build: {
    target: "esnext",
  },
});
