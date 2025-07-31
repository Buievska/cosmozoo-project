import { defineConfig } from "vite";
import { globSync } from "glob";
import { resolve } from "path";

export default defineConfig({
  root: "src",
  build: {
    rollupOptions: {
      input: globSync(resolve(__dirname, "src", "*.html")),
    },
    outDir: "../dist",
  },
});
