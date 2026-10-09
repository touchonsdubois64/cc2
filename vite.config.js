import { defineConfig } from "vite";

export default defineConfig({
    base: "/cc2/",
    build: {
        outDir: "docs",
        emptyOutDir: true
    }
});