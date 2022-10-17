import React from 'react'
import ReactDOM from 'react-dom/client'
import 'vite/modulepreload-polyfill'
import App from './App'

window.apps = window.apps || {}
window.apps.app2 = {
  app: null,
  create: () => { },
  mount(container: HTMLElement) {
    this.app = ReactDOM.createRoot(container)
    this.app.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    )
  },
  unmount() {
    if (!this.app) { return }
    this.app.unmount()
    this.app = null
  },
}
