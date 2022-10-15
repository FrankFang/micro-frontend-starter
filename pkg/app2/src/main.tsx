import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

let app: ReactDOM.Root | null = null
// @ts-ignore
window['app2'] = {
  create: () => { },
  mount: (container: HTMLElement) => {
    app = ReactDOM.createRoot(container)
    app.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    )
  },
  unmount: () => {
    if (!app) { return }
    app.unmount()
    app = null
  }
}
