import '@vue/runtime-dom'

declare module 'vue' {
  interface HTMLAttributes {
    flex?: boolean
    btn?: boolean
  }
}
