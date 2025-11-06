import { getSubway, getBeijingTime } from '@/utils/index';
export default async function GET() {
    const data = await getSubway();
    const time = getBeijingTime('YYYY-MM-DD HH:mm');
    let current = data.data.subways[Math.floor(Math.random() * (data.data.subways.length - 1))];
    let currentIndex = Math.floor(Math.random() * (current.subways.length - 1));
    const nextStations = current.subways.filter((el:any) => !current.destination.includes(el.ZDMZ));
    currentIndex = currentIndex == 0 ? 1 : currentIndex == nextStations.length - 1 ? nextStations.length - 2 : currentIndex;
    let subways = {
        subways: current.subways,
        current,
        time: current.subways.find((el:any) => el?.time)?.time || time,
        destination: current.destination[Math.floor(Math.random() * current.destination.length)],
        line: current.line,
        nextStation: current.subways[currentIndex],
    }
    let lastTime = new Date(new Date(time).setHours(subways?.time.LAST_SUBWAY_TIME?.split(':')[0], subways?.time.LAST_SUBWAY_TIME?.split(':')[1], 0, 0)).getTime();
    let firstTime = new Date(new Date(time).setHours(subways?.time.FIRST_SUBWAY_TIME?.split(':')[0], subways?.time.FIRST_SUBWAY_TIME?.split(':')[1], 0, 0)).getTime();
    // console.log(subways, 'current');
    let subway:any = document.querySelector('#subway');
    let timeDOM:any = document.querySelector('#bj-time');
    timeDOM.textContent = time;
    let nextText = `下一站${subways?.nextStation?.ZDMZ || '深圳北站'}`
    let transferText = `，乘客可换乘${subways?.nextStation?.transfer?.join('、')}号线`
    const text = `${nextText}${subways?.nextStation?.transfer?.length ? transferText : ''}`;
    subway.content = `欢迎乘坐深圳地铁${subways?.line || '5'}号线，本次列车开往${subways?.destination || '黄贝岭'}方向；${text}，请要下车的乘客带好您的行李物品准备下车；文明出行，礼让为先！`;
    // console.log(subways, 'subway');
    
    if (lastTime < new Date(time).getTime() - subways?.time.INTERVAL.substring(0, 1) * 60 * 1000) {
      subway.content = `开往${subways?.destination || '黄贝岭'}方向的末班车即将开出，请乘客留意发车时间，合理安排出行`;
    } else if (lastTime < new Date().getTime()) {
      subway.content = `开往${subways?.destination || '黄贝岭'}方向的末班车已经开出，请乘客留意发车时间，合理安排出行`;
    } else if (firstTime < new Date().setHours(6, 0, 0, 0)) {
      subway.content = `开往${subways?.destination || '黄贝岭'}方向的列车还未开出，请乘客留意发车时间，合理安排出行`;
    };
    document.querySelector('#subway')?.addEventListener('click', (e:any) => {
      location.href = '/subway#subway-' + current.line
    })
    return subways;
}

