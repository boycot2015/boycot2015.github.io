import config from '@/config'
export default {
    // API 接口请求优先，数据格式保持和 data 一致
    api: config['60sApi'],
    // render: (data: any) => {
    //   return data.data[0]?.map((el:any) => ({
    //     "title": el.title,
    //     "auther": "boycot博客",
    //     "date": el.createTime,
    //     "link": `https://blog-new.boycot.top/list/${el.id || el.title}`,
    //     "content": el.content.replace(/<a>/g, '<p>')
    //   }))
    // },
    combine: true, // 合并数据，默认为 false
    // api 为空则使用 data 静态数据
    data: []
  }