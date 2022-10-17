interface Window {
  apps: {
    [key: string]: {
      app: any;
      create: () => void;
      mount: (container: HTMLElement) => void;
      unmount: () => void;
    };
  }
}
