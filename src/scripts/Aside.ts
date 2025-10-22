
import { getIP, getWeather, getScentence } from "@/utils/index";
// import SITE_CONFIG from "@/config";
export default async () => {
    let info = await getIP();
    let locationEl = document.querySelector(".byt-aside .location");
    if (locationEl) {
        locationEl.textContent = info.location;
        }
    let ipTextEl = document.querySelector(".byt-aside .ip-text");
    if (ipTextEl) {
        ipTextEl.textContent = info.ip;
    }
    let repeatArr = ['南山']
    let weather = await getWeather(repeatArr.includes(info.district || '') ? info.city : info.district || info.city);
    // let weather = await getWeather('于都');
    let weatherEl = document.querySelector(".byt-aside .weather");
    // console.log(weather, info, 'weather');
    if (weatherEl) {
        weatherEl.innerHTML = `<span>${weather?.air_quality?.aqi || '-'}&nbsp;${weather?.air_quality?.quality || '-'}</span>
            <span>${weather?.location?.county || weather?.location?.city || '-'}&nbsp;${weather?.weather?.condition || '-'}&nbsp;${weather?.weather?.temp || '25'}℃ ${!weather || ''}</span>
            <span class="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path fill="currentColor" d="M11.5 20q-1.25 0-2.125-.875T8.5 17h2q0 .425.288.713T11.5 18t.713-.288T12.5 17t-.288-.712T11.5 16H2v-2h9.5q1.25 0 2.125.875T14.5 17t-.875 2.125T11.5 20M2 10V8h13.5q.65 0 1.075-.425T17 6.5t-.425-1.075T15.5 5t-1.075.425T14 6.5h-2q0-1.475 1.013-2.488T15.5 3t2.488 1.013T19 6.5t-1.012 2.488T15.5 10zm16.5 8v-2q.65 0 1.075-.425T20 14.5t-.425-1.075T18.5 13H2v-2h16.5q1.475 0 2.488 1.013T22 14.5t-1.012 2.488T18.5 18"/></svg>
                ${weather?.weather?.wind_direction || '-'}
            </span>`;
    }
    let scentence = await getScentence();
    let scentenceEl = document.querySelector(".byt-aside .scentence .footer");
    if (scentenceEl) {
        scentenceEl.innerHTML = `<p class="line-clamp-2 px-2 text-justify">${scentence.hitokoto}</p>
                    <div class="footer w-full flex justify-between px-2 pb-2 mt-2">
                        <span></span>
                        <div class="right flex items-center gap-1 text-xs">
                            <span>【${scentence.from}】${scentence.from_who ? `— ${scentence.from_who}` : ''}</span>
                        </div>
                    </div>`;
    }
}