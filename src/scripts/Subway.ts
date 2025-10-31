import { getSubway, getBeijingTime } from '@/utils/index';
export default async function GET() {
//   if (window.location.pathname.includes('/article/')) return;
  const data = await getSubway();
  const time = getBeijingTime('YYYY-MM-DD HH:mm');
  let hours = new Date(time).getHours();
  const destination = data.data.destination;
  const lines = Object.keys(destination);
  let index = Math.floor(Math.random() * (lines.length));
  const destinationIndex = Math.floor(Math.random() * ((lines[index] || lines[1]).length));
  const convert = (el:any) => ({line: el.XLMC, name: el.ZDMZ, id: el.ID, desc: el.ZDJS});
  let current = data.data.subways.filter((el:any) => el.XLMC == (index+1)).map(convert);
  let currentIndex = Math.floor(Math.random() * (current.length - 1));
  // console.log({
  //     subways: current,
  //     destination: destination[index+1][destinationIndex],
  //     line: index+1,
  //     nextStation: current[currentIndex],
  // }, 'subways');
    // console.log(hours, 'hours');
  let subways = {
    subways: data.data.subways.map(convert),
    current,
    destination: destination[index+1][destinationIndex],
    line: index+1,
    nextStation: current[currentIndex],
}
  let subway:any = document.querySelector('#subway');
  let timeDOM:any = document.querySelector('#bj-time');
  timeDOM.textContent = time;
  subway.content = `欢迎乘坐${subways?.line || '5'}号线，本次列车开往${subways?.destination || '黄贝岭'}方向，下一站${subways?.nextStation?.name || '深圳北站'}，请要下车的乘客带好您的行李物品准备下车；文明出行，礼让为先`;
  if (hours > 23 && hours <= 24) {
    subway.content = `开往${subways?.destination || '黄贝岭'}方向的末班车已经开出，请乘客留意发车时间，合理安排出行`;
  } else if (hours < 6) {
    subway.content = `开往${subways?.destination || '黄贝岭'}方向的列车还未开出，请乘客留意发车时间，合理安排出行`;
  };
  return subways;
}

