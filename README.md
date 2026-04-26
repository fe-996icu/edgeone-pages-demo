# EdgeOne Pages Demo

一个基于 React + Vite 构建的现代化前端项目模板，集成了常用的页面布局和业务组件。

## 功能特性

- **多种布局系统**：支持 AdminLayout（管理后台布局）和 DashboardLayout（仪表盘布局）
- **丰富的页面组件**：
  - 管理后台：渠道管理、模型部署、模型管理、用户管理、兑换码管理
  - 业务页面：数据面板、绘图日志、用户Profile、Token管理、使用日志、钱包
  - 文档中心：API参考、常见问题、快速开始、SDK下载
  - 模型广场：聊天模型、Embedding模型、图像模型
- **完善的图标组件库**：内置常用图标组件
- **响应式设计**：适配不同屏幕尺寸

## 技术栈

- **框架**：React 19
- **构建工具**：Vite 8
- **路由**：React Router 7
- **样式**：CSS Modules / CSS

## 目录结构

```
src/
├── components/          # 公共组件
│   ├── icons/           # 图标组件
│   └── layout/          # 布局组件
├── pages/               # 页面组件
│   ├── About/           # 关于页面
│   ├── Admin/          # 管理后台
│   ├── Dashboard/      # 业务面板
│   ├── Docs/           # 文档中心
│   └── ModelSquare/     # 模型广场
├── App.jsx              # 应用入口
└── main.jsx             # 渲染入口
```

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

## 开发指南

### 添加新页面

1. 在 `src/pages/` 下创建页面组件
2. 在 `src/App.jsx` 中配置路由
3. 根据页面类型选择合适的布局组件（AdminLayout 或 DashboardLayout）

### 添加新组件

1. 公共组件放在 `src/components/` 目录下
2. 页面级组件放在对应页面目录下

## License

MIT
