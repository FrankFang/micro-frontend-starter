import { createRouter, createWebHashHistory } from 'vue-router'
import { createMicroApp } from '../components/MicroApp'
import { NotFound } from '../components/NotFound'
import { Home } from '../views/Home'

const routes = [
  { path: '/', component: Home },
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

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
