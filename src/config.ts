export default {
  // 网站标题
  Title: 'boycot',
  // 网站图标
  Favicon: '/favicon.svg',
  // 网站地址
  Site: 'https://astro-blog.boycot.top',
  // 网站副标题
  Subtitle: '不曾与你分享的时间,我在进步.',
  // 网站描述
  Description: 'boycot博客 专注于前开发与相关技术的实战分享，涵盖Vue框架、Node.js、Serverless等，并涉及Node、Python、Linux、Docker等领域。同时，博客也分享作者的生活、音乐和旅行的热爱。',
  // 网站作者
  Author: 'boycot',
  // 作者头像
  Avatar: `https://boycot2015.github.io/picx-images-hosting/avatar/avatar.7pnvyzg2f.webp`,
  // 网站座右铭
  Motto: '越努力越幸运.',
  // Cover 网站缩略图
  Cover: '/assets/images/banner/072c12ec85d2d3b5.webp',
  // 网站侧边栏公告 (不填写即不开启)
  Tips: '<p>欢迎光临我的博客 🎉</p><p>这里会分享我的日常和学习中的收集、整理及总结，希望能对你有所帮助:) 💖</p>',
  // 首页打字机文案列表
  TypeWriteList: [
    '世上无难事，只怕有心人.',
    "越努力越幸运.",
  ],
  // 网站创建时间
  CreateTime: '2022-09-01',
  // 顶部 Banner 配置
  HomeBanner: {
    enable: true,
    // 首页高度
    HomeHeight: '38.88rem',
    // 其他页面高度
    PageHeight: '28.88rem',
    // 背景
    background: "url('https://bing.img.run/rand.php') no-repeat center 60%/cover",
    // background: "url('/assets/images/home-banner.webp') no-repeat center 60%/cover",
  },
  // 博客主题配置
  Theme: {
    // 颜色请用 16 进制颜色码
    // 主题颜色
    "--byt-main-color": "#126e82",
    // 字体颜色
    "--byt-font-color": "#34495e",
    // 侧边栏宽度
    "--byt-aside-width": "318px",
    // 全局圆角
    "--byt-main-radius": "0.28rem",
    // 主体内容宽度
    "--byt-main-max-width": "1458px",
  },
  // 导航栏 (新窗口打开 target: true)
  Navs: [
    // 仅支持 SVG 且 SVG 需放在 public/assets/images/svg/ 目录下，填入文件名即可 <不需要文件后缀名>（封装了 SVG 组件 为了极致压缩 SVG）
    // 建议使用 https://tabler.io/icons 直接下载 SVG
    { text: '友链', link: '/links', icon: 'Nav_friends' },
    { text: '圈子', link: '/friends', icon: 'Nav_rss' },
    { text: '动态', link: '/talking', icon: 'Nav_talking' },
    { text: '时间轴', link: '/archives', icon: 'Nav_archives' },
    { text: '留言', link: '/message', icon: 'Nav_message' },
    { text: '关于', link: '/about', icon: 'Nav_about' },
    { text: 'API', link: 'https://api-docs.boycot.top/', target: true, icon: 'Nav_link' },
  ],
  // 侧边栏个人网站
  WebSites: [
    // 仅支持 SVG 且 SVG 需放在 public/assets/images/svg/ 目录下，填入文件名即可 <不需要文件后缀名>（封装了 SVG 组件 为了极致压缩 SVG）
    // 建议使用 https://tabler.io/icons 直接下载 SVG
    { text: 'Github', link: 'https://github.com/boycot2015', icon: 'WebSite_github' },
    { text: 'boycotAPI', link: 'https://api.boycot.top', icon: 'WebSite_api' },
    { text: '每日热榜', link: 'https://news.boycot.top', icon: 'WebSite_hot' },
  ],
  // 侧边栏展示
  AsideShow: {
    // 是否展示个人网站
    WebSitesShow: true,
    // 是否展示分类
    CategoriesShow: false,
    // 是否展示标签
    TagsShow: false,
    // 是否展示推荐文章
    recommendArticleShow: true
  },
  // DNS预解析地址
  DNSOptimization: [
    'https://i0.wp.com',
    'https://cn.cravatar.com',
    'https://analytics.vvhan.com',
    'https://vh-api.4ce.cn',
    'https://registry.npmmirror.com',
    'https://pagead2.googlesyndication.com'
  ],
  // 博客音乐组件解析接口
  vhMusicApi: 'https://vh-api.4ce.cn/blog/meting',
  // 评论组件（只允许同时开启一个）
  Comment: {
    // Twikoo 评论
    Twikoo: {
      enable: true,
      // AhBbW9j4bNIOrrWR
      envId: 'https://comment.boycot.top'
    },
    // Waline 评论
    Waline: {
      enable: false,
      serverURL: 'https://ufdaemkl.lc-cn-n1-shared.com'
    }
  },
  // Analytics 统计
  Analytics: { enable: true, server: 'https://analytics.vvhan.com', siteId: 'Hello-boycotHexoBlog' },
  // Google 广告
  GoogleAds: {
    ad_Client: '', //ca-pub-xxxxxx
    // 侧边栏广告(不填不开启)
    asideAD_Slot: `<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-xxxxxx" data-ad-slot="xxxxxx" data-ad-format="auto" data-full-width-responsive="true"></ins>`,
    // 文章页广告(不填不开启)
    articleAD_Slot: `<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-xxxxxx" data-ad-slot="xxxxxx" data-ad-format="auto" data-full-width-responsive="true"></ins>`
  },
  // 文章内赞赏码
  Reward: {
    // 支付宝收款码
    AliPay: '',
    // 微信收款码
    WeChat: ''
  },
  // 访问网页 自动推送到搜索引擎
  SeoPush: {
    enable: false,
    serverApi: '',
    paramsName: 'url'
  },
  // 页面阻尼滚动速度
  ScrollSpeed: 500
}