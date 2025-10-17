export default {
  // API 接口请求优先，数据格式保持和 data 一致
  api: '',
  render: (data: any) => data,
  combine: true, // 合并数据
  // api 为空则使用 data 静态数据 
  // 注意：图片请用 byt-img-flex 类包裹
  data: [
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