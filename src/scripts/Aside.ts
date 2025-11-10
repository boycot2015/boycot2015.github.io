
import { getIP, getWeather, getWeek, getScentence, svgToObjectURL } from "@/utils/index";
import { weather_icons, weather_echarts_options } from "@/utils/weather";
import EchartsInit from "@/scripts/Echarts";
import SITE_CONFIG from "@/config";
// 图片懒加载
// import LzImgInit from "@/scripts/LazyImg";
let timer:any = null;
export default async () => {
    clearTimeout(timer);
    let info = await getIP();
    let locationEl = document.querySelector(".byt-aside .location");
    if (locationEl) {
        locationEl.textContent = info.location;
    }
    let ipTextEl = document.querySelector(".byt-aside .ip-text");
    if (ipTextEl) {
        ipTextEl.textContent = info.ip;
    }
    let scentence = await getScentence();
    let scentenceEl = document.querySelector(".byt-aside .scentence .footer");
    if (scentenceEl) {
        scentenceEl.innerHTML = `<p class="line-clamp-2 px-2 text-justify">${scentence.hitokoto}</p>
        <div class="footer w-full flex justify-between px-2 pb-2 mt-2">
            <span></span>
            <div class="right flex items-center gap-1 text-sm">
                <span>【${scentence.from}】${scentence.from_who ? `— ${scentence.from_who}` : ''}</span>
            </div>
        </div>`;
    }
    const isMobile = window.innerWidth < 768;
    let repeatArr = ['南山']
    let weatherEl = document.querySelector(".byt-aside .weather");
    let weather = await getWeather(repeatArr.includes(info.district || '') ? info.city : info.district || info.city);
    let forecast = await getWeather(repeatArr.includes(info.district || '') ? info.city : info.district || info.city, 'forecast');
    // console.log(weather, forecast, 'weather');
    let html = `<div class="flex flex-col w-full">`
    let dailyShow = SITE_CONFIG.AsideShow.BlogsignageShow.weather.dailyShow || isMobile;
    let lifeShow = SITE_CONFIG.AsideShow.BlogsignageShow.weather.lifeShow || isMobile;
    let hoursShow = SITE_CONFIG.AsideShow.BlogsignageShow.weather.hoursShow || isMobile;
    let showMore = hoursShow || dailyShow || lifeShow;
    if (weatherEl) {
        const textcolor = weather?.air_quality?.aqi < 100 ? '!text-[var(--byt-success)]' : '!text-[var(--byt-warning)]'
        html += `<div class="w-full pb-2 ${showMore ? 'border-b' : ''} border-[var(--byt-font-16)]">
                <div class="flex items-center justify-between gap-1 w-full">
                    <span class="text-[var(--byt-font-color)] ${textcolor}">${weather?.air_quality?.aqi || '-'}&nbsp;${weather?.air_quality?.quality || '-'}</span>
                    <span>
                        <span class="flex items-center justify-between gap-1">
                        ${weather?.location?.county || weather?.location?.city || '-'}&nbsp;
                         <span class="text-[var(--byt-main-color)] !text-2xl">${weather_icons[weather?.weather?.condition as keyof typeof weather_icons] || ''}</span>
                        ${weather?.weather?.temperature || '25'}℃ ${!weather || ''}</span>
                    </span>
                    <span class="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path fill="currentColor" d="M11.5 20q-1.25 0-2.125-.875T8.5 17h2q0 .425.288.713T11.5 18t.713-.288T12.5 17t-.288-.712T11.5 16H2v-2h9.5q1.25 0 2.125.875T14.5 17t-.875 2.125T11.5 20M2 10V8h13.5q.65 0 1.075-.425T17 6.5t-.425-1.075T15.5 5t-1.075.425T14 6.5h-2q0-1.475 1.013-2.488T15.5 3t2.488 1.013T19 6.5t-1.012 2.488T15.5 10zm16.5 8v-2q.65 0 1.075-.425T20 14.5t-.425-1.075T18.5 13H2v-2h16.5q1.475 0 2.488 1.013T22 14.5t-1.012 2.488T18.5 18"/></svg>
                        ${weather?.weather?.wind_direction || '-'}&nbsp;
                    </span>
                </div>
                <div class="mt-2">
                    <b-marquee pause-when-hover id="subway" fixed duration="40" content=今天白天到夜间${weather?.weather?.condition}，${weather?.weather?.wind_direction}${weather?.weather?.wind_power}级，${weather?.life_indices[6]?.description}></b-marquee>
                </div>
            </div>`;
        if (hoursShow) {
            html += `<h3 class="text-md font-bold text-[var(--byt-font-88)] leading-1 border-l-4 pl-2 border-[var(--byt-main-color)] !my-3 flex justify-between items-center">
                <span class="text-[var(--byt-font-color)]">24小时预报</span>
                <span class="text-xs text-[var(--byt-font-88)] flex items-center gap-2">
                <span class="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><!-- Icon from Bootstrap Icons by The Bootstrap Authors - https://github.com/twbs/icons/blob/main/LICENSE.md --><path fill="currentColor" d="M7.646 1.146a.5.5 0 0 1 .708 0l1.5 1.5a.5.5 0 0 1-.708.708L8.5 2.707V4.5a.5.5 0 0 1-1 0V2.707l-.646.647a.5.5 0 1 1-.708-.708zM2.343 4.343a.5.5 0 0 1 .707 0l1.414 1.414a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707m11.314 0a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0M8 7a3 3 0 0 1 2.599 4.5H5.4A3 3 0 0 1 8 7m3.71 4.5a4 4 0 1 0-7.418 0H.499a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10m13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/></svg>
                    ${weather?.sunrise?.sunrise_desc}
                </span>
                <span class="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><!-- Icon from Bootstrap Icons by The Bootstrap Authors - https://github.com/twbs/icons/blob/main/LICENSE.md --><path fill="currentColor" d="M7.646 4.854a.5.5 0 0 0 .708 0l1.5-1.5a.5.5 0 0 0-.708-.708l-.646.647V1.5a.5.5 0 0 0-1 0v1.793l-.646-.647a.5.5 0 1 0-.708.708zm-5.303-.51a.5.5 0 0 1 .707 0l1.414 1.413a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707zm11.314 0a.5.5 0 0 1 0 .706l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM8 7a3 3 0 0 1 2.599 4.5H5.4A3 3 0 0 1 8 7m3.71 4.5a4 4 0 1 0-7.418 0H.499a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10m13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/></svg>
                    ${weather?.sunrise?.sunset_desc}
                </span>
                </span>
            </h3>
            <div class="grid grid-cols-4 w-full max-h-[180px] overflow-y-auto overflow-x-auto rounded-md border border-[var(--byt-font-16)] overflow-hidden">
            ${
                forecast?.hourly_forecast?.map((item: { datetime: string; condition: any; temperature: any; }) => {
                   return `<div class="flex flex-col items-center justify-center gap-1 border-r nth-[4n]:border-r-0 mt-[-1px] border-t border-[var(--byt-font-16)] p-2">
                    <span class="text-xs text-[var(--byt-font-88)] line-clamp-1 max-w-[5rem]">${item.datetime.split(' ')[1]}</span>
                    <span class="w-8 h-8">${weather_icons[item.condition as keyof typeof weather_icons] || ''}</span>
                    <span class="text-sm line-clamp-1">${item.temperature}℃</span>
                   </div>`
               }).join('')
            }
            </div>`
        }
        if (dailyShow) {
            html += `<h3 class="text-md font-bold text-[var(--byt-font-88)] leading-1 border-l-4 pl-2 border-[var(--byt-main-color)] !my-3 flex justify-between items-center">
                <span class="text-[var(--byt-font-color)]">7日天气预报</span>
                <span class="text-xs text-[var(--byt-font-88)] flex items-center gap-2">
                <span class="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><path fill="currentColor" d="M17.576 10.48a.75.75 0 0 0-1.152-.96l-1.797 2.156c-.37.445-.599.716-.786.885a.8.8 0 0 1-.163.122l-.011.005l-.011-.005a.8.8 0 0 1-.164-.122c-.187-.17-.415-.44-.786-.885l-.292-.35c-.328-.395-.625-.75-.901-1c-.301-.272-.68-.514-1.18-.514s-.878.242-1.18.514c-.276.25-.572.605-.9 1l-1.83 2.194a.75.75 0 1 0 1.153.96l1.797-2.156c.37-.445.599-.716.786-.885a.8.8 0 0 1 .163-.122l.011-.005l.011.005a.8.8 0 0 1 .164.122c.187.17.415.44.786.885l.292.35c.329.395.625.75.901 1c.301.272.68.514 1.18.514s.878-.242 1.18-.514c.276-.25.572-.605.9-1z"/><path fill="currentColor" fill-rule="evenodd" d="M11.943 1.25c-2.309 0-4.118 0-5.53.19c-1.444.194-2.584.6-3.479 1.494c-.895.895-1.3 2.035-1.494 3.48c-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53c.194 1.444.6 2.584 1.494 3.479c.895.895 2.035 1.3 3.48 1.494c1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19c1.444-.194 2.584-.6 3.479-1.494c.895-.895 1.3-2.035 1.494-3.48c.19-1.411.19-3.22.19-5.529v-.114c0-2.309 0-4.118-.19-5.53c-.194-1.444-.6-2.584-1.494-3.479c-.895-.895-2.035-1.3-3.48-1.494c-1.411-.19-3.22-.19-5.529-.19zM3.995 3.995c.57-.57 1.34-.897 2.619-1.069c1.3-.174 3.008-.176 5.386-.176s4.086.002 5.386.176c1.279.172 2.05.5 2.62 1.069c.569.57.896 1.34 1.068 2.619c.174 1.3.176 3.008.176 5.386s-.002 4.086-.176 5.386c-.172 1.279-.5 2.05-1.069 2.62c-.57.569-1.34.896-2.619 1.068c-1.3.174-3.008.176-5.386.176s-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069c-.569-.57-.896-1.34-1.068-2.619c-.174-1.3-.176-3.008-.176-5.386s.002-4.086.176-5.386c.172-1.279.5-2.05 1.069-2.62" clip-rule="evenodd"/></svg>
                </span>
                </span>
            </h3>
            <div class="w-full border border-[var(--byt-font-16)] overflow-hidden overflow-x-auto rounded-md">
                <div id="weather-echarts" class="w-[560px] md:w-full h-[260px]">
                </div>
            </div>`
        }
        if (lifeShow) {
            html += `
            <h3 class="text-md font-bold text-[var(--byt-font-color)] leading-1 border-l-4 pl-2 border-[var(--byt-main-color)] flex justify-between items-center !my-3">
                <span>生活指数</span>
                <span class="!text-[var(--byt-font-66)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 50 50"><!-- Icon from Map Icons by Scott de Jonge - https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL --><ellipse cx="25.015" cy="25.003" fill="none" rx="2.674" ry="2.688"/><path fill="currentColor" d="M25.554 36.172c3.601 16.811 23.919 3.049 3.74-8.661c22.24 12.908 22.293-17.916.045-5.018c22.248-12.897-4.317-28.315-4.322-2.509c.005-25.806-26.564-10.4-4.327 2.509c-22.237-12.91-22.263 17.915-.019 5.016c-20.19 11.704.082 25.482 3.684 8.637zm-3.213-11.169a2.68 2.68 0 0 1 2.674-2.688a2.68 2.68 0 0 1 2.673 2.688a2.68 2.68 0 0 1-2.673 2.688a2.683 2.683 0 0 1-2.674-2.688"/></svg>
                </span>
            </h3>
            <div class="grid grid-cols-4 w-full max-h-[190px] overflow-y-auto rounded-md border border-[var(--byt-font-16)] overflow-hidden">
            ${
                weather?.life_indices.slice(0, 20)?.map((item: { name: any; level: any; }) => {
                   return `<div class="flex flex-col items-center justify-center gap-1 border-r mt-[-1px] nth-[4n]:border-r-0 border-t border-[var(--byt-font-16)] p-2">
                    <span class="text-sm text-[var(--byt-font-88)] line-clamp-1 max-w-[5rem]">${item.name}</span>
                    <span class="text-md line-clamp-1">${item.level}</span>
                   </div>`
               }).join('')
            }
            </div>`
        }
        weatherEl.innerHTML = html += '</div>'
        if (document.getElementById('weather-echarts')) {
            const setOptions = () => {
                const color = getComputedStyle(document.documentElement)?.getPropertyValue('--byt-font-88');            
                weather_echarts_options.xAxis[0].data = forecast.daily_forecast.map((item: any) => new Date(item.date).getDate() +'日');
                weather_echarts_options.xAxis[1].data = forecast.daily_forecast.map((item: any) => getWeek(item.date));
                weather_echarts_options.xAxis[2].data = forecast.daily_forecast.map((item: any) => item.day_condition);
                weather_echarts_options.xAxis[3].data = forecast.daily_forecast.map((item: any) => item.night_condition);
                weather_echarts_options.series[0].data = forecast.daily_forecast.map((item: any) => item.max_temperature);
                weather_echarts_options.series[1].data = forecast.daily_forecast.map((item: any) => item.min_temperature);
                weather_echarts_options.xAxis.map((item: any) => {
                    const rich = item.axisLabel.rich as Record<string, any>;
                    if (rich.a) rich.a.color = color
                });
                forecast.daily_forecast.forEach((item: any, index: number) => {
                    const rich2 = weather_echarts_options.xAxis[2].axisLabel.rich as Record<number, any>;
                    const rich3 = weather_echarts_options.xAxis[3].axisLabel.rich as Record<number, any>;
                    if (rich2[index]) {
                        rich2[index].backgroundColor.image = svgToObjectURL(weather_icons[item.day_condition], { color });
                    }
                    if (rich3[index]) {
                        rich3[index].backgroundColor.image = svgToObjectURL(weather_icons[item.night_condition], { color });
                    }
                });
            }
            setOptions()
            let weather_echarts = EchartsInit(document.getElementById('weather-echarts') as HTMLElement, weather_echarts_options);
            window.addEventListener('resize', () => {
                weather_echarts?.resize();
            });
            document.addEventListener("theme-change", () => {
                clearTimeout(timer);
                setOptions();
                weather_echarts?.setOption(weather_echarts_options, false);
                timer = setTimeout(() => {
                    weather_echarts?.resize();
                }, 100);
            });
            // LzImgInit();
            timer = setTimeout(() => {
                weather_echarts?.resize();
            }, 100);
        }
    }
}