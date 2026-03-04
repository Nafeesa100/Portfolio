import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // During dev: /api calls go to Express server
      '/api': 'http://localhost:5000',
    },
  },
})
