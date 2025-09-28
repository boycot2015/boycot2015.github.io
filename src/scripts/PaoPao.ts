import paopaoInit from '../../public/assets/js/paopao.js';
let headerMainHeight = 0;
export default async () => {
  // 调用
  const target = document.querySelector('main.main > .header-main');
  if (!target) return;
  setTimeout(() => {
    if (headerMainHeight == target.clientHeight) return;
    headerMainHeight = target.clientHeight;
    paopaoInit(target, { radius: 10, density: 0.2, color: "rgba(255,255,255,.4)", clearOffset: 0.99 });
  }, 688);
}