export default {
  // API 接口请求优先，数据格式保持和 data 一致
  api: '',
  render: (data: any) => data,
  combine: true, // 合并数据
  // api 为空则使用 data 静态数据 
  // 注意：图片请用 byt-img-flex 类包裹
  data: [
    {
      "date": "2025-11-06 14:38:18",
      "tags": [
        "地铁",
        "wcui"
      ],
      "content": `1. 引入wcui组件库，优化页面交互。<br/>2. 新增地铁查询功能，用户可以查询深圳地铁线路和站点。`
    },
    {
      "date": "2025-10-22 15:43:18",
      "tags": [
        "优化构建配置",
        "插件集成"
      ],
      "content": `📦 build(astro): 优化构建配置和插件集成<br/>
                  - 添加 rollup-plugin-visualizer 插件以生成构建分析图<br/>
                  - 配置 manualChunks 以优化打包策略<br/>
                  - 调整 tailwindcss 插件配置<br/>
                ♻️ refactor(scripts): 优化脚本和配置<br/>
                  - 调整获取天气数据的逻辑<br/>
                  - 更新天气显示逻辑<br/>
                🐛 fix(Layout): 修复布局中的冗余代码<br/>
                  - 移除多余的加载动画代码<br/>`
    },
    {
      "date": "2025-10-17 18:54:18",
      "tags": [
        "电子书",
        "圈子"
      ],
      "content": "新增功能实现！<br/>1. ✨新增电子书。<br/>2. ✨圈子使用api获取数据。"
    },
    {
      "date": "2025-10-16 18:29:18",
      "tags": [
        "锚点",
        "珊格视觉"
      ],
      "content": "新增功能实现！<br/>1. ✨新增文章锚点、目录。<br/>2. ✨header滚动隐藏并新增珊格视觉效果。"
    },
    {
      "date": "2025-10-14 18:33:18",
      "tags": [
        "优化",
        "博客"
      ],
      "content": "项目优化！<br/>1. ✨首页支持轮播图。<br/>2. ✨markdown 新增 light 和 dark 主题。<br/>3.🐛 fix(getIP): 添加 IP 获取失败时的默认值"
    },
    {
      "date": "2025-9-25 18:33:18",
      "tags": [
        "项目移植",
        "博客"
      ],
      "content": "项目移植完成，博客上线！<br/>1. 使用 Astro 框架构建，部署在 Vercel 平台。<br/>2. 使用 vhAstro-Theme UI，进行深度定制。"
    },
    {
      "date": "2024-10-05 16:16:06",
      "tags": [
        "日常"
      ],
      "content": "记录第一条说说"
    }
  ]
}