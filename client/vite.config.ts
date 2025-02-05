/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./setupTests.ts'],
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      },
      '/crunchbase': {
        target: 'https://api.crunchbase.com/v4',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/crunchbase/, '/data/searches/organizations')
      },
      '/peopledata': {
        target: ' https://api.peopledatalabs.com/v5',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/peopledata/, '/company/search')
      }
    },
  }
})
