import { createRouter, createWebHashHistory } from 'vue-router'
import { createApp } from 'vue'
import { createMicroApp } from './components/MicroApp'
import { NotFound } from './components/NotFound'
import { Container } from './components/Container'

const routes = [
  { path: '/', component: NotFound },
  {
    path: '/app1',
    component: createMicroApp({
      name: 'app1',
      entry: isDev
        ? 'http://localhost:5174/src/entry.tsx'
        : 'http://localhost:4174/manifest.json',
    }),
  },
  {
    path: '/app2',
    component: createMicroApp({
      name: 'app2',
      beforeEntry: isDev
        ? 'http://localhost:5175/src/hmr.tsx'
        : undefined,
      entry: isDev
        ? 'http://localhost:5175/src/entry.tsx'
        : 'http://localhost:4175/manifest.json',
    }),
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(Container)
app.use(router)
app.mount('#container')
