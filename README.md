# micro-frontend-starter

一个简易的微前端应用，用于演示微前端的基本原理。目前没有沙箱和隔离功能。

## 开发

```bash
pnpm run -r dev
```

## 已知问题

- 最外层 container 的 hmr 功能无法使用，需要手动刷新页面。（怀疑是因为子应用的 hmr 与 container 的 hmr 冲突了）

## 部署
```bash
pnpm run -r build
pnpm run -r preview
```

