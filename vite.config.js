import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // "/" locally; the deploy workflow sets BASE_PATH to "/<repo>/" for
  // GitHub Pages project sites.
  base: process.env.BASE_PATH ?? "/",
  plugins: [react()],
  server: {
    watch: {
      // A watcher racing a build inside the project throws EBUSY on Windows.
      ignored: ["**/dist/**"],
    },
  },
});
