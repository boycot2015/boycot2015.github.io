export default {
  // API 接口请求优先，数据格式保持和 data 一致
  api: '',
  render: (data: any) => data,
  combine: true, // 合并数据
  // api 为空则使用 data 静态数据
  data: [
    {
      "name": "boycot博客",
      "link": "https://www.boycot.top",
      "avatar": "https://www.boycot.top/favicon.svg",
      "descr": "越努力越幸运."
    },
    {
      "name": "boycot-nuxt博客",
      "link": "https://blog-new.boycot.top",
      "avatar": "https://blog-new.boycot.top/images/logo.png",
      "descr": "天生我材必有用，千金散尽还复来."
    },
    {
      "name": "vhan",
      "link": "https://www.vvhan.com",
      "avatar": "https://q1.qlogo.cn/g?b=qq&nk=1655466387&s=640",
      "descr": "不曾与你分享的时间,我在进步."
    },
    {
      "name": "boycotAPI",
      "link": "https://api.boycot.top",
      "avatar": "https://api.boycot.top/favicon.png",
      "descr": "免费Web API数据接口调用服务平台."
    },
    {
      "name": "bytMusic",
      "link": "https://music.boycot.top",
      "avatar": "https://music.boycot.top/favicon.svg",
      "descr": "bytMusic平台."
    }
  ]
}