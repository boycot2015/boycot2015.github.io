
import { getIP, getWeather, getScentence } from "@/utils/index";
// import SITE_CONFIG from "@/config";
// 图片懒加载
// import LzImgInit from "@/scripts/LazyImg";
/* 
{
    "location": {
        "name": "广东深圳",
        "province": "广东省",
        "city": "深圳市",
        "county": ""
    },
    "weather": {
        "condition": "多云",
        "condition_code": "01",
        "temperature": 23,
        "humidity": 59,
        "pressure": 1007,
        "precipitation": 0,
        "wind_direction": "北风",
        "wind_power": "4-5",
        "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/bigIcon/baitian/01.png",
        "weather_colors": [
            "#A1AFC4",
            "#B0BDD1",
            "#A2AEC6"
        ],
        "updated": "2025-10-24 16:50:00",
        "updated_at": 1761324600000
    },
    "air_quality": {
        "aqi": 42,
        "level": 1,
        "quality": "优",
        "pm25": 24,
        "pm10": 42,
        "co": 0.6,
        "no2": 14,
        "o3": 98,
        "so2": 8,
        "rank": 230,
        "total_cities": 375,
        "updated": "2025-10-24 16:00:00",
        "updated_at": 1761321600000
    },
    "sunrise": {
        "sunrise": "2025-10-24 06:23:00",
        "sunrise_at": 1761286980000,
        "sunrise_desc": "06:23",
        "sunset": "2025-10-24 17:52:00",
        "sunset_at": 1761328320000,
        "sunset_desc": "17:52"
    },
    "life_indices": [
        {
            "key": "airconditioner",
            "name": "空调开启",
            "level": "较少开启",
            "description": "您将感到很舒适，一般不需要开启空调。"
        }
    ],
    "alerts": []
}
*/
export default async () => {
    // let info = await getIP();
    // let locationEl = document.querySelector(".byt-aside .location");
    // if (locationEl) {
    //     locationEl.textContent = info.location;
    //     }
    // let ipTextEl = document.querySelector(".byt-aside .ip-text");
    // if (ipTextEl) {
    //     ipTextEl.textContent = info.ip;
    // }
    // let repeatArr = ['南山']
    // let weather = await getWeather(repeatArr.includes(info.district || '', 'forecast') ? info.city : info.district || info.city, 'forecast');
    let weather = {
        "location": {
            "name": "广东深圳",
            "province": "广东省",
            "city": "深圳市",
            "county": ""
        },
        "weather": {
            "condition": "多云",
            "condition_code": "01",
            "temperature": 23,
            "humidity": 58,
            "pressure": 1007,
            "precipitation": 0,
            "wind_direction": "北风",
            "wind_power": "3-4",
            "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/bigIcon/baitian/01.png",
            "weather_colors": [
                "#A1AFC4",
                "#B0BDD1",
                "#A2AEC6"
            ],
            "updated": "2025-10-24 17:00:00",
            "updated_at": 1761325200000
        },
        "air_quality": {
            "aqi": 42,
            "level": 1,
            "quality": "优",
            "pm25": 24,
            "pm10": 42,
            "co": 0.6,
            "no2": 14,
            "o3": 98,
            "so2": 8,
            "rank": 228,
            "total_cities": 375,
            "updated": "2025-10-24 16:00:00",
            "updated_at": 1761321600000
        },
        "sunrise": {
            "sunrise": "2025-10-24 06:23:00",
            "sunrise_at": 1761286980000,
            "sunrise_desc": "06:23",
            "sunset": "2025-10-24 17:52:00",
            "sunset_at": 1761328320000,
            "sunset_desc": "17:52"
        },
        "life_indices": [
            {
                "key": "airconditioner",
                "name": "空调开启",
                "level": "较少开启",
                "description": "您将感到很舒适，一般不需要开启空调。"
            },
            {
                "key": "allergy",
                "name": "过敏",
                "level": "易发",
                "description": "天气条件易诱发过敏，宜穿长衣长裤并佩戴好眼镜和口罩，外出归来时及时清洁手和口鼻。"
            },
            {
                "key": "carwash",
                "name": "洗车",
                "level": "适宜",
                "description": "适宜洗车，至少可维持5天"
            },
            {
                "key": "chill",
                "name": "风寒",
                "level": "无",
                "description": "温度未达到风寒所需的低温，稍作防寒准备即可。"
            },
            {
                "key": "clothes",
                "name": "穿衣",
                "level": "较舒适",
                "description": "建议着薄外套、开衫牛仔衫裤等服装。年老体弱者应适当添加衣物，宜着夹克衫、薄毛衣等。"
            },
            {
                "key": "cold",
                "name": "感冒",
                "level": "少发",
                "description": "各项气象条件适宜，无明显降温过程，发生感冒机率较低。"
            },
            {
                "key": "comfort",
                "name": "舒适度",
                "level": "舒适",
                "description": "白天温度适宜，风力不大，相信您在这样的天气条件下，应会感到比较清爽和舒适。"
            },
            {
                "key": "diffusion",
                "name": "空气污染扩散条件",
                "level": "良",
                "description": "气象条件有利于空气污染物稀释、扩散和清除。"
            },
            {
                "key": "dry",
                "name": "路况",
                "level": "干燥",
                "description": "天气较好，路面比较干燥，路况较好。"
            },
            {
                "key": "drying",
                "name": "晾晒",
                "level": "适宜",
                "description": "天气不错，适宜晾晒。赶紧把久未见阳光的衣物搬出来吸收一下太阳的味道吧！"
            },
            {
                "key": "fish",
                "name": "钓鱼",
                "level": "较适宜",
                "description": "较适合垂钓，但风力稍大，会对垂钓产生一定的影响。"
            },
            {
                "key": "heatstroke",
                "name": "中暑",
                "level": "无中暑风险",
                "description": "天气舒适，对易中暑人群来说非常友善。"
            },
            {
                "key": "makeup",
                "name": "化妆",
                "level": "防晒",
                "description": "温湿适宜，但最好使用SPF15以上防晒霜打底，建议使用中性保湿型化妆品。"
            },
            {
                "key": "mood",
                "name": "心情",
                "level": "较好",
                "description": "天气较好，温度适宜，心情会不错，学习、工作效率较高。"
            },
            {
                "key": "morning",
                "name": "晨练",
                "level": "较适宜",
                "description": "早晨气象条件较适宜晨练，但风力稍大，晨练时请注意选择避风的地点，避免迎风锻炼。"
            },
            {
                "key": "sports",
                "name": "运动",
                "level": "较适宜",
                "description": "天气较好，但因风力稍强，户外可选择对风力要求不高的运动，推荐您进行室内运动。"
            },
            {
                "key": "sunglasses",
                "name": "太阳镜",
                "level": "必要",
                "description": "白天太阳辐射较强，建议佩戴透射比1级且标注UV380-UV400的浅色太阳镜"
            },
            {
                "key": "sunscreen",
                "name": "防晒",
                "level": "强",
                "description": "属强紫外辐射天气，应加强防护，建议涂擦SPF在15-20之间，PA++的防晒护肤品。"
            },
            {
                "key": "tourism",
                "name": "旅游",
                "level": "适宜",
                "description": "天气较好，温度适宜，但风稍微有点大。这样的天气适宜旅游，您可以尽情地享受大自然的无限风光。"
            },
            {
                "key": "traffic",
                "name": "交通",
                "level": "良好",
                "description": "天气较好，路面干燥，交通气象条件良好，车辆可以正常行驶。"
            },
            {
                "key": "ultraviolet",
                "name": "紫外线强度",
                "level": "强",
                "description": "紫外线辐射强，建议涂擦SPF20左右、PA++的防晒护肤品。避免在10点至14点暴露于日光下。"
            },
            {
                "key": "umbrella",
                "name": "雨伞",
                "level": "不带伞",
                "description": "天气较好，不会降水，因此您可放心出门，无须带雨伞。"
            }
        ],
        "alerts": []
    }
    let forecast = {
        "location": {
            "name": "广东深圳",
            "province": "广东省",
            "city": "深圳市",
            "county": ""
        },
        "hourly_forecast": [
            {
                "datetime": "2025-10-24 17:00",
                "temperature": 22,
                "condition": "多云",
                "condition_code": "01",
                "wind_direction": "北风",
                "wind_power": "3-4",
                "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/baitian/01.png"
            },
            {
                "datetime": "2025-10-24 18:00",
                "temperature": 22,
                "condition": "多云",
                "condition_code": "01",
                "wind_direction": "北风",
                "wind_power": "3-4",
                "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/01.png"
            },
            {
                "datetime": "2025-10-24 19:00",
                "temperature": 21,
                "condition": "多云",
                "condition_code": "01",
                "wind_direction": "北风",
                "wind_power": "3-4",
                "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/01.png"
            },
            {
                "datetime": "2025-10-24 20:00",
                "temperature": 21,
                "condition": "多云",
                "condition_code": "01",
                "wind_direction": "东北风",
                "wind_power": "3-4",
                "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/01.png"
            },
            {
                "datetime": "2025-10-24 21:00",
                "temperature": 21,
                "condition": "多云",
                "condition_code": "01",
                "wind_direction": "东北风",
                "wind_power": "3-4",
                "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/01.png"
            },
            {
                "datetime": "2025-10-24 22:00",
                "temperature": 20,
                "condition": "多云",
                "condition_code": "01",
                "wind_direction": "北风",
                "wind_power": "3-4",
                "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/01.png"
            },
            {
                "datetime": "2025-10-24 23:00",
                "temperature": 20,
                "condition": "多云",
                "condition_code": "01",
                "wind_direction": "北风",
                "wind_power": "3-4",
                "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/01.png"
            },
            {
                "datetime": "2025-10-25 00:00",
                "temperature": 20,
                "condition": "多云",
                "condition_code": "01",
                "wind_direction": "东北风",
                "wind_power": "3-4",
                "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/01.png"
            },
            {
                "datetime": "2025-10-25 01:00",
                "temperature": 20,
                "condition": "多云",
                "condition_code": "01",
                "wind_direction": "东北风",
                "wind_power": "3-4",
                "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/01.png"
            },
            {
                "datetime": "2025-10-25 02:00",
                "temperature": 19,
                "condition": "多云",
                "condition_code": "01",
                "wind_direction": "北风",
                "wind_power": "3-4",
                "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/01.png"
            },
            {
                "datetime": "2025-10-25 03:00",
                "temperature": 19,
                "condition": "多云",
                "condition_code": "01",
                "wind_direction": "北风",
                "wind_power": "3-4",
                "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/01.png"
            },
            {
                "datetime": "2025-10-25 04:00",
                "temperature": 19,
                "condition": "多云",
                "condition_code": "01",
                "wind_direction": "北风",
                "wind_power": "3-4",
                "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/01.png"
            },
            {
                "datetime": "2025-10-25 05:00",
                "temperature": 19,
                "condition": "多云",
                "condition_code": "01",
                "wind_direction": "北风",
                "wind_power": "3-4",
                "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/01.png"
            },
            {
                "datetime": "2025-10-25 06:00",
                "temperature": 20,
                "condition": "多云",
                "condition_code": "01",
                "wind_direction": "北风",
                "wind_power": "3-4",
                "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/01.png"
            },
            {
                "datetime": "2025-10-25 07:00",
                "temperature": 20,
                "condition": "多云",
                "condition_code": "01",
                "wind_direction": "北风",
                "wind_power": "3-4",
                "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/baitian/01.png"
            },
            {
                "datetime": "2025-10-25 08:00",
                "temperature": 21,
                "condition": "多云",
                "condition_code": "01",
                "wind_direction": "东北风",
                "wind_power": "3-4",
                "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/baitian/01.png"
            },
            {
                "datetime": "2025-10-25 09:00",
                "temperature": 23,
                "condition": "多云",
                "condition_code": "01",
                "wind_direction": "北风",
                "wind_power": "3-4",
                "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/baitian/01.png"
            },
            {
                "datetime": "2025-10-25 10:00",
                "temperature": 24,
                "condition": "晴",
                "condition_code": "00",
                "wind_direction": "北风",
                "wind_power": "3-4",
                "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/baitian/00.png"
            },
            {
                "datetime": "2025-10-25 11:00",
                "temperature": 25,
                "condition": "晴",
                "condition_code": "00",
                "wind_direction": "北风",
                "wind_power": "3-4",
                "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/baitian/00.png"
            },
            {
                "datetime": "2025-10-25 12:00",
                "temperature": 26,
                "condition": "晴",
                "condition_code": "00",
                "wind_direction": "北风",
                "wind_power": "3-4",
                "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/baitian/00.png"
            },
            {
                "datetime": "2025-10-25 13:00",
                "temperature": 26,
                "condition": "晴",
                "condition_code": "00",
                "wind_direction": "北风",
                "wind_power": "3-4",
                "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/baitian/00.png"
            },
            {
                "datetime": "2025-10-25 14:00",
                "temperature": 27,
                "condition": "晴",
                "condition_code": "00",
                "wind_direction": "东北风",
                "wind_power": "3-4",
                "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/baitian/00.png"
            },
            {
                "datetime": "2025-10-25 15:00",
                "temperature": 27,
                "condition": "晴",
                "condition_code": "00",
                "wind_direction": "东北风",
                "wind_power": "3-4",
                "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/baitian/00.png"
            },
            {
                "datetime": "2025-10-25 16:00",
                "temperature": 27,
                "condition": "晴",
                "condition_code": "00",
                "wind_direction": "东北风",
                "wind_power": "3-4",
                "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/baitian/00.png"
            },
            {
                "datetime": "2025-10-25 17:00",
                "temperature": 27,
                "condition": "晴",
                "condition_code": "00",
                "wind_direction": "东北风",
                "wind_power": "3-4",
                "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/baitian/00.png"
            },
            {
                "datetime": "2025-10-25 18:00",
                "temperature": 27,
                "condition": "晴",
                "condition_code": "00",
                "wind_direction": "东北风",
                "wind_power": "3-4",
                "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/00.png"
            },
            {
                "datetime": "2025-10-25 19:00",
                "temperature": 26,
                "condition": "晴",
                "condition_code": "00",
                "wind_direction": "东北风",
                "wind_power": "3-4",
                "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/00.png"
            },
            {
                "datetime": "2025-10-25 20:00",
                "temperature": 25,
                "condition": "晴",
                "condition_code": "00",
                "wind_direction": "东北风",
                "wind_power": "3-4",
                "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/00.png"
            },
            {
                "datetime": "2025-10-25 21:00",
                "temperature": 25,
                "condition": "晴",
                "condition_code": "00",
                "wind_direction": "东北风",
                "wind_power": "3-4",
                "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/00.png"
            },
            {
                "datetime": "2025-10-25 22:00",
                "temperature": 24,
                "condition": "晴",
                "condition_code": "00",
                "wind_direction": "东北风",
                "wind_power": "3-4",
                "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/00.png"
            },
            {
                "datetime": "2025-10-25 23:00",
                "temperature": 24,
                "condition": "晴",
                "condition_code": "00",
                "wind_direction": "东北风",
                "wind_power": "3-4",
                "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/00.png"
            },
            {
                "datetime": "2025-10-26 00:00",
                "temperature": 23,
                "condition": "晴",
                "condition_code": "00",
                "wind_direction": "东北风",
                "wind_power": "3-4",
                "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/00.png"
            },
            {
                "datetime": "2025-10-26 01:00",
                "temperature": 22,
                "condition": "晴",
                "condition_code": "00",
                "wind_direction": "东北风",
                "wind_power": "3-4",
                "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/00.png"
            },
            {
                "datetime": "2025-10-26 02:00",
                "temperature": 22,
                "condition": "晴",
                "condition_code": "00",
                "wind_direction": "东北风",
                "wind_power": "3-4",
                "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/00.png"
            },
            {
                "datetime": "2025-10-26 03:00",
                "temperature": 21,
                "condition": "晴",
                "condition_code": "00",
                "wind_direction": "东北风",
                "wind_power": "3-4",
                "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/00.png"
            },
            {
                "datetime": "2025-10-26 04:00",
                "temperature": 21,
                "condition": "晴",
                "condition_code": "00",
                "wind_direction": "东北风",
                "wind_power": "3-4",
                "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/00.png"
            },
            {
                "datetime": "2025-10-26 05:00",
                "temperature": 21,
                "condition": "晴",
                "condition_code": "00",
                "wind_direction": "东北风",
                "wind_power": "3-4",
                "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/00.png"
            },
            {
                "datetime": "2025-10-26 06:00",
                "temperature": 22,
                "condition": "晴",
                "condition_code": "00",
                "wind_direction": "东北风",
                "wind_power": "3-4",
                "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/00.png"
            },
            {
                "datetime": "2025-10-26 07:00",
                "temperature": 22,
                "condition": "晴",
                "condition_code": "00",
                "wind_direction": "东北风",
                "wind_power": "3-4",
                "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/baitian/00.png"
            },
            {
                "datetime": "2025-10-26 08:00",
                "temperature": 23,
                "condition": "晴",
                "condition_code": "00",
                "wind_direction": "东北风",
                "wind_power": "3-4",
                "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/baitian/00.png"
            },
            {
                "datetime": "2025-10-26 09:00",
                "temperature": 25,
                "condition": "晴",
                "condition_code": "00",
                "wind_direction": "东北风",
                "wind_power": "3-4",
                "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/baitian/00.png"
            },
            {
                "datetime": "2025-10-26 10:00",
                "temperature": 26,
                "condition": "晴",
                "condition_code": "00",
                "wind_direction": "东北风",
                "wind_power": "3-4",
                "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/baitian/00.png"
            },
            {
                "datetime": "2025-10-26 11:00",
                "temperature": 27,
                "condition": "晴",
                "condition_code": "00",
                "wind_direction": "东北风",
                "wind_power": "3-4",
                "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/baitian/00.png"
            },
            {
                "datetime": "2025-10-26 12:00",
                "temperature": 27,
                "condition": "晴",
                "condition_code": "00",
                "wind_direction": "东北风",
                "wind_power": "3-4",
                "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/baitian/00.png"
            },
            {
                "datetime": "2025-10-26 13:00",
                "temperature": 27,
                "condition": "晴",
                "condition_code": "00",
                "wind_direction": "东北风",
                "wind_power": "3-4",
                "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/baitian/00.png"
            },
            {
                "datetime": "2025-10-26 14:00",
                "temperature": 27,
                "condition": "晴",
                "condition_code": "00",
                "wind_direction": "东北风",
                "wind_power": "3-4",
                "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/baitian/00.png"
            },
            {
                "datetime": "2025-10-26 15:00",
                "temperature": 27,
                "condition": "晴",
                "condition_code": "00",
                "wind_direction": "东北风",
                "wind_power": "3-4",
                "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/baitian/00.png"
            },
            {
                "datetime": "2025-10-26 16:00",
                "temperature": 27,
                "condition": "晴",
                "condition_code": "00",
                "wind_direction": "东北风",
                "wind_power": "3-4",
                "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/baitian/00.png"
            }
        ],
        "daily_forecast": [
            {
                "date": "2025-10-23",
                "day_condition": "阴",
                "day_condition_code": "02",
                "night_condition": "阴",
                "night_condition_code": "02",
                "max_temperature": 22,
                "min_temperature": 18,
                "day_wind_direction": "北风",
                "day_wind_power": "3-4",
                "night_wind_direction": "东北风",
                "night_wind_power": "1-3",
                "aqi": 70,
                "aqi_level": 2,
                "air_quality": "良",
                "day_weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/baitian/02.png",
                "night_weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/02.png"
            },
            {
                "date": "2025-10-24",
                "day_condition": "多云",
                "day_condition_code": "01",
                "night_condition": "多云",
                "night_condition_code": "01",
                "max_temperature": 23,
                "min_temperature": 19,
                "day_wind_direction": "东北风",
                "day_wind_power": "3-4",
                "night_wind_direction": "东北风",
                "night_wind_power": "3-4",
                "aqi": 47,
                "aqi_level": 1,
                "air_quality": "优",
                "day_weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/baitian/01.png",
                "night_weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/01.png"
            },
            {
                "date": "2025-10-25",
                "day_condition": "晴",
                "day_condition_code": "00",
                "night_condition": "晴",
                "night_condition_code": "00",
                "max_temperature": 28,
                "min_temperature": 21,
                "day_wind_direction": "东北风",
                "day_wind_power": "3-4",
                "night_wind_direction": "东北风",
                "night_wind_power": "3-4",
                "aqi": 79,
                "aqi_level": 2,
                "air_quality": "良",
                "day_weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/baitian/00.png",
                "night_weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/00.png"
            },
            {
                "date": "2025-10-26",
                "day_condition": "多云",
                "day_condition_code": "01",
                "night_condition": "多云",
                "night_condition_code": "01",
                "max_temperature": 28,
                "min_temperature": 22,
                "day_wind_direction": "东北风",
                "day_wind_power": "3-4",
                "night_wind_direction": "东北风",
                "night_wind_power": "3-4",
                "aqi": 79,
                "aqi_level": 2,
                "air_quality": "良",
                "day_weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/baitian/01.png",
                "night_weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/01.png"
            },
            {
                "date": "2025-10-27",
                "day_condition": "多云",
                "day_condition_code": "01",
                "night_condition": "多云",
                "night_condition_code": "01",
                "max_temperature": 28,
                "min_temperature": 22,
                "day_wind_direction": "东北风",
                "day_wind_power": "1-3",
                "night_wind_direction": "东北风",
                "night_wind_power": "1-3",
                "aqi": 85,
                "aqi_level": 2,
                "air_quality": "良",
                "day_weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/baitian/01.png",
                "night_weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/01.png"
            },
            {
                "date": "2025-10-28",
                "day_condition": "多云",
                "day_condition_code": "01",
                "night_condition": "晴",
                "night_condition_code": "00",
                "max_temperature": 29,
                "min_temperature": 22,
                "day_wind_direction": "东北风",
                "day_wind_power": "1-3",
                "night_wind_direction": "东北风",
                "night_wind_power": "1-3",
                "aqi": 74,
                "aqi_level": 2,
                "air_quality": "良",
                "day_weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/baitian/01.png",
                "night_weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/00.png"
            },
            {
                "date": "2025-10-29",
                "day_condition": "晴",
                "day_condition_code": "00",
                "night_condition": "晴",
                "night_condition_code": "00",
                "max_temperature": 30,
                "min_temperature": 23,
                "day_wind_direction": "东北风",
                "day_wind_power": "1-3",
                "night_wind_direction": "东风",
                "night_wind_power": "1-3",
                "aqi": 66,
                "aqi_level": 2,
                "air_quality": "良",
                "day_weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/baitian/00.png",
                "night_weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/00.png"
            }
        ],
        "sunrise_sunset": [
            {
                "sunrise": "2025-10-24 06:23:00",
                "sunrise_at": 1761286980000,
                "sunrise_desc": "06:23",
                "sunset": "2025-10-24 17:52:00",
                "sunset_at": 1761328320000,
                "sunset_desc": "17:52"
            },
            {
                "sunrise": "2025-10-25 06:24:00",
                "sunrise_at": 1761373440000,
                "sunrise_desc": "06:24",
                "sunset": "2025-10-25 17:51:00",
                "sunset_at": 1761414660000,
                "sunset_desc": "17:51"
            },
            {
                "sunrise": "2025-10-26 06:24:00",
                "sunrise_at": 1761459840000,
                "sunrise_desc": "06:24",
                "sunset": "2025-10-26 17:51:00",
                "sunset_at": 1761501060000,
                "sunset_desc": "17:51"
            },
            {
                "sunrise": "2025-10-27 06:25:00",
                "sunrise_at": 1761546300000,
                "sunrise_desc": "06:25",
                "sunset": "2025-10-27 17:50:00",
                "sunset_at": 1761587400000,
                "sunset_desc": "17:50"
            },
            {
                "sunrise": "2025-10-28 06:25:00",
                "sunrise_at": 1761632700000,
                "sunrise_desc": "06:25",
                "sunset": "2025-10-28 17:49:00",
                "sunset_at": 1761673740000,
                "sunset_desc": "17:49"
            },
            {
                "sunrise": "2025-10-29 06:26:00",
                "sunrise_at": 1761719160000,
                "sunrise_desc": "06:26",
                "sunset": "2025-10-29 17:49:00",
                "sunset_at": 1761760140000,
                "sunset_desc": "17:49"
            },
            {
                "sunrise": "2025-10-30 06:26:00",
                "sunrise_at": 1761805560000,
                "sunrise_desc": "06:26",
                "sunset": "2025-10-30 17:48:00",
                "sunset_at": 1761846480000,
                "sunset_desc": "17:48"
            }
        ]
    }
    let weatherEl = document.querySelector(".byt-aside .weather");
    console.log(weather, forecast, 'weather');
    if (weatherEl) {
        weatherEl.innerHTML = `<div class="flex flex-col w-full">
            <div class="flex items-center justify-between gap-1 w-full">
                <span>${weather?.air_quality?.aqi || '-'}&nbsp;${weather?.air_quality?.quality || '-'}</span>
                <span>
                ${weather?.location?.county || weather?.location?.city || '-'}&nbsp;
                ${weather?.weather?.condition || '-'}&nbsp;
                ${weather?.weather?.temperature || '25'}℃ ${!weather || ''}</span>
                <span class="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path fill="currentColor" d="M11.5 20q-1.25 0-2.125-.875T8.5 17h2q0 .425.288.713T11.5 18t.713-.288T12.5 17t-.288-.712T11.5 16H2v-2h9.5q1.25 0 2.125.875T14.5 17t-.875 2.125T11.5 20M2 10V8h13.5q.65 0 1.075-.425T17 6.5t-.425-1.075T15.5 5t-1.075.425T14 6.5h-2q0-1.475 1.013-2.488T15.5 3t2.488 1.013T19 6.5t-1.012 2.488T15.5 10zm16.5 8v-2q.65 0 1.075-.425T20 14.5t-.425-1.075T18.5 13H2v-2h16.5q1.475 0 2.488 1.013T22 14.5t-1.012 2.488T18.5 18"/></svg>
                    ${weather?.weather?.wind_direction || '-'}&nbsp;
                </span>
            </div>
            <h3 class="text-md font-bold text-[var(--byt-font-88)] !my-3">生活指数</h3>
            <div class="grid grid-cols-6 md:grid-cols-3 w-full max-h-[190px] overflow-y-auto rounded-md border border-[var(--byt-font-16)] overflow-hidden">
            ${
                weather?.life_indices?.map(item => {
                   return `<div class="flex flex-col items-center justify-center gap-1 border-r nth-[6n]:border-r-0 last:border-b-0 md:nth-[3n]:border-r-0 border-b border-[var(--byt-font-16)] p-2">
                    <span class="text-sm text-[var(--byt-font-88)] line-clamp-1 max-w-[5rem]">${item.name}</span>
                    <span class="text-md line-clamp-1">${item.level}</span>
                   </div>`
               }).join('')
            }
            </div>
            <h3 class="text-md font-bold text-[var(--byt-font-88)] !my-3 flex justify-between items-center">
                <span>24小时预报</span>
            </h3>
            <div class="grid grid-cols-6 md:grid-cols-3 w-full max-h-[160px] overflow-y-auto overflow-x-auto rounded-md border border-[var(--byt-font-16)] overflow-hidden">
            ${
                forecast?.hourly_forecast?.map(item => {
                   return `<div class="flex flex-col items-center justify-center gap-1 border-r nth-[6n]:border-r-0 last:border-b-0 md:nth-[3n]:border-r-0 border-b border-[var(--byt-font-16)] p-2">
                    <span class="text-sm text-[var(--byt-font-88)] line-clamp-1 max-w-[5rem]">${item.datetime.split(' ')[1]}</span>
                    <span class="text-md line-clamp-1">${item.condition}</span>
                    <span class="text-md line-clamp-1">${item.temperature}℃</span>
                   </div>`
               }).join('')
            }
            </div>
        </div>`;
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