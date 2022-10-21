import { createApp } from 'vue'
import { App } from './App'
import { router } from './router/router'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import './global.scss'

const app = createApp(App)
app.use(router)
app.mount('#container')
