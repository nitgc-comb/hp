import { defineConfig } from 'vite'
import createVuePlugin from '@vitejs/plugin-vue'
import vuePugPlugin from 'vue-pug-plugin'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      vue: '@vue/compat',
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    createVuePlugin({
      template: {
        compilerOptions: {
          compatConfig: {
            MODE: 2
          }
        },
        preprocessOptions: {
          plugins: [
            vuePugPlugin
          ]
        }
      }
    })
  ]
})
