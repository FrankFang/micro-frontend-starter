import { createApp } from 'vue'
import type { App as TypeApp } from 'vue'
import App from './App.vue'

let app: TypeApp | null = null
window.apps = window.apps || {}
window.apps['app1'] = {
  create: () => {
    console.log('app1 create')
  },
  mount: (container: HTMLElement) => {
    console.log('app1 mount')
    app = createApp(App)
    app.mount(container)
    console.log('Container', container)
  },
  unmount: () => {
    if (!app) { return }
    app.unmount()
    app = null
  }
}
