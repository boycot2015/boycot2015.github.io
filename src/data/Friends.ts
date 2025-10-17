export default {
  // API 接口请求优先，数据格式保持和 data 一致
  // api: 'https://blog-api.boycot.top/article',
  api:'/api/rss',
  render: (data: any) => {
    return data.data?.map((el:any) => ({
      "title": el.title,
      "auther": el.auther || "boycot博客",
      "date": el.createTime || el.date,
      "avatar": el.avatar,
      "link": el.link || `https://blog-new.boycot.top/list/${el.id || el.title}`,
      "content": el.content?.replace(/<a>/g, '<p>') || ""
    }))
  },
  combine: false, // 合并数据，默认为 false
  // api 为空则使用 data 静态数据
  data: []
}