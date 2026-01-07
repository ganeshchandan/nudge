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
      { find: "@config", replacement: "/src/config" },
      { find: "@utils", replacement: "/src/utils" },
    ],
  },
  server: {
    proxy: {
      "/api": {
        target: "http://54.83.73.24:8000",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => {
          // Remove /api prefix and return the rest
          return path.replace(/^\/api/, "");
        },
      },
    },
  },
  plugins: [react(), svgr()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Separate vendor chunks
          if (id.includes("node_modules")) {
            // React and React DOM
            if (id.includes("react") || id.includes("react-dom") || id.includes("react-router")) {
              return "react-vendor";
            }
            // D3 (large library)
            if (id.includes("d3")) {
              return "d3-vendor";
            }
            // Bootstrap (large CSS framework)
            if (id.includes("bootstrap")) {
              return "bootstrap-vendor";
            }
            // Redux
            if (id.includes("redux") || id.includes("@reduxjs")) {
              return "redux-vendor";
            }
            // Axios
            if (id.includes("axios")) {
              return "axios-vendor";
            }
            // Other node_modules
            return "vendor";
          }
          
          // Split large application code more granularly
          if (id.includes("/src/components/common/")) {
            // Split knowledge graph (likely uses D3) - load on demand
            if (id.includes("knowledge-graph")) {
              return "common-knowledge-graph";
            }
            // Split lifecycle component (used in timeline)
            if (id.includes("lifecycle")) {
              return "common-lifecycle";
            }
            // Split one-minute-summary (large component)
            if (id.includes("one-minute-summary")) {
              return "common-summary";
            }
            // Split chart components
            if (id.includes("chart")) {
              return "common-chart";
            }
            // Split widget components
            if (id.includes("widget")) {
              return "common-widget";
            }
            // Split overflow-container (commonly used)
            if (id.includes("overflow-container")) {
              return "common-overflow";
            }
            // Split tabs (commonly used)
            if (id.includes("tabs")) {
              return "common-tabs";
            }
            // Split modal (commonly used)
            if (id.includes("modal")) {
              return "common-modal";
            }
            // Split remaining common components alphabetically to prevent large chunks
            const match = id.match(/\/common\/([^\/]+)/);
            if (match) {
              const componentName = match[1];
              // Group alphabetically: a-f, g-m, n-s, t-z
              const firstChar = componentName.charAt(0).toLowerCase();
              if (firstChar >= 'a' && firstChar <= 'f') {
                return "common-a-f";
              } else if (firstChar >= 'g' && firstChar <= 'm') {
                return "common-g-m";
              } else if (firstChar >= 'n' && firstChar <= 's') {
                return "common-n-s";
              } else {
                return "common-t-z";
              }
            }
            return "common";
          }
          
          // Split stores
          if (id.includes("/src/stores/")) {
            return "stores";
          }
          
          // Split dashboard components
          if (id.includes("/src/components/dashboard/")) {
            return "dashboard";
          }
          
          // Split services
          if (id.includes("/src/services/")) {
            return "services";
          }
        },
      },
    },
    chunkSizeWarningLimit: 600, // Increase limit slightly but still warn
    sourcemap: false, // Disable sourcemaps in production for smaller builds
    // Vite uses esbuild by default for minification
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./tests.setup.ts",
  },
} as UserConfig);
