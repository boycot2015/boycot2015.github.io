import { toggleShow } from '@/scripts/Subway'
export default async () => {
    // 初始化菜单显示
    const menu:any = document.querySelector('b-menu');
	menu.classList.remove('hidden');
    toggleShow()
}