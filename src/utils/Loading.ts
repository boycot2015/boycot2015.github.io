/**
 * @description: 显示loading遮罩层
 * @param {number} opacity - 遮罩层透明度，默认值为0.6，取值范围为0到1之间的小数。
 * @param {string} color - loading颜色，默认值为#000000，可以是任何有效的CSS颜色值。
 * @return {void}
 */
// #616dd7
const _loadingInit = (status: boolean, opacity: number = 0.6, color: string = "#000000"): void => {
    // 形
    const styleTagsWithLoading = Array.from(document.querySelectorAll("style")).filter((i: any) => i.textContent.includes("byt-loading"));
    // 无形则有形
    if (styleTagsWithLoading.length < 1) {
      // eslint-disable-next-line prettier/prettier
      const LoadingStyle = `body>.byt-loading{position:fixed;left:0;top:0;box-sizing:border-box;width:100vw;height:100vh;display:flex;align-items:center;justify-content:center;transition:all .166s;z-index:999;pointer-events:none;opacity:0;overflow:hidden}body>.byt-loading.byt-loading-active{z-index:6666666666666666;pointer-events:auto;opacity:1}body>.byt-loading.byt-loading-active>.byt-loading-span-1,body>.byt-loading.byt-loading-active>.byt-loading-span-2,body>.byt-loading.byt-loading-active>.byt-loading-span-3{position:relative;width:5px;height:5px;margin:3px;border-radius:5px}body>.byt-loading.byt-loading-active>.byt-loading-span-1{-webkit-animation:scale .8s ease infinite;animation:byt_loading_animation .8s ease infinite}body>.byt-loading.byt-loading-active>.byt-loading-span-2{-webkit-animation:scale .8s ease .2s infinite;animation:byt_loading_animation .8s ease .2s infinite}body>.byt-loading.byt-loading-active>.byt-loading-span-3{-webkit-animation:scale .8s ease .4s infinite;animation:byt_loading_animation .8s ease .4s infinite}@-webkit-keyframes byt_loading_animation{50%{height:25px}0%{height:5px}}@keyframes byt_loading_animation{50%{height:25px}0%{height:5px}}`;
      const styleTag = document.querySelector("style") || document.createElement("style");
      styleTag.appendChild(document.createTextNode(LoadingStyle));
      document.head.appendChild(styleTag);
    }
    // 无则有
    let LoadingFillDom: any = document.querySelector(".byt-loading");
    let LoadingDom_1: any = document.querySelector(".byt-loading-span-1");
    let LoadingDom_2: any = document.querySelector(".byt-loading-span-2");
    let LoadingDom_3: any = document.querySelector(".byt-loading-span-3");
    if (!LoadingFillDom) {
      LoadingFillDom = document.createElement("section");
      LoadingFillDom.classList.add("byt-loading");
      LoadingDom_1 = document.createElement("span");
      LoadingDom_2 = document.createElement("span");
      LoadingDom_3 = document.createElement("span");
      [LoadingDom_1, LoadingDom_2, LoadingDom_3].forEach((i: any, idx: number) => {
        i.classList.add(`byt-loading-span-${idx + 1}`);
        LoadingFillDom.appendChild(i);
      });
      document.body.appendChild(LoadingFillDom);
    }
    // 显
    LoadingFillDom.style.background = `rgba(255,255,255,${opacity})`;
    [LoadingDom_1, LoadingDom_2, LoadingDom_3].forEach((i: any) => (i.style.background = color));
    // 存在即替换 终有无
    status ? LoadingFillDom.classList.add("byt-loading-active") : LoadingFillDom.classList.remove("byt-loading-active");
  };
  
  /**
   * @description: 显示loading遮罩层
   * @param {number} opacity - 遮罩层透明度，默认值为0.6，取值范围为0到1之间的小数。
   * @param {string} color - loading颜色，默认值为#000000，可以是任何有效的CSS颜色值。
   * @return {void}
   */
  const showLoading = (color?: string, opacity?: number): void => {
    _loadingInit(true, opacity, color);
  };
  
  /**
   * @description: 隐藏loading遮罩层
   * @return {void}
   */
  const hideLoading = (): void => {
    _loadingInit(false);
  };

const loadingService = (el = document.body) => {
    return {
        show ({precent = 0} = {}) {
            let loading = el.querySelector('.byt-space-loading')
            if (loading) {
                let per = loading.querySelector('.percent')
                if (per) {
                    per.innerHTML = `${precent}%`
                }
                return
            }
            loading = document.createElement('div') as HTMLDivElement
            loading.classList.add('byt-space-loading', '!h-[100vh]', 'w-full', 'absolute', 'backdrop-blur-sm')
            loading.appendChild(document.createElement('span'))
            loading.appendChild(document.createElement('span'))
            loading.appendChild(document.createElement('span'))
            if (precent !== undefined) {
              let per = document.createElement('div')
              per.classList.add('text-[var(--byt-main-color)]', 'percent','ml-2')
              loading.appendChild(per)
            }
            el.appendChild(loading)
        },
        hide () {
            el.querySelector('.byt-space-loading')?.remove()
        }
    }
}
  
  // export { showLoading, hideLoading };
export default loadingService;
  