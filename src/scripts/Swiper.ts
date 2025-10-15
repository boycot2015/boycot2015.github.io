import SITE_INFO from "@/config";
const { swiperOptions } = SITE_INFO.HomeBanner;
// Swiper 轮播插件加载
import { LoadScript, LoadStyle } from "@/utils/index";
declare const Swiper: any;
export default async () => {
  if (!document.querySelector('.swiper')) return
  await LoadStyle("/assets/css/swiper.min.css");
  await LoadScript("/assets/js/swiper.min.js");
  const mySwiper = new Swiper('.swiper', swiperOptions);
  //鼠标移出隐藏按钮，移入显示按钮
  mySwiper.el.onmouseover = function() {
    mySwiper.navigation.nextEl.classList.remove('!hidden');
    mySwiper.navigation.prevEl.classList.remove('!hidden');
  }
  mySwiper.el.onmouseout = function() {
    mySwiper.navigation.nextEl.classList.add('!hidden');
    mySwiper.navigation.prevEl.classList.add('!hidden');
  }
};