import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import VitePress from 'vitepress'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio-v1/',
  plugins: [VitePress()],
})
