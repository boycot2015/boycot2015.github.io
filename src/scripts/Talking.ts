
import vh from 'vh-plugin'
import { fmtDate } from '@/utils/index'
import { $GET } from '@/utils/index'
// 图片懒加载
import LzImgInit from "@/scripts/LazyImg";
import SITE_CONFIG from "@/config";
const { Avatar, Author } = SITE_CONFIG;
const TalkingInit = async (data: any, render?: (data: any) => any, staticData?: any) => {
  const talkingDOM = document.querySelector('.main-inner-content>.byt-tools-main>main.talking-main')
  if (!talkingDOM) return;
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
    talkingDOM.innerHTML = res.map((i: any) => `<article><header><img data-byt-lz-src="${Avatar}" /><p class="info"><span>${Author}</span><time>${fmtDate(i.date)}前</time></p></header><section class="main">${i.content}</section><footer>${i.tags.map((tag: any) => `<span>${tag}</span>`).join('')}</footer></article>`).join('');
    // 图片懒加载
    LzImgInit();
  } catch {
    vh.Toast('获取数据失败')
  }
}


// 动态说说初始化
import TALKING_DATA from "@/data/Talking";
const { api, data, render, combine } = TALKING_DATA as { api: string, data: any[], render?: (data: any) => any, combine?: boolean };;
export default () => TalkingInit(api || data, render, combine ? data : []);
