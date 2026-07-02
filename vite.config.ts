// Import defineConfig from 'vitest/config' instead of 'vite'
import { defineConfig } from 'vitest/config'
// import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [],
  base: process.env.NODE_ENV === 'production' ? '/firstapp/' : '/',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
})

