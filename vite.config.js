import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  logLevel: 'error', 
  plugins: [
    react(),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  ],
  build: {
    outDir: 'dist',
    // This ensures assets are linked correctly for cPanel subfolders if needed
    assetsDir: 'assets',
  }
})
