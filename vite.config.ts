import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/react-cicd-demo/' : '/',
  test: {
    globals: true,
    environment: 'jsdom',
    // We removed the setupFiles line from here!
  },
})