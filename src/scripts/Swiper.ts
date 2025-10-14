import SITE_INFO from "@/config";
const { swiperOptions } = SITE_INFO.HomeBanner;
// Swiper 轮播插件加载
import { LoadScript, LoadStyle } from "@/utils/index";
declare const Swiper: any;
export default async () => {
  await LoadStyle("/assets/css/swiper.min.css");
  await LoadScript("/assets/js/swiper.min.js");
  new Swiper('.swiper', {
      ...swiperOptions,
    //   slidesPerView: 1,
    //   spaceBetween: 30,
    //   pagination: {
    //     clickable: true,
    //   },
  });
};