import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Proxy: Cors Anywhere
  server: {
    proxy: {
        '/api': 'http://127.0.0.1:8080'
      }
  },
  plugins: [react()],
})
