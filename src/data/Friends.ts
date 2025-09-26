export default {
  // API 接口请求优先，数据格式保持和 data 一致
  api: 'https://blog-api.boycot.top/article',
  render: (data: any) => {
    return data.data[0]?.map((el:any) => ({
      "title": el.title,
      "auther": "boycot博客",
      "date": el.createTime,
      "link": `https://blog-new.boycot.top/list/${el.id || el.title}`,
      "content": el.content.replace(/<a>/g, '<p>')
    }))
  },
  combine: true, // 合并数据，默认为 false
  // api 为空则使用 data 静态数据
  data: [
    {
      "title": "Astro主题-优雅的vhAstro-Theme【使用文档】",
      "auther": ".𝙃𝙖𝙣",
      "date": "2025-03-02",
      "link": "https://www.vvhan.com/article/astro-theme-vhastro-theme",
      "content": "🍊 我以 Astro 为基础开发的 vhAstro-Theme 主题模版，是一款优雅的响应式博客主题，它具有简洁的设计、流畅的动画和页面过渡。🍇 Astro 活跃的社区支持、广泛的现代框架兼容性、高效的性能优化、优秀的开发体验以及原生 SEO 优化，支持 Markdown/MDX 编写内容，且允许开发者混合使用 React、Vue、Svelte 等主流框架的组件，是我心目中最适合构建博客这样的以内容驱动的网站的 Web 框架。🥝 从 Z-Blog 到 Emlog，从 Typecho 到 Hexo，从动态博客到静态博客，作为一个前端，我深入了解了多种 SSG 工具，如 Hexo、Vitepress、Hugo 等，并最终锁定了 Astro 作为重构博客的选择"
    },
    {
      "title": "astrojs使用epubjs解析epub文件",
      "auther": "boycot博客",
      "date": "2025-2-25",
      "link": "https://www.boycot.top/posts/astrojs使用epubjs解析epub文件/",
      "content": "使用 epub.js 解析 EPUB 文件在 JavaScript 环境下可以非常方便，尤其是结合像 Astro.js 这样的现代框架。以下是一个简单的指导，帮助你在 Astro.js 项目中使用 epub.js 解析和展示 EPUB 文件。"
    },
    {
      "title": "astro集成aplayer播放器",
      "auther": "boycot博客",
      "date": "2025-02-10",
      "link": "https://www.boycot.top/posts/astro集成aplayer播放器",
      "content": "本文详细阐述了在Astro框架中集成aplayer音乐播放器的完整流程。通过npm安装插件后创建动态播放器组件，引入APlayer并处理自动播放逻辑。针对Astro默认路由刷新问题，通过配置ClientRouter组件和transition:persist 指令实现类SPA的页面导航效果。最后特别给出替换meeting-js为meting API的解决方案，包含自动获取播放列表数据、浏览器自动播放策略兼容处理等关键技术细节。"
    },
    {
      "title": "在mac电脑上新建ssh-key的详细步骤",
      "auther": "boycot博客",
      "date": "2025-02-06",
      "link": "https://www.boycot.top/posts/在mac电脑上新建ssh-key的详细步骤",
      "content": "SSH（Secure Shell）是一种加密的网络传输协议，允许用户安全地登录到远程服务器并执行命令。而SSH key则是一对用于身份验证的密钥，包括公钥和私钥。在Mac电脑上新建SSH key是保障远程连接安全的重要步骤。本文将详细介绍如何在Mac上生成SSH密钥对，并将其用于远程连接。"
    }
  ]
}