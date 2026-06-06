# vite-wrap

> 下一代前端构建工具封装 — Vite 极速开发体验 Python/Node 封装

[![GitHub stars](https://img.shields.io/github/stars/vitejs/vite?style=flat&logo=github)](https://github.com/vitejs/vite)
[![npm version](https://img.shields.io/npm/v/vite.svg?logo=npm)](https://www.npmjs.com/package/vite)
[![Node.js compatibility](https://img.shields.io/node/v/vite.svg?logo=node)](https://nodejs.org)

[English](#english) · [中文](#中文)

---

## English

### What is vite-wrap?

`vite-wrap` is a Python/Node.js封装 wrapper for [Vite](https://github.com/vitejs/vite) — the next generation frontend tooling library with **81k+ GitHub stars**.

Vite (French for "quick", pronounced `/vy.dt/`) consists of two major parts:

- **Dev Server** — Rich feature enhancements over native ES modules, with instant server start and lightning-fast HMR (Hot Module Replacement)
- **Build Command** — Bundles code with [Rolldown](https://rolldown.rs), pre-configured for highly optimized static asset output

### Why vite-wrap?

| Feature | Description |
|---------|-------------|
| ⚡ Instant Start | Native ESM-based dev server, no bundling required |
| ?? Lightning HMR | Hot Module Replacement stays fast as app grows |
| ?? Optimized Build | Rolldown-powered production builds |
| ?? Plugin System | Universal plugin interface with full TypeScript support |
| ??? Rich Features | Out-of-the-box TypeScript, JSX, CSS, asset support |

### Installation

```bash
# npm
npm install vite-wrap

# yarn
yarn add vite-wrap

# pnpm
pnpm add vite-wrap
```

### Quick Start

```typescript
import { createVite } from 'vite-wrap';

// Create a basic Vite project
const vite = createVite({
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist'
  }
});

vite.start();
```

### API Reference

#### `createVite(options)`

Create and configure a Vite instance.

```typescript
interface ViteOptions {
  root?: string;           // Project root (default: '.')
  server?: ServerOptions;  // Dev server config
  build?: BuildOptions;    // Build config
  plugins?: Plugin[];      // Vite plugins
}
```

#### `vite.start()`

Start the development server.

```typescript
await vite.start();
// Dev server running at http://localhost:3000
```

#### `vite.build()`

Build for production.

```typescript
await vite.build();
// Output: dist/
```

### Demo Projects

See the [`demos/`](demos/) directory for complete examples:

- `demos/basic/` — Basic Vite setup
- `demos/react/` — React + Vite integration
- `demos/vue/` — Vue 3 + Vite integration

---

## 中文

### 什么是 vite-wrap？

`vite-wrap` 是 [Vite](https://github.com/vitejs/vite) 的 Python/Node.js 封装库。Vite 是下一代前端构建工具，GitHub 星标 **81,000+**。

Vite（法语"快速"之意）由两大部分组成：

- **开发服务器** — 基于原生 ES 模块，提供丰富的功能增强，包括即时启动和闪电般的 HMR（热模块替换）
- **构建命令** — 使用 [Rolldown](https://rolldown.rs) 打包代码，预配置为输出高度优化的静态资源

### 特性

| 特性 | 描述 |
|------|------|
| ⚡ 即时启动 | 基于原生 ESM 的开发服务器，无需打包 |
| ?? 闪电 HMR | 热模块替换随应用增长保持快速 |
| ?? 优化构建 | Rolldown 驱动的生产构建 |
| ?? 插件系统 | 通用插件接口，完整 TypeScript 支持 |
| ??? 丰富功能 | 开箱即用支持 TypeScript、JSX、CSS、资源文件 |

### 安装

```bash
# npm
npm install vite-wrap

# yarn
yarn add vite-wrap

# pnpm
pnpm add vite-wrap
```

### 快速开始

```typescript
import { createVite } from 'vite-wrap';

// 创建基础 Vite 项目
const vite = createVite({
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist'
  }
});

vite.start();
```

### API 参考

#### `createVite(options)`

创建并配置 Vite 实例。

```typescript
interface ViteOptions {
  root?: string;           // 项目根目录（默认: '.'）
  server?: ServerOptions;  // 开发服务器配置
  build?: BuildOptions;    // 构建配置
  plugins?: Plugin[];      // Vite 插件
}
```

#### `vite.start()`

启动开发服务器。

```typescript
await vite.start();
// 开发服务器运行于 http://localhost:3000
```

#### `vite.build()`

构建生产版本。

```typescript
await vite.build();
// 输出到 dist/
```

### 示例项目

查看 [`demos/`](demos/) 目录获取完整示例：

- `demos/basic/` — 基础 Vite 配置
- `demos/react/` — React + Vite 集成
- `demos/vue/` — Vue 3 + Vite 集成

---

## Links

- ?? [Vite 官方文档](https://vite.dev)
- ???? [Vite GitHub](https://github.com/vitejs/vite)
- ?? [Vite 插件列表](https://vite.dev/plugins)

---

<p align="center">
  Star ? <a href="https://github.com/vitejs/vite">vitejs/vite</a> if this wrapper is useful!
</p>