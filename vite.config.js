import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { readdirSync } from "node:fs";
import { resolve } from "node:path";

function htmlInputs(dir = ".") {
  const inputs = {};

  function walk(current) {
    for (const entry of readdirSync(current, { withFileTypes: true })) {
      if (entry.name === "node_modules" || entry.name === "dist" || entry.name === ".git") continue;
      const fullPath = resolve(current, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.name === "index.html") {
        const key = fullPath.replace(resolve("."), "").replace(/^[\\/]/, "").replace(/[\\/]/g, "-") || "index";
        inputs[key] = fullPath;
      }
    }
  }

  walk(resolve(dir));
  return inputs;
}

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [".trycloudflare.com"],
  },
  build: {
    rollupOptions: {
      input: htmlInputs(),
    },
  },
});
