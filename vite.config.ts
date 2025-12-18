import { defineConfig, type UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: "@constants", replacement: "/src/constants" },
      { find: "@assets", replacement: "/src/assets" },
      { find: "@components", replacement: "/src/components" },
      { find: "@stores", replacement: "/src/stores" },
      { find: "@services", replacement: "/src/services" },
      { find: "@tests", replacement: "/src/__test__" },
    ],
  },
  plugins: [react(), svgr()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./tests.setup.ts",
  },
} as UserConfig);
