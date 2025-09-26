import vh from 'vh-plugin'
import { $GET } from '@/utils/index'
// 图片懒加载
import LzImgInit from "@/scripts/LazyImg";
// 渲染
const LinksInit = async (data: any, render?: (data: any) => any, staticData?: any) => {
  const linksDOM = document.querySelector('.main-inner-content>.byt-tools-main>main.links-main')
  if (!linksDOM) return;
  try {
    let res = data;
    if (typeof data === 'string') {
      res = await $GET(data);
      if (render && typeof render === 'function') {
        res = render(res);
        if (combine && Array.isArray(staticData)) {
          res = [...res, ...staticData];
        }
      }
    }
    linksDOM.innerHTML = res?.sort(() => Math.random() - 0.5).map((i: any) => `<a href="${i.link}" target="_blank"><img class="avatar" src="${i.avatar}" /><section class="link-info"><span>${i.name}</span><p class="byt-ellipsis line-2">${i.descr}</p></section></a>`).join('');
    // 图片懒加载
    LzImgInit();
  } catch {
    vh.Toast('获取数据失败')
  }
}

// 友情链接初始化
import LINKS_DATA from "@/data/Link";
const { api, data, render, combine } = LINKS_DATA as { api: string, data: any[], render?: (data: any) => any, combine?: boolean };
export default () => LinksInit(api || data, render, combine ? data : []);
