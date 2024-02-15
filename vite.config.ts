import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    base: process.env.NODE_ENV === 'production' ? '/nicchunglow/' : '/',
    define: {
      'process.env.BASE_URL': JSON.stringify(env.BASE_URL),
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
    },
    plugins: [react()],
    resolve: {
      alias: [{ find: '@', replacement: '/src' }],
    },
  }
})
