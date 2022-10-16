import { createMicroApp, MicroApp } from './components/MicroApp';
import { NotFound } from './components/NotFound';
import { registerApp, microApps, activeMicroApps, setActive } from './lib/micro';
import { createRouter, createWebHashHistory } from 'vue-router'
import { Container } from './components/Container';
import { createApp } from 'vue';

const routes = [
  { path: '/', component: NotFound },
  {
    path: '/app1',
    component: createMicroApp({
      name: 'app1',
      entry: "http://localhost:5174/src/main.ts"
    })
  },
  {
    path: '/app2',
    component: createMicroApp({
      name: 'app2',
      beforeEntry: "http://localhost:5175/src/hmr.tsx",
      entry: "http://localhost:5175/src/main.tsx"
    })
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

// registerApp(
//   {
//     name: 'app1',
//     entry: 'http://localhost:5174/src/main.ts',
//     containerId: 'app1',
//     activePath: '/'
//   },
//   {
//     name: 'app2',
//     beforeEntry: ['http://localhost:5175/src/hmr.tsx'],
//     entry: 'http://localhost:5175/src/main.tsx',
//     containerId: 'app2',
//     activePath: '/'
//   },
// )


// window.addEventListener('hashchange', run)

// function run() {
//   let { hash } = location
//   hash = hash || '#/'
//   hash = hash.slice(1)
//   Object.entries(activeMicroApps).forEach(([name, active]) => {
//     if (active && microApps[name].activePath !== hash) {
//       // @ts-ignore
//       window[name].unmount()
//     }
//   })
//   const founds = Object.entries(microApps)
//     .filter(([name, config]) => config.activePath === hash)
//   if (founds.length === 0) { return }
//   founds.forEach(async (found) => {
//     const [, app] = found
//     const container = document.getElementById(app.containerId)
//     if (!container) { return }
//     if (app.beforeEntry) {
//       app.beforeEntry.forEach((url) => {
//         createScript(url)
//       })
//     }
//     await createScript(app.entry)
//     console.log('加载成功' + app.name)
//     setActive(app.name)
//     // @ts-ignore
//     await window[app.name].create(container)
//     // @ts-ignore
//     await window[app.name].mount(container)
//   })
// }
// run()

// function createScript(url: string) {
//   return new Promise((resolve, reject) => {
//     const script = document.createElement('script')
//     script.type = 'module'
//     script.src = url
//     script.onload = () => {
//       resolve(script)
//     }
//     script.onerror = () => {
//       reject(script)
//     }
//     document.body.appendChild(script)
//   })
// }

// export { }