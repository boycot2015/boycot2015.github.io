import paopaoInit from '../../public/assets/js/paopao.js';
let headerMainHeight = 0;
import SITE_CONFIG from "@/config";
export default async () => {
  // 调用
  const target = document.querySelector('main.main > .header-main') || document.querySelector('main.main .banner-swiper');
  if (!target) return;
  console.log(target.clientHeight);
  setTimeout(() => {
    if (headerMainHeight == target.clientHeight && SITE_CONFIG.HomeBanner.type != 'swiper') return;
    headerMainHeight = target.clientHeight;
    paopaoInit(target, { radius: 10, density: 0.2, color: "rgba(255,255,255,.4)", clearOffset: 0.99 });
  }, 688);
}