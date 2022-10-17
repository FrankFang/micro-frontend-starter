import 'vite/modulepreload-polyfill'
import { createApp } from 'vue'
import App from './App.vue'

window.apps = window.apps || {}
window.apps.app1 = {
  app: null,
  create: () => {
  },
  mount(container) {
    this.app = createApp(App)
    this.app.mount(container)
  },
  unmount() {
    if (!this.app) { return }
    this.app.unmount()
    this.app = null
  },
}
