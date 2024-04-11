import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // añado el path para poder saber la ruta

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // configuro alias para mis carpetas con @
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
