/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}


interface Manifest {
  [filename: string]: {
    file: string;
    src: string;
    css?: string[];
    isEntry?: boolean;
    isDynamicEntry?: boolean;
  }
}

