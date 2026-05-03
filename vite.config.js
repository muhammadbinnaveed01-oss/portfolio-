import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    base: process.env.NODE_ENV === "production" ? "/Portfolio/" : "/",
  plugins: [react(), tailwindcss()],

  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/__tests__/setup.js"],
  },

  build: {
    target: "es2020",
    cssMinify: true,
    chunkSizeWarningLimit: 1000,
    // Report both gzip and brotli sizes so you can verify host compression
    reportCompressedSize: true,

    rollupOptions: {
      output: {
        manualChunks(id) {
          // Normalize to forward slashes for cross-platform matching
          const normalId = id.replace(/\\/g, "/");

          // ── Three.js core — largest chunk, must be isolated ──
          if (normalId.includes("/node_modules/three/")) {
            return "three-vendor";
          }

          // ── React Three Fiber ──
          if (normalId.includes("/node_modules/@react-three/fiber/")) {
            return "three-r3f";
          }

          // ── React core ──
          if (
            normalId.includes("/node_modules/react/") ||
            normalId.includes("/node_modules/react-dom/") ||
            normalId.includes("/node_modules/react-router")
          ) {
            return "react-vendor";
          }

          // ── Framer Motion ──
          if (
            normalId.includes("/node_modules/framer-motion/") ||
            normalId.includes("/node_modules/motion-dom/") ||
            normalId.includes("/node_modules/motion-utils/")
          ) {
            return "motion-vendor";
          }

          // ── Icons ──
          if (normalId.includes("/node_modules/react-icons/")) {
            return "icons-fa";
          }
          if (normalId.includes("/node_modules/lucide-react/")) {
            return "icons-lucide";
          }
        },
      },
    },
  },
});
