interface Window {
  apps: {
    [key: string]: {
      create: () => void;
      mount: (container: HTMLElement) => void;
      unmount: () => void;
    };
  }
}
