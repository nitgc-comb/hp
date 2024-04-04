import { defineConfig } from 'vite'
import createVuePlugin from '@vitejs/plugin-vue'
import vuePugPlugin from 'vue-pug-plugin'
import path from 'path'

export default defineConfig({
  // FIXME: 本来なら import.meta.env.MODE で取れるが、cjs扱いになってるので修正する必要あり
  base: process.env.MODE === 'production' ? 'hp/' : './',
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
            MODE: 3
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
