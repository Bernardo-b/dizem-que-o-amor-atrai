import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/dizem-que-o-amor-atrai/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
}))
