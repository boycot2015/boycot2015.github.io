import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import timezone from "dayjs/plugin/timezone.js";
import SITE_CONFIG from "@/config";
dayjs.extend(utc);
dayjs.extend(timezone);
// 设置中文语言环境
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn');
// 获取文章的描述
const getDescription = (post: any, num: number = 150) => (post.rendered ? post.rendered.html.replace(/<[^>]+>/g, "").replace(/\s+/g, "") : post.body.replace(/\n/g, "").replace(/#/g, "")).slice(0, num) || '暂无简介'
//处理时间
const fmtTime = (time: any, fmt: string = 'MMMM D, YYYY') => dayjs(time).utc().format(fmt)
// 处理日期
const fmtDate = (time: string | Date, hours_status = true) => {
  const now = dayjs();
  const past = dayjs(time);
  // 计算各时间单位，逐步扣除已计算的部分
  const years = now.diff(past, 'year');
  const adjustedPastYears = past.add(years, 'year');
  const months = now.diff(adjustedPastYears, 'month');
  const adjustedPastMonths = adjustedPastYears.add(months, 'month');
  const days = now.diff(adjustedPastMonths, 'day');
  const adjustedPastDays = adjustedPastMonths.add(days, 'day');
  const hours = now.diff(adjustedPastDays, 'hour');
  const adjustedPastHours = adjustedPastDays.add(hours, 'hour');
  const minutes = now.diff(adjustedPastHours, 'minute');
  const adjustedPastMinutes = adjustedPastHours.add(minutes, 'minute');
  const seconds = now.diff(adjustedPastMinutes, 'second');
  // 构建时间差描述，仅在没有更大单位时显示较小单位
  return [
    years && `${years}年`,
    months && `${months}月`,
    days && `${days}天`,
    (hours_status || days === 0) ? hours && !years && !months && `${hours}小时` : 0,
    hours_status ? minutes && !years && !months && !days && `${minutes}分` : '',
    hours_status ? seconds && !years && !months && !days && !hours && `${seconds}秒` : ''
  ].filter(Boolean).join('');
};

// 处理页码展示
const fmtPage = (page: string | undefined) => page?.replace(/\/|\./g, '') || null
// 加载外部脚本
const LoadScript = (
  src: string,
  attrs?: Array<{ k: string; v: string | boolean }>
): Promise<HTMLScriptElement> => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    // 添加自定义属性
    if (attrs?.length) {
      attrs.forEach(({ k, v }) => {
        // 处理不同值类型
        const value = typeof v === "boolean"
          ? (v ? "" : null)  // 布尔值处理为 HTML 标准属性格式
          : String(v);       // 其他类型转为字符串
        if (value !== null) script.setAttribute(k, value);
      });
    }
    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    document.head.appendChild(script);
  });
};
// 加载外部CSS
const LoadStyle = (href: string): Promise<HTMLLinkElement> => {
  return new Promise((resolve, reject) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = href;
    link.onload = () => resolve(link); // CSS 加载成功
    link.onerror = () => reject(new Error(`Failed to load CSS: ${href}`)); // CSS 加载失败
    document.head.appendChild(link); // 将 <link> 添加到文档中
  });
}

// 请求封装
const $GET = async (url: string, headers: Record<string, string> = {}): Promise<any> => {
  try {
    const res = await fetch(url, { method: "GET", headers: headers });
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    return res.json();
  } catch (error) {
    console.error("GET request failed:", error);
  }
};

const $POST = async (url: string, data: Record<string, any>, headers: Record<string, string> = {}): Promise<any> => {
  try {
    const res = await fetch(url, { method: "POST", headers: { ...headers, }, body: JSON.stringify(data), });
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    return res.json(); // 解析 JSON 数据
  } catch (error) {
    console.error("POST request failed:", error);
  }
};


