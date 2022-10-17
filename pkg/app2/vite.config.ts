import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({ fastRefresh: true }),
  ],
  build: {
    manifest: true,
    rollupOptions: {
      input: './src/entry.tsx',
    },
  },
})
