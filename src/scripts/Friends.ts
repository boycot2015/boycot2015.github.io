
import vh from 'vh-plugin';
import { fmtDate } from '@/utils/index'
import { $GET } from '@/utils/index'
// 图片懒加载
import LzImgInit from "@/scripts/LazyImg";

const FriendsInit = async (data: any, render?: (data: any) => any, staticData?: any) => {
	const friendsDOM = document.querySelector('.main-inner-content>.byt-tools-main>main.friends-main')
	if (!friendsDOM) return;
	try {
		let res = data;
		if (typeof data === 'string') {
			res = await $GET(api);
			if (render && typeof render === 'function') {
				res = render(res);
				if (combine && Array.isArray(staticData)) {
					res = [...res, ...staticData];
				}
			}
		}
		friendsDOM.innerHTML = res?.sort(() => Math.random() - 0.5).map((i: any) => `<article><a href="${i.link}" target="_blank" rel="noopener nofollow"><header><h2>${i.title}</h2></header><p class="byt-ellipsis line-2">${i.content}</p><footer><span><img src="https://icon.bqb.cool/?url=${i.link.split('//')[1].split('/')[0]}" /><em class="byt-ellipsis">${i.auther}</em></span><time>${fmtDate(i.date, false)}前</time></footer></a></article>`).join('');
		// 图片懒加载
		LzImgInit();
	} catch {
		vh.Toast('获取数据失败')
	}
}

// 朋友圈 RSS 初始化
import FRIENDS_DATA from "@/data/Friends";
const { api, data, render, combine } = FRIENDS_DATA as { api: string, data: any[], render?: (data: any) => any, combine?: boolean };;
export default () => FriendsInit(api || data, render, combine ? data : []);
