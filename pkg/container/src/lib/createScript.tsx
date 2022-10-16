export const createScript = (url: string) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.type = 'module'
    script.src = url
    script.onload = () => {
      resolve(script)
    }
    script.onerror = () => {
      reject(script)
    }
    document.body.appendChild(script)
  })
}
