import { getCollection } from "astro:content";
import { getDescription } from "@/utils/index";
const posts = (await getCollection("blog")).filter(i => !i.data.hide && !i.data.draft).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
// 获取文章分类
const getCategories = () => {
  const categoriesList = posts.filter(i => i.data.categories).reduce((acc: any, i: any) => {
    acc[i.data.categories] = (acc[i.data.categories] || 0) + 1;
    return acc;
  }, {});
  return Object.entries(categoriesList).map(([title, count]) => ({ title, count }));
}

// 获取统计数据
const getCountInfo = () => {
  return { ArticleCount: posts.length, CategoryCount: getCategories().length, TagCount: getTags().length }
}

// 获取文章标签
const getTags = () => {
  const tagList = posts.filter(i => i.data.tags).reduce((acc: any, i: any) => {
    (i.data.tags || []).forEach((tag: string) => {
      acc[tag] = (acc[tag] || 0) + 1;
    });
    return acc;
  }, {});
  return Object.entries(tagList).sort((a: any, b: any) => b[1] - a[1]);
}

// 获取推荐文章 (给文章添加 recommend: true && hide: false && draft: false 字段)
const getRecommendArticles = () => {
  const recommendList = posts.filter(i => i.data.recommend);
  const convert = (item: typeof posts[0]):{title: string, date: Date, id: string|number, img?: string, url?: string, target?: string, desc?: string} => ({ title: item.data.title, date: item.data.date, id: item.data.id || item.data.title, img: item.data.cover, desc: getDescription(item)});
  return (recommendList.length ? recommendList : posts.slice(0, 6)).filter(i => !i.data.hide && !i.data.draft).map(convert)
};

export { getCategories, getTags, getRecommendArticles, getCountInfo };