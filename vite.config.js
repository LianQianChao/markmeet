import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default ({mode}) => defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'),
      '@': path.resolve(__dirname, 'src')
    }
  },
  base: mode == 'development' ? './' : (mode == 'beta' ? './' : './'),
  server:{
    proxy:{
      '/api':{
        target: 'http://localhost:8090',
        changeOrigin: true,
        rewrite: path => path.repeat(/^\/api/,'')
      }
    }
  }
})
