import { Toast } from '@/utils/Toast'
// import { fmtDate } from '@/utils/index'
import { $GET } from '@/utils/index'
// 图片懒加载
import LzImgInit from "@/scripts/LazyImg"

const NewsInit = async (data: any, render?: (data: any) => any, staticData?: any) => {
	const newsDOM = document.querySelector('.main-inner-content>.byt-tools-main>main.news-main')
	if (!newsDOM) return;
	try {
		let res = data;
		if (typeof data === 'string') {
			res = await $GET(api + '/60s');
			// console.log(res);
			// if (render && typeof render === 'function') {
			// 	res = render(res);
			// 	if (combine && Array.isArray(staticData)) {
			// 		res = [...res, ...staticData];
			// 	}
			// }
			let list = document.createElement('div');
			list.innerHTML = res.data.news.map((el:string, index:number) => `<p>${index + 1 + '. ' + el}</p>`).join('');
			// newsDOM.appendChild(list);
			// let img = `<img src="${res.data.cover}" />`
			newsDOM.innerHTML = list.innerHTML;
			// newsDOM.innerHTML = img + newsDOM.innerHTML;
			LzImgInit();
		}
		// newsDOM.innerHTML = res?.sort(() => Math.random() - 0.5).map((i: any) => `<article><a href="${i.link}" target="_blank" rel="noopener nofollow"><header><h2>${i.title}</h2></header><p class="byt-ellipsis line-2">${i.content}</p><footer><span><img src="https://icon.bqb.cool/?url=${i.link.split('//')[1].split('/')[0]}" /><em class="byt-ellipsis">${i.auther}</em></span><time>${fmtDate(i.date, false)}前</time></footer></a></article>`).join('');
		// 图片懒加载
	} catch {
		Toast('获取数据失败')
	}
}

// 新闻 RSS 初始化
import NEWS_DATA from "@/data/News";
const { api, data, render, combine } = NEWS_DATA as { api: string, data: any[], render?: (data: any) => any, combine?: boolean };;
export default () => NewsInit(api || data, render, combine ? data : []);
