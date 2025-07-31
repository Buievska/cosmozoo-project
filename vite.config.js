import { defineConfig } from "vite";
import { globSync } from "glob";
import path, { resolve } from "path";

// Отримуємо абсолютний шаблон
const htmlFiles = globSync(
  path.posix.join(__dirname.replace(/\\/g, "/"), "src/*.html")
);

const inputEntries = Object.fromEntries(
  htmlFiles.map((file) => {
    const name = path
      .relative(resolve(__dirname, "src"), file)
      .replace(/\\/g, "/");
    return [name, file];
  })
);

console.log("HTML files found:", htmlFiles);
console.log("Rollup input:", inputEntries);

export default defineConfig({
  root: "src",
  build: {
    rollupOptions: {
      input: inputEntries,
    },
    outDir: "../dist",
    emptyOutDir: true,
  },
});
