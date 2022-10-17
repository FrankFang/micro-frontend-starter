import { createApp } from 'vue'
import { Container } from './components/Container'
import { router } from './router/router'

const app = createApp(Container)
app.use(router)
app.mount('#container')
