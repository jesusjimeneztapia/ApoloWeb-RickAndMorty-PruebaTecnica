import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@assets": "/src/assets",
      "@icons": "/src/icons",
      "@components": "/src/components",
      "@constants": "/src/constants",
      "@hooks": "/src/hooks",
      "@pages": "/src/pages",
      "@services": "/src/services",
      "@stores": "/src/stores",
    },
  },
  plugins: [react()],
});
