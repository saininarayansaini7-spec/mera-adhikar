import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Relative, so the build works both at a domain root and under the
  // /repo-name/ sub-path that GitHub Pages serves a project site from.
  base: './',
  build: {
    // The whole bilingual law library ships in one bundle on purpose: it is
    // fetched once, cached by the service worker, and then works offline.
    // ~165 kB gzipped for 24 Acts and 15 guides is a fair trade.
    chunkSizeWarningLimit: 700,
  },
  plugins: [react()],
})
