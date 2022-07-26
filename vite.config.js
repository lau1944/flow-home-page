import { fileURLToPath, URL } from 'url'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  projects: [
    {
      root: './src', // root of your vue project (should contain package.json)
      package: './package.json', // Relative to root property, don't change this.
      jsconfig: './jsconfig.json',  // Relative to root property, don't change this.
      tsconfig: './tsconfig.json'
    }
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})