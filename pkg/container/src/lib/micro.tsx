interface MicroApp {
  name: string
  entry: string // 示例：xxx.js
  beforeEntry?: string[]
  containerId: string
  activePath: string // 示例：/app-1
}
export const microApps: Record<string, MicroApp> = {}
export const activeMicroApps: Record<string, boolean> = {}
export const setActive = (name: string) => {
  activeMicroApps[name] = true
}
export const registerApp = (...apps: MicroApp[]) => {
  apps.forEach(app => {
    microApps[app.name] = app
  })
}
