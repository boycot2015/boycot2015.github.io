---
title: Vite + TailwindCSS + Mock 基础配置指南
description: 详细介绍如何配置 Vite + TailwindCSS + vite-plugin-mock 的开发环境，包括依赖安装、配置文件设置、环境变量配置等内容
date: "2026-05-06T17:37:00Z"
categories: Vite
tags: ['tailwindcss', 'vite', 'vite-plugin-mock', 'mockjs']
recommend: true
---

## 概述

本文档详细介绍如何在 Vue 项目中配置 Vite + TailwindCSS + Mock 开发环境。通过本文的配置，您将获得：

- 快速的开发构建体验（Vite）
- 现代化的 CSS 样式方案（TailwindCSS）
- 便捷的接口模拟能力（vite-plugin-mock）

## 环境要求

- **Node.js**: >= 18.0.0（Vite 5.x 要求）
- **npm/pnpm**: 推荐使用 pnpm 作为包管理器

## 依赖安装

### 核心依赖说明

| 依赖包 | 版本要求 | 作用说明 |
|--------|----------|----------|
| `tailwindcss` | ^4.0.0 | TailwindCSS 核心库，提供原子化 CSS 能力 |
| `vite-plugin-mock` | ^3.0.0 | Vite 插件，用于开发环境 Mock 数据 |
| `mockjs` | ^1.1.0 | 生成模拟数据的工具库 |
| `@tailwindcss/vite` | ^4.0.0 | TailwindCSS 的 Vite 插件 |

### 安装命令

```bash
# 使用 npm 安装
npm install tailwindcss @tailwindcss/vite vite-plugin-mock mockjs --save-dev

# 使用 pnpm 安装（推荐）
pnpm install tailwindcss @tailwindcss/vite vite-plugin-mock mockjs --save-dev
```

## Vite 配置详解

### 基础配置

创建或修改 `vite.config.ts` 文件：

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { viteMockServe } from 'vite-plugin-mock'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    viteMockServe({
      mockPath: 'src/mock',
      enable: true,
      logger: true,
      watchFiles: true
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    port: 5173,
    host: true,
    open: false
  }
})
```

### 配置参数说明

#### resolve.alias（路径别名）

| 参数 | 说明 |
|------|------|
| `@` | 指向项目根目录下的 `src` 文件夹，便于模块导入 |

#### server（开发服务器配置）

| 参数 | 默认值 | 说明 |
|------|--------|------|
| `port` | 5173 | 开发服务器端口 |
| `host` | false | 是否允许外部访问 |
| `open` | false | 是否自动打开浏览器 |

#### viteMockServe（Mock 插件配置）

| 参数 | 默认值 | 说明 |
|------|--------|------|
| `mockPath` | 'mock' | Mock 文件存放目录 |
| `enable` | true | 是否启用 Mock |
| `logger` | false | 是否输出日志 |
| `watchFiles` | true | 是否监听文件变化 |

## TailwindCSS 配置

### 样式文件配置

在 `src/style.css` 中引入 TailwindCSS：

```css
@import "tailwindcss";

@theme {
  --color-primary: #3b82f6;
  --color-secondary: #64748b;
  --color-success: #22c55e;
  --color-warning: #f59e0b;
  --color-danger: #ef4444;
  
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  
  --shadow-card: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
  --shadow-card-hover: 0 10px 25px rgba(0, 0, 0, 0.15), 0 6px 10px rgba(0, 0, 0, 0.1);
}
```

### tailwind.config.js 配置

创建 `tailwind.config.js` 文件：

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,vue}',
    './components/**/*.{js,ts,jsx,tsx,vue}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a'
        }
      }
    },
    plugins: []
  }
}
```

### 主题定制说明

通过 `@theme` 指令或 `tailwind.config.js` 可以定制：

- **颜色系统**: 自定义品牌色、语义色
- **字体**: 配置全局字体栈
- **间距**: 调整间距系统
- **阴影**: 定义自定义阴影效果

## Mock 数据配置

### Mock 文件结构

在 `src/mock` 目录下创建 Mock 文件：

```
src/
└── mock/
    ├── user.ts
    ├── product.ts
    └── index.ts
```

### Mock 文件示例

**src/mock/user.ts**：

```ts
import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/api/user/list',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'success',
        data: [
          { id: 1, name: '张三', age: 28, role: 'admin' },
          { id: 2, name: '李四', age: 25, role: 'user' },
          { id: 3, name: '王五', age: 30, role: 'user' }
        ]
      }
    }
  },
  {
    url: '/api/user/:id',
    method: 'get',
    response: (req) => {
      const id = parseInt(req.params.id)
      return {
        code: 200,
        message: 'success',
        data: {
          id,
          name: `用户${id}`,
          age: 20 + Math.floor(Math.random() * 15),
          role: 'user'
        }
      }
    }
  }
] as MockMethod[]
```

### Mock 使用注意事项

1. **路径参数**: 使用 `:param` 格式定义动态路由参数
2. **请求参数**: 通过 `req.query`、`req.body`、`req.params` 获取
3. **响应格式**: 建议统一使用 `{ code, message, data }` 格式
4. **生产环境**: 确保在生产构建时禁用 Mock

## 入口文件配置

### main.ts 配置

```ts
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)
app.mount('#app')
```

### index.html 配置

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + TailwindCSS + Mock</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```

## 环境变量配置

### .env 文件

创建 `.env` 文件：

```env
VITE_APP_TITLE=My App
VITE_API_BASE_URL=http://localhost:5173
VITE_MOCK_ENABLE=true
```

### 在代码中使用环境变量

```ts
const title = import.meta.env.VITE_APP_TITLE
const apiUrl = import.meta.env.VITE_API_BASE_URL
```

### 环境变量命名规范

- 必须以 `VITE_` 前缀开头
- 推荐使用大写字母和下划线
- 敏感信息不应存储在前端环境变量中

## 常用命令

```bash
# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 预览生产版本
pnpm preview

# 查看构建分析
pnpm build --analyze
```

## 常见问题

### Q1: Mock 数据不生效？

**解决方案**:
1. 检查 `viteMockServe` 的 `enable` 参数是否为 `true`
2. 确认 Mock 文件路径配置正确
3. 检查控制台是否有相关错误日志

### Q2: TailwindCSS 样式不生效？

**解决方案**:
1. 确认 `@tailwindcss/vite` 插件已正确配置
2. 检查 `style.css` 是否正确引入
3. 确认 `tailwind.config.js` 的 `content` 配置包含正确的文件路径

### Q3: 路径别名 `@` 无法解析？

**解决方案**:
1. 确认 `vite.config.ts` 中已配置 `resolve.alias`
2. 安装 `@types/node` 以支持 `path` 模块
3. 在 `tsconfig.json` 中添加路径别名配置

## 总结

通过以上配置，您已完成了一个完整的 Vite + TailwindCSS + Mock 开发环境搭建。这套配置具有以下特点：

- **高性能**: Vite 的极速开发体验
- **现代化**: TailwindCSS 4.x 的原子化 CSS
- **便捷性**: 内置 Mock 数据支持
- **可扩展性**: 清晰的配置结构便于后续扩展

如需进一步优化，可以考虑添加：

- ESLint 和 Prettier 代码规范
- PostCSS 额外配置
- 生产环境优化配置