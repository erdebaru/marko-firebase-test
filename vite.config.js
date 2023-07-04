import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import marko from "@marko/run/vite";
import FullReload from 'vite-plugin-full-reload'

export default defineConfig({
  plugins: [
    marko(),
    FullReload(['src/**/*']) //Had to do this because HMR is not working correctly and not updating the page until refreshed and saved again to trigger HMR
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})