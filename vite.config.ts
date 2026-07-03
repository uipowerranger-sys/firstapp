import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Change '/react-cicd-demo/' to '/firstapp/' to match your repository name
  base: process.env.NODE_ENV === 'production' ? '/firstapp/' : '/',
  test: {
    globals: true,
    environment: 'jsdom',
  },
})