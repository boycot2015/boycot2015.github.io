import { getSubway, getBeijingTime } from '@/utils/index';
export default async function GET() {
//   if (window.location.pathname.includes('/article/')) return;
  const subways = await getSubway();
  const time = getBeijingTime();
  let hours = new Date(time).getHours();
//   console.log(hours, 'hours');
  let subway:any = document.querySelector('#subway');
  subway.content = `欢迎乘坐${subways?.data?.line || '5'}号线，本次列车开往${subways?.data?.destination || '黄贝岭'}方向，下一站${subways?.data?.nextStation?.name || '深圳北站'}，请要下车的乘客带好您的行李物品准备下车；文明出行，礼让为先`;
  if (hours > 23 && hours <= 24) {
    subway.content = `开往${subways?.data?.destination || '黄贝岭'}方向的末班车已经开出，请乘客留意发车时间，合理安排出行`;
  } else if (hours < 6) {
    subway.content = `开往${subways?.data?.destination || '黄贝岭'}方向的列车还未开出，请乘客留意发车时间，合理安排出行`;
  };
  return subways;
}