const getIP = async (req?: Request): Promise<{ip: string, location: string, province?: string, city?: string, district?: string}> => {
  if (!SITE_CONFIG.AsideShow?.GreatShow) {
    return {
      ip: '127.0.0.1',
      location: '北京',
    }
  }
  let proxyUrl = `${SITE_CONFIG.Api.replace(/api-v2|v2/g, 'api')}/cors?url=`
  let body = await fetch(proxyUrl + 'https://www.ip.cn/').then(response => response.json()).then(data => data.data || data)
  let ticket = body.match(/\_ticket = ([^&]+)/)?.[1]?.split(';')[0].replace(/"/g, '')
  let url = 'https://my.ip.cn/json/?ticket=' + ticket
  // let url2 = 'https://api.ipify.org?format=json'
  // console.log(ticket, 'ticket');
  try {
    return fetch(url).then(response => response.json()).then(data => data.data || data)
    .then(data => {
      return {
        ip: data.query || data.ip,
        province: data?.province || data?.regionName,
        city: data?.city,
        district: data?.district,
        location: [data?.province || data?.regionName, data?.city, data?.district].filter(el => el).join(' '),
      };
    })
  } catch (error) {
    return {
      ip: '127.0.0.1',
      location: '北京',
    }
  }
}
const getWeather = async (location?: string, params?:string) => {
  return await $GET(`${SITE_CONFIG.Api}/weather/${params||''}?query=${location || '深圳'}`).then((res:any) => {
    return res.data
  }).catch(err => {
    console.log(err);
    return err
  })
}

const getBeijingTime = (format?: string) => {
  const beijing = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Shanghai',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
    if (format) {
      return dayjs(beijing).format(format || 'YYYY-MM-DD HH:mm:ss')
    }
    return beijing;
}
const getWeek = (time?: string) => {
  const week = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
  return week[new Date(time || getBeijingTime()).getDay()];
}
const getGreat = () => {
  let time = getBeijingTime().split(',')[1].trim()
  let clock = Number(time.split(':')[0])
  if (((clock >= 0 && clock < 10) || clock == 12) && time.includes('AM')) {
    return '早上好 吃早餐没啦 🥣'
  } else if ((clock >= 10 && time.includes('AM')) || (clock >= 12 && time.includes('PM'))) {
    return '中午好 吃午餐没啦！'
  }  else if (clock >= 6 && clock < 12 && time.includes('PM')) {
    return '晚上好 吃晚餐没啦！'
  }else {
    return '下午好 饮茶先啦！'
  }
}
const getScentence = async () => {
  return await fetch(`${SITE_CONFIG.HitokotoApi}?c=i&encode=json&r=${Math.random().toString(36).slice(-5)}`)
    .then(response => response.json()).then(data => data)
    .catch(err => {
      console.error("GET request failed:", err);
      return '未知一言';
    });
}
function debounce(fn: { apply: (arg0: any, arg1: any[]) => void; }, delay: number | undefined, immediate = false) {
  let timer: NodeJS.Timeout | null | undefined = null;
  let isInvoke = false;
  return function(this: any, ...args: any[]) {
    if(timer) clearTimeout(timer);
    if(immediate && !isInvoke) {
      fn.apply(this, args);
      isInvoke = true;
    } else {
      timer = setTimeout(() => {
        fn.apply(this, args);
        isInvoke = false;
      }, delay);
    }
  }
}
function throttle(fn: { apply: (arg0: any, arg1: IArguments) => void; }, delay: number | undefined) {
  let timer: NodeJS.Timeout | null = null;
  return function (this:any) {
    const context = this;
    const args = arguments;
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(context, args);
        timer = null;
      }, delay);
    }
  };
}
async function getSubway (station?: string) {
  let data = await $GET(`/api/subway?station=${station||''}&t=${Date.now()}`, {'Content-Type': 'application/json'}).catch(err => {
    console.error("GET request failed:", err);
    return [];
  });
  return data;
}
function svgToBase64(svg: string) {
  // return btoa(unescape(encodeURIComponent(svg)));
  return new Promise((resolve, reject) => {
    try {
      const svgString = svg || `
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
        <text x="10" y="50" font-size="20" fill="black">中文字符</text>
        </svg>`;
        const blob = new Blob([svgString], { type: "image/svg+xml" });
        const reader:any = new FileReader();
        reader.onloadend = function () {
          const base64Data = reader.result?.split(",")[1];
          const dataUri = `data:image/svg+xml;base64,${base64Data}`;
          // console.log(dataUri);
          resolve(dataUri);
        };
        reader.readAsDataURL(blob);
    } catch (error) {
      reject(error);
    }
  })
}
function svgToObjectURL(svg: string, {color = '#000', type = 'image/svg+xml'}: {color?: string, type?: string}) {
  return URL.createObjectURL(new Blob([svg.replace(/viewBox=\"0 0 30 30\"/g, 'viewBox=\"0 0 34 34\"').replace(/fill="currentColor"/g, `fill="${color}"`)], {type}));
}
export {
  $GET, $POST,
  getDescription, fmtTime, fmtDate,
  fmtPage, LoadScript, LoadStyle, getIP,
  getGreat, getScentence, debounce, throttle,
  getWeather, getWeek, getBeijingTime,
  getSubway, svgToBase64, svgToObjectURL
}
