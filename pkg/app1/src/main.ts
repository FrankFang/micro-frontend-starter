import { createApp } from 'vue'
import type { App as TypeApp } from 'vue'
import App from './App.vue'

let app: TypeApp | null = null
// @ts-ignore
window['app1'] = {
  create: () => { },
  mount: (container: HTMLElement) => {
    app = createApp(App)
    app.mount(container)
  },
  unmount: () => {
    if (!app) { return }
    app.unmount()
    app = null
  }
}
