import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  return {
    define: {
      isDev: JSON.stringify(mode === 'development'),
    },
    plugins: [
      vue(),
      vueJsx(),
      unocss(),
    ],
  }
})
