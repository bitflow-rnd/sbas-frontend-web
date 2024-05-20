import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import path from 'path'

export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  console.log('proxy', process.env.VITE_APP_API_URL)

  return {
    transformIgnorePatterns: [],
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    publicDir: path.resolve(__dirname, 'public'),
    build: {
      outDir: './dist',
      assetsDir: 'assets',
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html')
        },
        external: (id) => id.startsWith('/api/v1/public/common/sidos')
      }
    },
    server: {
      host: '0.0.0.0',
      port: 80,
      // historyApiFallback: true,
      proxy: {
        '/api': {
          target: process.env.VITE_APP_API_URL,
          changeOrigin: true
        },
        '/chat-rooms': {
          target: process.env.VITE_APP_CHAT_URL,
          ws: true,
          changeOrigin: true
        }
      }
    }
  }
})
