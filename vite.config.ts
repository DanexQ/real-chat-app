import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import svgrPlugin from "vite-plugin-svgr";

const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@context": path.resolve(__dirname, "src/context"),
    },
  },
  plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
});
