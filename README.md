# micro-frontend-starter

一个简易的微前端应用，用于演示微前端的基本原理。目前没有沙箱和隔离功能。

## 开发

```bash
pnpm run -r dev
```

## 已知问题

- HMR 功能有问题，只有一个应用能够正常热更新，其他应用需要手动刷新页面

## 部署
```bash
pnpm run -r build
pnpm run -r preview
```

