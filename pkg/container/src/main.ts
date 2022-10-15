import { registerApp, microApps, activeMicroApps, setActive } from './lib/micro';
registerApp(
  {
    name: 'app1',
    entry: 'http://localhost:5174/src/main.ts',
    containerId: 'app1',
    activePath: '/'
  },
  {
    name: 'app2',
    entry: 'http://localhost:5175/src/main.tsx',
    containerId: 'app2',
    activePath: '/'
  },
)


window.addEventListener('hashchange', run)

function run() {
  let { hash } = location
  hash = hash || '#/'
  hash = hash.slice(1)
  Object.entries(activeMicroApps).forEach(([name, active]) => {
    if (active && microApps[name].activePath !== hash) {
      // @ts-ignore
      window[name].unmount()
    }
  })
  const founds = Object.entries(microApps)
    .filter(([name, config]) => config.activePath === hash)
  if (founds.length === 0) { return }
  founds.forEach((found) => {
    const [, app] = found
    const container = document.getElementById(app.containerId)
    if (!container) { return }
    const script = document.createElement('script')
    script.type = 'module'
    script.src = app.entry
    script.onload = async () => {
      console.log('加载成功' + app.name)
      setActive(app.name)
      // @ts-ignore
      await window[app.name].create(container)
      // @ts-ignore
      await window[app.name].mount(container)
    }
    script.onerror = () => {
      console.log('加载失败' + app.name)
    }
    document.body.appendChild(script)
  })
}
run()

export { }
