# micro-frontend-starter

一个简易的微前端应用，用于演示微前端的基本原理。目前没有沙箱和隔离功能。

## 开发

```bash
pnpm run -r dev
```

## 已知问题

- HMR 功能有问题，只有一个应用能够正常热更新，其他应用需要手动刷新页面。

    要解决这个问题至少需要先引入沙箱，但目前我还没有想到一个好的沙箱方案。大家就多刷新几次吧😁

## 部署
```bash
pnpm run -r build
pnpm run -r preview
```

