# Game of Thrones - Character Family Tree

权力的游戏（Game of Thrones）人物家族关系交互式可视化图表。

## 功能特点

- 🎭 **角色展示**：包含主要角色的头像、家族信息和简介
- 🔗 **关系图谱**：可视化展示角色之间的父子、配偶和其他关系
- 🏠 **家族筛选**：按家族过滤显示角色节点
- 🖱️ **交互操作**：支持拖拽节点、缩放画布、点击查看详细信息
- ⛶ **全屏模式**：全屏查看关系图谱，获得更好的视觉体验

## 支持的家族

| 家族 | 颜色标识 |
|------|----------|
| 史塔克 Stark | 🟤 棕色 |
| 兰尼斯特 Lannister | 🟡 金色 |
| 坦格利安 Targaryen | 🔴 红色 |
| 拜拉席恩 Baratheon | 🔵 蓝色 |
| 徒利 Tully | 🟢 绿色 |
| 马泰尔 Martell | 🟠 土黄色 |
| 提利尔 Tyrell | 🟢 草绿色 |
<img width="1878" height="897" alt="image" src="https://github.com/user-attachments/assets/67f60a56-2f3e-41f7-9e4c-4fefdafac48b" />

## 使用方法

1. 打开 `got.html` 文件在浏览器中
2. 点击角色节点查看详细信息
3. 使用右上角按钮进行视图操作：
   - 🔄 **重置视图**：恢复初始视角
   - ➕ **放大** / ➖ **缩小**：调整缩放级别
   - 🏷️ **边标签**：切换关系类型标签显示
   - ⛶ **全屏**：全屏查看图谱

## 技术栈

- **D3.js v7**：力导向图渲染和交互
- **原生 JavaScript**：应用逻辑
- **CSS3**：样式和动画
- **HTML5**：页面结构

## 文件结构

```
├── got.html          # 主页面
├── got.css           # 样式表
├── got-app.js        # 应用逻辑
├── got-data.js       # 角色数据和关系数据
├── README.md         # 项目说明
└── assets/
    └── portraits/    # 角色头像图片
```

## 本地运行

无需任何构建工具，直接在浏览器中打开 `got.html` 即可运行。

或者使用本地服务器：

```bash
# Python
python -m http.server 8000

# Node.js (npx)
npx serve .
```

然后访问 `http://localhost:8000/got.html`

## 许可证

MIT License
