// let weather = {
//     "location": {
//         "name": "广东深圳",
//         "province": "广东省",
//         "city": "深圳市",
//         "county": ""
//     },
//     "weather": {
//         "condition": "多云",
//         "condition_code": "01",
//         "temperature": 23,
//         "humidity": 58,
//         "pressure": 1007,
//         "precipitation": 0,
//         "wind_direction": "北风",
//         "wind_power": "3-4",
//         "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/bigIcon/baitian/01.png",
//         "weather_colors": [
//             "#A1AFC4",
//             "#B0BDD1",
//             "#A2AEC6"
//         ],
//         "updated": "2025-10-24 17:00:00",
//         "updated_at": 1761325200000
//     },
//     "air_quality": {
//         "aqi": 42,
//         "level": 1,
//         "quality": "优",
//         "pm25": 24,
//         "pm10": 42,
//         "co": 0.6,
//         "no2": 14,
//         "o3": 98,
//         "so2": 8,
//         "rank": 228,
//         "total_cities": 375,
//         "updated": "2025-10-24 16:00:00",
//         "updated_at": 1761321600000
//     },
//     "sunrise": {
//         "sunrise": "2025-10-24 06:23:00",
//         "sunrise_at": 1761286980000,
//         "sunrise_desc": "06:23",
//         "sunset": "2025-10-24 17:52:00",
//         "sunset_at": 1761328320000,
//         "sunset_desc": "17:52"
//     },
//     "life_indices": [
//         {
//             "key": "airconditioner",
//             "name": "空调开启",
//             "level": "较少开启",
//             "description": "您将感到很舒适，一般不需要开启空调。"
//         },
//         {
//             "key": "allergy",
//             "name": "过敏",
//             "level": "易发",
//             "description": "天气条件易诱发过敏，宜穿长衣长裤并佩戴好眼镜和口罩，外出归来时及时清洁手和口鼻。"
//         },
//         {
//             "key": "carwash",
//             "name": "洗车",
//             "level": "适宜",
//             "description": "适宜洗车，至少可维持5天"
//         },
//         {
//             "key": "chill",
//             "name": "风寒",
//             "level": "无",
//             "description": "温度未达到风寒所需的低温，稍作防寒准备即可。"
//         },
//         {
//             "key": "clothes",
//             "name": "穿衣",
//             "level": "较舒适",
//             "description": "建议着薄外套、开衫牛仔衫裤等服装。年老体弱者应适当添加衣物，宜着夹克衫、薄毛衣等。"
//         },
//         {
//             "key": "cold",
//             "name": "感冒",
//             "level": "少发",
//             "description": "各项气象条件适宜，无明显降温过程，发生感冒机率较低。"
//         },
//         {
//             "key": "comfort",
//             "name": "舒适度",
//             "level": "舒适",
//             "description": "白天温度适宜，风力不大，相信您在这样的天气条件下，应会感到比较清爽和舒适。"
//         },
//         {
//             "key": "diffusion",
//             "name": "空气污染扩散条件",
//             "level": "良",
//             "description": "气象条件有利于空气污染物稀释、扩散和清除。"
//         },
//         {
//             "key": "dry",
//             "name": "路况",
//             "level": "干燥",
//             "description": "天气较好，路面比较干燥，路况较好。"
//         },
//         {
//             "key": "drying",
//             "name": "晾晒",
//             "level": "适宜",
//             "description": "天气不错，适宜晾晒。赶紧把久未见阳光的衣物搬出来吸收一下太阳的味道吧！"
//         },
//         {
//             "key": "fish",
//             "name": "钓鱼",
//             "level": "较适宜",
//             "description": "较适合垂钓，但风力稍大，会对垂钓产生一定的影响。"
//         },
//         {
//             "key": "heatstroke",
//             "name": "中暑",
//             "level": "无中暑风险",
//             "description": "天气舒适，对易中暑人群来说非常友善。"
//         },
//         {
//             "key": "makeup",
//             "name": "化妆",
//             "level": "防晒",
//             "description": "温湿适宜，但最好使用SPF15以上防晒霜打底，建议使用中性保湿型化妆品。"
//         },
//         {
//             "key": "mood",
//             "name": "心情",
//             "level": "较好",
//             "description": "天气较好，温度适宜，心情会不错，学习、工作效率较高。"
//         },
//         {
//             "key": "morning",
//             "name": "晨练",
//             "level": "较适宜",
//             "description": "早晨气象条件较适宜晨练，但风力稍大，晨练时请注意选择避风的地点，避免迎风锻炼。"
//         },
//         {
//             "key": "sports",
//             "name": "运动",
//             "level": "较适宜",
//             "description": "天气较好，但因风力稍强，户外可选择对风力要求不高的运动，推荐您进行室内运动。"
//         },
//         {
//             "key": "sunglasses",
//             "name": "太阳镜",
//             "level": "必要",
//             "description": "白天太阳辐射较强，建议佩戴透射比1级且标注UV380-UV400的浅色太阳镜"
//         },
//         {
//             "key": "sunscreen",
//             "name": "防晒",
//             "level": "强",
//             "description": "属强紫外辐射天气，应加强防护，建议涂擦SPF在15-20之间，PA++的防晒护肤品。"
//         },
//         {
//             "key": "tourism",
//             "name": "旅游",
//             "level": "适宜",
//             "description": "天气较好，温度适宜，但风稍微有点大。这样的天气适宜旅游，您可以尽情地享受大自然的无限风光。"
//         },
//         {
//             "key": "traffic",
//             "name": "交通",
//             "level": "良好",
//             "description": "天气较好，路面干燥，交通气象条件良好，车辆可以正常行驶。"
//         },
//         {
//             "key": "ultraviolet",
//             "name": "紫外线强度",
//             "level": "强",
//             "description": "紫外线辐射强，建议涂擦SPF20左右、PA++的防晒护肤品。避免在10点至14点暴露于日光下。"
//         },
//         {
//             "key": "umbrella",
//             "name": "雨伞",
//             "level": "不带伞",
//             "description": "天气较好，不会降水，因此您可放心出门，无须带雨伞。"
//         }
//     ],
//     "alerts": []
// }
// let forecast = {
//     "location": {
//         "name": "广东深圳",
//         "province": "广东省",
//         "city": "深圳市",
//         "county": ""
//     },
//     "hourly_forecast": [
//         {
//             "datetime": "2025-10-24 17:00",
//             "temperature": 22,
//             "condition": "多云",
//             "condition_code": "01",
//             "wind_direction": "北风",
//             "wind_power": "3-4",
//             "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/baitian/01.png"
//         },
//         {
//             "datetime": "2025-10-24 18:00",
//             "temperature": 22,
//             "condition": "多云",
//             "condition_code": "01",
//             "wind_direction": "北风",
//             "wind_power": "3-4",
//             "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/01.png"
//         },
//         {
//             "datetime": "2025-10-24 19:00",
//             "temperature": 21,
//             "condition": "多云",
//             "condition_code": "01",
//             "wind_direction": "北风",
//             "wind_power": "3-4",
//             "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/01.png"
//         },
//         {
//             "datetime": "2025-10-24 20:00",
//             "temperature": 21,
//             "condition": "多云",
//             "condition_code": "01",
//             "wind_direction": "东北风",
//             "wind_power": "3-4",
//             "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/01.png"
//         },
//         {
//             "datetime": "2025-10-24 21:00",
//             "temperature": 21,
//             "condition": "多云",
//             "condition_code": "01",
//             "wind_direction": "东北风",
//             "wind_power": "3-4",
//             "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/01.png"
//         },
//         {
//             "datetime": "2025-10-24 22:00",
//             "temperature": 20,
//             "condition": "多云",
//             "condition_code": "01",
//             "wind_direction": "北风",
//             "wind_power": "3-4",
//             "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/01.png"
//         },
//         {
//             "datetime": "2025-10-24 23:00",
//             "temperature": 20,
//             "condition": "多云",
//             "condition_code": "01",
//             "wind_direction": "北风",
//             "wind_power": "3-4",
//             "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/01.png"
//         },
//         {
//             "datetime": "2025-10-25 00:00",
//             "temperature": 20,
//             "condition": "多云",
//             "condition_code": "01",
//             "wind_direction": "东北风",
//             "wind_power": "3-4",
//             "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/01.png"
//         },
//         {
//             "datetime": "2025-10-25 01:00",
//             "temperature": 20,
//             "condition": "多云",
//             "condition_code": "01",
//             "wind_direction": "东北风",
//             "wind_power": "3-4",
//             "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/01.png"
//         },
//         {
//             "datetime": "2025-10-25 02:00",
//             "temperature": 19,
//             "condition": "多云",
//             "condition_code": "01",
//             "wind_direction": "北风",
//             "wind_power": "3-4",
//             "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/01.png"
//         },
//         {
//             "datetime": "2025-10-25 03:00",
//             "temperature": 19,
//             "condition": "多云",
//             "condition_code": "01",
//             "wind_direction": "北风",
//             "wind_power": "3-4",
//             "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/01.png"
//         },
//         {
//             "datetime": "2025-10-25 04:00",
//             "temperature": 19,
//             "condition": "多云",
//             "condition_code": "01",
//             "wind_direction": "北风",
//             "wind_power": "3-4",
//             "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/01.png"
//         },
//         {
//             "datetime": "2025-10-25 05:00",
//             "temperature": 19,
//             "condition": "多云",
//             "condition_code": "01",
//             "wind_direction": "北风",
//             "wind_power": "3-4",
//             "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/01.png"
//         },
//         {
//             "datetime": "2025-10-25 06:00",
//             "temperature": 20,
//             "condition": "多云",
//             "condition_code": "01",
//             "wind_direction": "北风",
//             "wind_power": "3-4",
//             "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/01.png"
//         },
//         {
//             "datetime": "2025-10-25 07:00",
//             "temperature": 20,
//             "condition": "多云",
//             "condition_code": "01",
//             "wind_direction": "北风",
//             "wind_power": "3-4",
//             "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/baitian/01.png"
//         },
//         {
//             "datetime": "2025-10-25 08:00",
//             "temperature": 21,
//             "condition": "多云",
//             "condition_code": "01",
//             "wind_direction": "东北风",
//             "wind_power": "3-4",
//             "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/baitian/01.png"
//         },
//         {
//             "datetime": "2025-10-25 09:00",
//             "temperature": 23,
//             "condition": "多云",
//             "condition_code": "01",
//             "wind_direction": "北风",
//             "wind_power": "3-4",
//             "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/baitian/01.png"
//         },
//         {
//             "datetime": "2025-10-25 10:00",
//             "temperature": 24,
//             "condition": "晴",
//             "condition_code": "00",
//             "wind_direction": "北风",
//             "wind_power": "3-4",
//             "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/baitian/00.png"
//         },
//         {
//             "datetime": "2025-10-25 11:00",
//             "temperature": 25,
//             "condition": "晴",
//             "condition_code": "00",
//             "wind_direction": "北风",
//             "wind_power": "3-4",
//             "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/baitian/00.png"
//         },
//         {
//             "datetime": "2025-10-25 12:00",
//             "temperature": 26,
//             "condition": "晴",
//             "condition_code": "00",
//             "wind_direction": "北风",
//             "wind_power": "3-4",
//             "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/baitian/00.png"
//         },
//         {
//             "datetime": "2025-10-25 13:00",
//             "temperature": 26,
//             "condition": "晴",
//             "condition_code": "00",
//             "wind_direction": "北风",
//             "wind_power": "3-4",
//             "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/baitian/00.png"
//         },
//         {
//             "datetime": "2025-10-25 14:00",
//             "temperature": 27,
//             "condition": "晴",
//             "condition_code": "00",
//             "wind_direction": "东北风",
//             "wind_power": "3-4",
//             "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/baitian/00.png"
//         },
//         {
//             "datetime": "2025-10-25 15:00",
//             "temperature": 27,
//             "condition": "晴",
//             "condition_code": "00",
//             "wind_direction": "东北风",
//             "wind_power": "3-4",
//             "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/baitian/00.png"
//         },
//         {
//             "datetime": "2025-10-25 16:00",
//             "temperature": 27,
//             "condition": "晴",
//             "condition_code": "00",
//             "wind_direction": "东北风",
//             "wind_power": "3-4",
//             "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/baitian/00.png"
//         },
//         {
//             "datetime": "2025-10-25 17:00",
//             "temperature": 27,
//             "condition": "晴",
//             "condition_code": "00",
//             "wind_direction": "东北风",
//             "wind_power": "3-4",
//             "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/baitian/00.png"
//         },
//         {
//             "datetime": "2025-10-25 18:00",
//             "temperature": 27,
//             "condition": "晴",
//             "condition_code": "00",
//             "wind_direction": "东北风",
//             "wind_power": "3-4",
//             "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/00.png"
//         },
//         {
//             "datetime": "2025-10-25 19:00",
//             "temperature": 26,
//             "condition": "晴",
//             "condition_code": "00",
//             "wind_direction": "东北风",
//             "wind_power": "3-4",
//             "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/00.png"
//         },
//         {
//             "datetime": "2025-10-25 20:00",
//             "temperature": 25,
//             "condition": "晴",
//             "condition_code": "00",
//             "wind_direction": "东北风",
//             "wind_power": "3-4",
//             "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/00.png"
//         },
//         {
//             "datetime": "2025-10-25 21:00",
//             "temperature": 25,
//             "condition": "晴",
//             "condition_code": "00",
//             "wind_direction": "东北风",
//             "wind_power": "3-4",
//             "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/00.png"
//         },
//         {
//             "datetime": "2025-10-25 22:00",
//             "temperature": 24,
//             "condition": "晴",
//             "condition_code": "00",
//             "wind_direction": "东北风",
//             "wind_power": "3-4",
//             "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/00.png"
//         },
//         {
//             "datetime": "2025-10-25 23:00",
//             "temperature": 24,
//             "condition": "晴",
//             "condition_code": "00",
//             "wind_direction": "东北风",
//             "wind_power": "3-4",
//             "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/00.png"
//         },
//         {
//             "datetime": "2025-10-26 00:00",
//             "temperature": 23,
//             "condition": "晴",
//             "condition_code": "00",
//             "wind_direction": "东北风",
//             "wind_power": "3-4",
//             "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/00.png"
//         },
//         {
//             "datetime": "2025-10-26 01:00",
//             "temperature": 22,
//             "condition": "晴",
//             "condition_code": "00",
//             "wind_direction": "东北风",
//             "wind_power": "3-4",
//             "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/00.png"
//         },
//         {
//             "datetime": "2025-10-26 02:00",
//             "temperature": 22,
//             "condition": "晴",
//             "condition_code": "00",
//             "wind_direction": "东北风",
//             "wind_power": "3-4",
//             "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/00.png"
//         },
//         {
//             "datetime": "2025-10-26 03:00",
//             "temperature": 21,
//             "condition": "晴",
//             "condition_code": "00",
//             "wind_direction": "东北风",
//             "wind_power": "3-4",
//             "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/00.png"
//         },
//         {
//             "datetime": "2025-10-26 04:00",
//             "temperature": 21,
//             "condition": "晴",
//             "condition_code": "00",
//             "wind_direction": "东北风",
//             "wind_power": "3-4",
//             "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/00.png"
//         },
//         {
//             "datetime": "2025-10-26 05:00",
//             "temperature": 21,
//             "condition": "晴",
//             "condition_code": "00",
//             "wind_direction": "东北风",
//             "wind_power": "3-4",
//             "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/00.png"
//         },
//         {
//             "datetime": "2025-10-26 06:00",
//             "temperature": 22,
//             "condition": "晴",
//             "condition_code": "00",
//             "wind_direction": "东北风",
//             "wind_power": "3-4",
//             "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/00.png"
//         },
//         {
//             "datetime": "2025-10-26 07:00",
//             "temperature": 22,
//             "condition": "晴",
//             "condition_code": "00",
//             "wind_direction": "东北风",
//             "wind_power": "3-4",
//             "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/baitian/00.png"
//         },
//         {
//             "datetime": "2025-10-26 08:00",
//             "temperature": 23,
//             "condition": "晴",
//             "condition_code": "00",
//             "wind_direction": "东北风",
//             "wind_power": "3-4",
//             "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/baitian/00.png"
//         },
//         {
//             "datetime": "2025-10-26 09:00",
//             "temperature": 25,
//             "condition": "晴",
//             "condition_code": "00",
//             "wind_direction": "东北风",
//             "wind_power": "3-4",
//             "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/baitian/00.png"
//         },
//         {
//             "datetime": "2025-10-26 10:00",
//             "temperature": 26,
//             "condition": "晴",
//             "condition_code": "00",
//             "wind_direction": "东北风",
//             "wind_power": "3-4",
//             "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/baitian/00.png"
//         },
//         {
//             "datetime": "2025-10-26 11:00",
//             "temperature": 27,
//             "condition": "晴",
//             "condition_code": "00",
//             "wind_direction": "东北风",
//             "wind_power": "3-4",
//             "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/baitian/00.png"
//         },
//         {
//             "datetime": "2025-10-26 12:00",
//             "temperature": 27,
//             "condition": "晴",
//             "condition_code": "00",
//             "wind_direction": "东北风",
//             "wind_power": "3-4",
//             "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/baitian/00.png"
//         },
//         {
//             "datetime": "2025-10-26 13:00",
//             "temperature": 27,
//             "condition": "晴",
//             "condition_code": "00",
//             "wind_direction": "东北风",
//             "wind_power": "3-4",
//             "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/baitian/00.png"
//         },
//         {
//             "datetime": "2025-10-26 14:00",
//             "temperature": 27,
//             "condition": "晴",
//             "condition_code": "00",
//             "wind_direction": "东北风",
//             "wind_power": "3-4",
//             "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/baitian/00.png"
//         },
//         {
//             "datetime": "2025-10-26 15:00",
//             "temperature": 27,
//             "condition": "晴",
//             "condition_code": "00",
//             "wind_direction": "东北风",
//             "wind_power": "3-4",
//             "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/baitian/00.png"
//         },
//         {
//             "datetime": "2025-10-26 16:00",
//             "temperature": 27,
//             "condition": "晴",
//             "condition_code": "00",
//             "wind_direction": "东北风",
//             "wind_power": "3-4",
//             "weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/baitian/00.png"
//         }
//     ],
//     "daily_forecast": [
//         {
//             "date": "2025-10-23",
//             "day_condition": "阴",
//             "day_condition_code": "02",
//             "night_condition": "阴",
//             "night_condition_code": "02",
//             "max_temperature": 22,
//             "min_temperature": 18,
//             "day_wind_direction": "北风",
//             "day_wind_power": "3-4",
//             "night_wind_direction": "东北风",
//             "night_wind_power": "1-3",
//             "aqi": 70,
//             "aqi_level": 2,
//             "air_quality": "良",
//             "day_weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/baitian/02.png",
//             "night_weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/02.png"
//         },
//         {
//             "date": "2025-10-24",
//             "day_condition": "多云",
//             "day_condition_code": "01",
//             "night_condition": "多云",
//             "night_condition_code": "01",
//             "max_temperature": 23,
//             "min_temperature": 19,
//             "day_wind_direction": "东北风",
//             "day_wind_power": "3-4",
//             "night_wind_direction": "东北风",
//             "night_wind_power": "3-4",
//             "aqi": 47,
//             "aqi_level": 1,
//             "air_quality": "优",
//             "day_weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/baitian/01.png",
//             "night_weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/01.png"
//         },
//         {
//             "date": "2025-10-25",
//             "day_condition": "晴",
//             "day_condition_code": "00",
//             "night_condition": "晴",
//             "night_condition_code": "00",
//             "max_temperature": 28,
//             "min_temperature": 21,
//             "day_wind_direction": "东北风",
//             "day_wind_power": "3-4",
//             "night_wind_direction": "东北风",
//             "night_wind_power": "3-4",
//             "aqi": 79,
//             "aqi_level": 2,
//             "air_quality": "良",
//             "day_weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/baitian/00.png",
//             "night_weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/00.png"
//         },
//         {
//             "date": "2025-10-26",
//             "day_condition": "多云",
//             "day_condition_code": "01",
//             "night_condition": "多云",
//             "night_condition_code": "01",
//             "max_temperature": 28,
//             "min_temperature": 22,
//             "day_wind_direction": "东北风",
//             "day_wind_power": "3-4",
//             "night_wind_direction": "东北风",
//             "night_wind_power": "3-4",
//             "aqi": 79,
//             "aqi_level": 2,
//             "air_quality": "良",
//             "day_weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/baitian/01.png",
//             "night_weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/01.png"
//         },
//         {
//             "date": "2025-10-27",
//             "day_condition": "多云",
//             "day_condition_code": "01",
//             "night_condition": "多云",
//             "night_condition_code": "01",
//             "max_temperature": 28,
//             "min_temperature": 22,
//             "day_wind_direction": "东北风",
//             "day_wind_power": "1-3",
//             "night_wind_direction": "东北风",
//             "night_wind_power": "1-3",
//             "aqi": 85,
//             "aqi_level": 2,
//             "air_quality": "良",
//             "day_weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/baitian/01.png",
//             "night_weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/01.png"
//         },
//         {
//             "date": "2025-10-28",
//             "day_condition": "多云",
//             "day_condition_code": "01",
//             "night_condition": "晴",
//             "night_condition_code": "00",
//             "max_temperature": 29,
//             "min_temperature": 22,
//             "day_wind_direction": "东北风",
//             "day_wind_power": "1-3",
//             "night_wind_direction": "东北风",
//             "night_wind_power": "1-3",
//             "aqi": 74,
//             "aqi_level": 2,
//             "air_quality": "良",
//             "day_weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/baitian/01.png",
//             "night_weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/00.png"
//         },
//         {
//             "date": "2025-10-29",
//             "day_condition": "晴",
//             "day_condition_code": "00",
//             "night_condition": "晴",
//             "night_condition_code": "00",
//             "max_temperature": 30,
//             "min_temperature": 23,
//             "day_wind_direction": "东北风",
//             "day_wind_power": "1-3",
//             "night_wind_direction": "东风",
//             "night_wind_power": "1-3",
//             "aqi": 66,
//             "aqi_level": 2,
//             "air_quality": "良",
//             "day_weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/baitian/00.png",
//             "night_weather_icon": "https://mat1.gtimg.com/qqcdn/xw/tianqi/smallIcon/heiye/00.png"
//         }
//     ],
//     "sunrise_sunset": [
//         {
//             "sunrise": "2025-10-24 06:23:00",
//             "sunrise_at": 1761286980000,
//             "sunrise_desc": "06:23",
//             "sunset": "2025-10-24 17:52:00",
//             "sunset_at": 1761328320000,
//             "sunset_desc": "17:52"
//         },
//         {
//             "sunrise": "2025-10-25 06:24:00",
//             "sunrise_at": 1761373440000,
//             "sunrise_desc": "06:24",
//             "sunset": "2025-10-25 17:51:00",
//             "sunset_at": 1761414660000,
//             "sunset_desc": "17:51"
//         },
//         {
//             "sunrise": "2025-10-26 06:24:00",
//             "sunrise_at": 1761459840000,
//             "sunrise_desc": "06:24",
//             "sunset": "2025-10-26 17:51:00",
//             "sunset_at": 1761501060000,
//             "sunset_desc": "17:51"
//         },
//         {
//             "sunrise": "2025-10-27 06:25:00",
//             "sunrise_at": 1761546300000,
//             "sunrise_desc": "06:25",
//             "sunset": "2025-10-27 17:50:00",
//             "sunset_at": 1761587400000,
//             "sunset_desc": "17:50"
//         },
//         {
//             "sunrise": "2025-10-28 06:25:00",
//             "sunrise_at": 1761632700000,
//             "sunrise_desc": "06:25",
//             "sunset": "2025-10-28 17:49:00",
//             "sunset_at": 1761673740000,
//             "sunset_desc": "17:49"
//         },
//         {
//             "sunrise": "2025-10-29 06:26:00",
//             "sunrise_at": 1761719160000,
//             "sunrise_desc": "06:26",
//             "sunset": "2025-10-29 17:49:00",
//             "sunset_at": 1761760140000,
//             "sunset_desc": "17:49"
//         },
//         {
//             "sunrise": "2025-10-30 06:26:00",
//             "sunrise_at": 1761805560000,
//             "sunrise_desc": "06:26",
//             "sunset": "2025-10-30 17:48:00",
//             "sunset_at": 1761846480000,
//             "sunset_desc": "17:48"
//         }
//     ]
// }
export const weather_icons: Record<string, string> = {
    '晴': '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 30 30"><!-- Icon from Weather Icons by Erik Flowers - https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL --><path fill="currentColor" d="M4.37 14.62c0-.24.08-.45.25-.62c.17-.16.38-.24.6-.24h2.04c.23 0 .42.08.58.25c.15.17.23.37.23.61s-.07.44-.22.61s-.35.25-.58.25H5.23c-.23 0-.43-.08-.6-.25a.83.83 0 0 1-.26-.61m2.86 6.93c0-.23.08-.43.23-.61l1.47-1.43c.15-.16.35-.23.59-.23s.44.08.6.23s.24.34.24.57c0 .24-.08.46-.24.64L8.7 22.14q-.615.48-1.23 0a.8.8 0 0 1-.24-.59m0-13.84c0-.23.08-.43.23-.61c.2-.17.41-.25.64-.25c.22 0 .42.08.59.24l1.43 1.47c.16.15.24.35.24.59q0 .36-.24.6c-.24.24-.36.24-.6.24s-.44-.08-.59-.24L7.47 8.32a.84.84 0 0 1-.24-.61m2.55 6.91c0-.93.23-1.8.7-2.6s1.1-1.44 1.91-1.91s1.67-.7 2.6-.7c.7 0 1.37.14 2.02.42c.64.28 1.2.65 1.66 1.12c.47.47.84 1.02 1.11 1.66s.41 1.32.41 2.02c0 .94-.23 1.81-.7 2.61s-1.1 1.43-1.9 1.9s-1.67.7-2.61.7s-1.81-.23-2.61-.7s-1.43-1.1-1.9-1.9c-.45-.81-.69-1.68-.69-2.62m1.7 0c0 .98.34 1.81 1.03 2.5c.68.69 1.51 1.04 2.49 1.04s1.81-.35 2.5-1.04s1.04-1.52 1.04-2.5c0-.96-.35-1.78-1.04-2.47c-.69-.68-1.52-1.02-2.5-1.02c-.97 0-1.8.34-2.48 1.02c-.7.69-1.04 1.51-1.04 2.47m2.66 7.78c0-.24.08-.44.25-.6s.37-.24.6-.24c.24 0 .45.08.61.24s.24.36.24.6v1.99c0 .24-.08.45-.25.62s-.37.25-.6.25s-.44-.08-.6-.25a.85.85 0 0 1-.25-.62zm0-15.5V4.86c0-.23.08-.43.25-.6S14.76 4 15 4s.43.08.6.25s.25.37.25.6V6.9c0 .23-.08.42-.25.58s-.37.23-.6.23s-.44-.08-.6-.23s-.26-.35-.26-.58m5.52 13.18c0-.23.08-.42.23-.56c.15-.16.34-.23.56-.23c.24 0 .44.08.6.23l1.46 1.43c.16.17.24.38.24.61s-.08.43-.24.59q-.6.465-1.2 0l-1.42-1.42a.97.97 0 0 1-.23-.65m0-10.92c0-.25.08-.45.23-.59l1.42-1.47a.84.84 0 0 1 .59-.24c.24 0 .44.08.6.25c.17.17.25.37.25.6c0 .25-.08.46-.24.62l-1.46 1.43q-.27.24-.6.24c-.23 0-.41-.08-.56-.24s-.23-.36-.23-.6m2.26 5.46c0-.24.08-.44.24-.62q.24-.24.57-.24h2.02c.23 0 .43.09.6.26s.26.37.26.6s-.09.43-.26.6s-.37.25-.6.25h-2.02c-.23 0-.43-.08-.58-.25s-.23-.36-.23-.6"/></svg>',
    '晴转多云': '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 30 30"><!-- Icon from Weather Icons by Erik Flowers - https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL --><path fill="currentColor" d="M1.56 16.9q0 1.35.66 2.49c.66 1.14 1.04 1.36 1.8 1.8s1.58.66 2.47.66h10.83c.89 0 1.72-.22 2.48-.66s1.37-1.04 1.81-1.8s.67-1.59.67-2.49c0-.66-.14-1.33-.42-2c.76-.92 1.14-2.03 1.14-3.3c0-.71-.14-1.39-.41-2.04s-.65-1.2-1.12-1.67s-1.02-.85-1.67-1.12c-.65-.28-1.33-.41-2.04-.41c-1.48 0-2.77.58-3.88 1.74q-1.155-.66-2.7-.66c-1.41 0-2.65.44-3.73 1.31a5.8 5.8 0 0 0-2.08 3.35c-1.12.26-2.03.83-2.74 1.73s-1.07 1.92-1.07 3.07m1.71 0c0-.84.28-1.56.84-2.17s1.26-.96 2.1-1.06l.5-.03c.12 0 .19-.06.19-.18l.07-.54c.14-1.08.61-1.99 1.41-2.71c.8-.73 1.74-1.09 2.81-1.09c1.1 0 2.06.37 2.87 1.1a4 4 0 0 1 1.37 2.71l.07.58c.02.11.09.17.21.17h1.61q1.32 0 2.28.96c.64.64.96 1.39.96 2.27c0 .91-.32 1.68-.95 2.32s-1.4.96-2.28.96H6.49c-.88 0-1.63-.32-2.27-.97c-.63-.65-.95-1.42-.95-2.32m6.7-12.27q0 .36.24.63l.66.64c.25.19.46.27.64.25c.21 0 .39-.09.55-.26s.24-.38.24-.62s-.09-.44-.26-.59l-.59-.66a.9.9 0 0 0-.61-.24c-.24 0-.45.08-.62.25c-.17.16-.25.36-.25.6m5.34 4.43c.69-.67 1.51-1 2.45-1c.99 0 1.83.34 2.52 1.03s1.04 1.52 1.04 2.51c0 .62-.17 1.24-.51 1.84c-.97-.96-2.13-1.44-3.49-1.44H17c-.25-1.09-.81-2.07-1.69-2.94m1.63-5.28c0 .26.08.46.23.62s.35.23.59.23c.26 0 .46-.08.62-.23c.16-.16.23-.36.23-.62V1.73c0-.24-.08-.43-.24-.59s-.36-.23-.61-.23c-.24 0-.43.08-.59.23s-.23.35-.23.59zm5.52 2.29c0 .26.07.46.22.62c.21.16.42.24.62.24c.18 0 .38-.08.59-.24l1.43-1.43c.16-.18.24-.39.24-.64q0-.36-.24-.6a.8.8 0 0 0-.59-.24c-.24 0-.43.08-.58.24l-1.47 1.43c-.15.19-.22.39-.22.62m.79 11.84c0 .24.08.45.25.63l.65.63c.15.16.34.24.58.24s.44-.08.6-.25a.86.86 0 0 0 .24-.62c0-.22-.08-.42-.24-.58l-.65-.65a.78.78 0 0 0-.57-.24q-.36 0-.6.24c-.17.16-.26.36-.26.6m1.47-6.31c0 .23.09.42.26.58c.16.16.37.24.61.24h2.04c.23 0 .42-.08.58-.23s.23-.35.23-.59s-.08-.44-.23-.6s-.35-.25-.58-.25h-2.04c-.24 0-.44.08-.61.25a.8.8 0 0 0-.26.6"/></svg>',
    '多云': '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 30 30"><!-- Icon from Weather Icons by Erik Flowers - https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL --><path fill="currentColor" d="M1.56 16.9q0 1.35.66 2.49c.66 1.14 1.04 1.36 1.8 1.8s1.58.66 2.47.66h10.83c.89 0 1.72-.22 2.48-.66s1.37-1.04 1.81-1.8s.67-1.59.67-2.49c0-.66-.14-1.33-.42-2c.76-.92 1.14-2.03 1.14-3.3c0-.71-.14-1.39-.41-2.04s-.65-1.2-1.12-1.67s-1.02-.85-1.67-1.12c-.65-.28-1.33-.41-2.04-.41c-1.48 0-2.77.58-3.88 1.74q-1.155-.66-2.7-.66c-1.41 0-2.65.44-3.73 1.31a5.8 5.8 0 0 0-2.08 3.35c-1.12.26-2.03.83-2.74 1.73s-1.07 1.92-1.07 3.07m1.71 0c0-.84.28-1.56.84-2.17s1.26-.96 2.1-1.06l.5-.03c.12 0 .19-.06.19-.18l.07-.54c.14-1.08.61-1.99 1.41-2.71c.8-.73 1.74-1.09 2.81-1.09c1.1 0 2.06.37 2.87 1.1a4 4 0 0 1 1.37 2.71l.07.58c.02.11.09.17.21.17h1.61q1.32 0 2.28.96c.64.64.96 1.39.96 2.27c0 .91-.32 1.68-.95 2.32s-1.4.96-2.28.96H6.49c-.88 0-1.63-.32-2.27-.97c-.63-.65-.95-1.42-.95-2.32m6.7-12.27q0 .36.24.63l.66.64c.25.19.46.27.64.25c.21 0 .39-.09.55-.26s.24-.38.24-.62s-.09-.44-.26-.59l-.59-.66a.9.9 0 0 0-.61-.24c-.24 0-.45.08-.62.25c-.17.16-.25.36-.25.6m5.34 4.43c.69-.67 1.51-1 2.45-1c.99 0 1.83.34 2.52 1.03s1.04 1.52 1.04 2.51c0 .62-.17 1.24-.51 1.84c-.97-.96-2.13-1.44-3.49-1.44H17c-.25-1.09-.81-2.07-1.69-2.94m1.63-5.28c0 .26.08.46.23.62s.35.23.59.23c.26 0 .46-.08.62-.23c.16-.16.23-.36.23-.62V1.73c0-.24-.08-.43-.24-.59s-.36-.23-.61-.23c-.24 0-.43.08-.59.23s-.23.35-.23.59zm5.52 2.29c0 .26.07.46.22.62c.21.16.42.24.62.24c.18 0 .38-.08.59-.24l1.43-1.43c.16-.18.24-.39.24-.64q0-.36-.24-.6a.8.8 0 0 0-.59-.24c-.24 0-.43.08-.58.24l-1.47 1.43c-.15.19-.22.39-.22.62m.79 11.84c0 .24.08.45.25.63l.65.63c.15.16.34.24.58.24s.44-.08.6-.25a.86.86 0 0 0 .24-.62c0-.22-.08-.42-.24-.58l-.65-.65a.78.78 0 0 0-.57-.24q-.36 0-.6.24c-.17.16-.26.36-.26.6m1.47-6.31c0 .23.09.42.26.58c.16.16.37.24.61.24h2.04c.23 0 .42-.08.58-.23s.23-.35.23-.59s-.08-.44-.23-.6s-.35-.25-.58-.25h-2.04c-.24 0-.44.08-.61.25a.8.8 0 0 0-.26.6"/></svg>',
    '阴': '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 30 30"><!-- Icon from Weather Icons by Erik Flowers - https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL --><path fill="currentColor" d="M3.89 17.6c0-.99.31-1.88.93-2.65s1.41-1.27 2.38-1.49c.26-1.17.85-2.14 1.78-2.88c.93-.75 2-1.12 3.22-1.12c1.18 0 2.24.36 3.16 1.09c.93.73 1.53 1.66 1.8 2.8h.27c1.18 0 2.18.41 3.01 1.24s1.25 1.83 1.25 3c0 1.18-.42 2.18-1.25 3.01s-1.83 1.25-3.01 1.25H8.16c-.58 0-1.13-.11-1.65-.34s-.99-.51-1.37-.89s-.68-.84-.91-1.36s-.34-1.09-.34-1.66m1.45 0c0 .76.28 1.42.82 1.96s1.21.82 1.99.82h9.28c.77 0 1.44-.27 1.99-.82s.83-1.2.83-1.96s-.27-1.42-.83-1.96c-.55-.54-1.21-.82-1.99-.82h-1.39q-.15 0-.15-.15l-.07-.49c-.1-.94-.5-1.73-1.19-2.35s-1.51-.93-2.45-.93s-1.76.31-2.46.94c-.7.62-1.09 1.41-1.18 2.34l-.07.42c0 .1-.05.15-.16.15l-.45.07c-.72.06-1.32.36-1.81.89c-.46.53-.71 1.16-.71 1.89m8.85-8.72c-.1.09-.08.16.07.21c.43.19.79.37 1.08.55c.11.03.19.02.22-.03c.61-.57 1.31-.86 2.12-.86s1.5.27 2.1.81c.59.54.92 1.21.99 2l.09.64h1.42c.65 0 1.21.23 1.68.7s.7 1.02.7 1.66c0 .6-.21 1.12-.62 1.57s-.92.7-1.53.77c-.1 0-.15.05-.15.16v1.13c0 .11.05.16.15.16c1.01-.06 1.86-.46 2.55-1.19s1.04-1.6 1.04-2.6c0-1.06-.37-1.96-1.12-2.7c-.75-.75-1.65-1.12-2.7-1.12h-.15c-.26-1-.81-1.82-1.65-2.47c-.83-.65-1.77-.97-2.8-.97c-1.4-.01-2.57.52-3.49 1.58"/></svg>',
    '雨': '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 30 30"><!-- Icon from Weather Icons by Erik Flowers - https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL --><path fill="currentColor" d="M4.64 16.91c0-1.15.36-2.17 1.08-3.07a4.82 4.82 0 0 1 2.73-1.73c.31-1.36 1.02-2.48 2.11-3.36s2.34-1.31 3.75-1.31c1.38 0 2.6.43 3.68 1.28s1.78 1.95 2.1 3.29h.32c.89 0 1.72.22 2.48.65s1.37 1.03 1.81 1.78s.67 1.58.67 2.47c0 .88-.21 1.69-.63 2.44s-1 1.35-1.73 1.8s-1.53.69-2.4.71c-.13 0-.2-.06-.2-.17v-1.33c0-.12.07-.18.2-.18c.85-.04 1.58-.38 2.18-1.02s.9-1.39.9-2.26s-.33-1.62-.98-2.26s-1.42-.96-2.31-.96h-1.61c-.12 0-.18-.06-.18-.17l-.08-.58a4.08 4.08 0 0 0-1.39-2.71c-.82-.73-1.76-1.09-2.85-1.09s-2.05.36-2.85 1.09a4.02 4.02 0 0 0-1.36 2.71l-.07.53c0 .12-.07.19-.2.19l-.53.03c-.83.1-1.53.46-2.1 1.07s-.85 1.33-.85 2.16c0 .87.3 1.62.9 2.26s1.33.98 2.18 1.02c.11 0 .17.06.17.18v1.33c0 .11-.06.17-.17.17c-1.34-.06-2.47-.57-3.4-1.53s-1.37-2.1-1.37-3.43m5.35 6.69c0-.04.01-.11.04-.2l1.63-5.77a.837.837 0 0 1 1.02-.56c.24.04.42.17.54.37s.15.42.08.67l-1.63 5.73c-.12.43-.4.64-.82.64c-.04 0-.07-.01-.11-.02c-.06-.02-.09-.03-.1-.03a.83.83 0 0 1-.49-.33a.9.9 0 0 1-.16-.5m2.62 2.81l2.44-8.77c.04-.19.14-.34.3-.44s.32-.15.49-.15q.135 0 .27.03c.22.06.38.19.49.39s.13.41.07.64l-2.43 8.78c-.04.17-.13.31-.29.43s-.32.18-.51.18c-.09 0-.18-.02-.25-.05c-.2-.05-.37-.18-.52-.39c-.11-.18-.13-.39-.06-.65m4.13-2.79c0-.04.01-.11.04-.23l1.63-5.77a.83.83 0 0 1 .3-.44c.15-.1.3-.15.46-.15c.08 0 .17.01.26.03c.21.06.36.16.46.31s.15.31.15.47c0 .03-.01.08-.02.14s-.02.1-.02.12l-1.63 5.73c-.04.19-.13.35-.28.46s-.32.17-.51.17l-.24-.05a.8.8 0 0 1-.46-.32a.9.9 0 0 1-.14-.47"/></svg>',
    '小雨': '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 30 30"><!-- Icon from Weather Icons by Erik Flowers - https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL --><path fill="currentColor" d="M4.64 16.91c0-1.15.36-2.17 1.08-3.07a4.82 4.82 0 0 1 2.73-1.73c.31-1.36 1.02-2.48 2.11-3.36s2.34-1.31 3.75-1.31c1.38 0 2.6.43 3.68 1.28s1.78 1.95 2.1 3.29h.32c.89 0 1.72.22 2.48.65s1.37 1.03 1.81 1.78s.67 1.58.67 2.47c0 .88-.21 1.69-.63 2.44s-1 1.35-1.73 1.8s-1.53.69-2.4.71c-.13 0-.2-.06-.2-.17v-1.33c0-.12.07-.18.2-.18c.85-.04 1.58-.38 2.18-1.02s.9-1.39.9-2.26s-.33-1.62-.98-2.26s-1.42-.96-2.31-.96h-1.61c-.12 0-.18-.06-.18-.17l-.08-.58a4.08 4.08 0 0 0-1.39-2.71c-.82-.73-1.76-1.09-2.85-1.09s-2.05.36-2.85 1.09a4.02 4.02 0 0 0-1.36 2.71l-.07.53c0 .12-.07.19-.2.19l-.53.03c-.83.1-1.53.46-2.1 1.07s-.85 1.33-.85 2.16c0 .87.3 1.62.9 2.26s1.33.98 2.18 1.02c.11 0 .17.06.17.18v1.33c0 .11-.06.17-.17.17c-1.34-.06-2.47-.57-3.4-1.53s-1.37-2.1-1.37-3.43m5.35 6.69c0-.04.01-.11.04-.2l1.63-5.77a.837.837 0 0 1 1.02-.56c.24.04.42.17.54.37s.15.42.08.67l-1.63 5.73c-.12.43-.4.64-.82.64c-.04 0-.07-.01-.11-.02c-.06-.02-.09-.03-.1-.03a.83.83 0 0 1-.49-.33a.9.9 0 0 1-.16-.5m2.62 2.81l2.44-8.77c.04-.19.14-.34.3-.44s.32-.15.49-.15q.135 0 .27.03c.22.06.38.19.49.39s.13.41.07.64l-2.43 8.78c-.04.17-.13.31-.29.43s-.32.18-.51.18c-.09 0-.18-.02-.25-.05c-.2-.05-.37-.18-.52-.39c-.11-.18-.13-.39-.06-.65m4.13-2.79c0-.04.01-.11.04-.23l1.63-5.77a.83.83 0 0 1 .3-.44c.15-.1.3-.15.46-.15c.08 0 .17.01.26.03c.21.06.36.16.46.31s.15.31.15.47c0 .03-.01.08-.02.14s-.02.1-.02.12l-1.63 5.73c-.04.19-.13.35-.28.46s-.32.17-.51.17l-.24-.05a.8.8 0 0 1-.46-.32a.9.9 0 0 1-.14-.47"/></svg>',
    '小到中雨': '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 30 30"><!-- Icon from Weather Icons by Erik Flowers - https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL --><path fill="currentColor" d="M4.63 16.93c0 1.12.33 2.11.98 2.99c.65.87 1.5 1.47 2.55 1.79c.09.02.17-.01.24-.08l1.16-1.43q-1.335 0-2.28-.96c-.63-.64-.95-1.41-.95-2.31c0-.84.28-1.58.84-2.2s1.26-.97 2.1-1.04l.53-.07c.11 0 .16-.04.16-.13l.08-.55c.12-1.1.59-2.01 1.39-2.73s1.75-1.08 2.85-1.08s2.06.36 2.87 1.09c.82.73 1.27 1.64 1.37 2.72l.07.58c.02.11.1.17.22.17h1.62c.9 0 1.67.32 2.3.95s.95 1.39.95 2.29c0 .83-.28 1.56-.84 2.18s-1.25.98-2.07 1.08c-.12 0-.28.02-.49.06c-.19.02-.33.09-.41.23l-2.36 2.79a.78.78 0 0 0-.16.63c.03.24.14.43.31.57c.11.12.29.19.56.19c.26 0 .47-.12.61-.35l2.12-2.44c1.24-.13 2.29-.66 3.15-1.61s1.28-2.06 1.28-3.33c0-.67-.13-1.32-.39-1.93a5 5 0 0 0-1.05-1.58a5 5 0 0 0-1.58-1.05a4.9 4.9 0 0 0-1.93-.39h-.32c-.33-1.32-1.04-2.41-2.12-3.26s-2.32-1.27-3.72-1.27c-.93 0-1.81.2-2.63.6S10.13 9 9.56 9.71s-.94 1.52-1.13 2.42c-1.12.25-2.04.82-2.75 1.72c-.7.89-1.05 1.92-1.05 3.08m3.38 8.02q0 .09.06.3c.09.21.23.36.44.44c.22.1.44.11.67.02a.76.76 0 0 0 .46-.45c.1-.22.11-.43.02-.65a.73.73 0 0 0-.46-.43a.75.75 0 0 0-.65-.03a.85.85 0 0 0-.46.47a.7.7 0 0 0-.08.33m1.85-2.44v.1c.02.23.12.41.3.56c.23.13.43.19.62.19c.22 0 .43-.11.61-.33l2.32-2.77c.14-.17.21-.39.2-.66a.8.8 0 0 0-.28-.53c-.16-.14-.33-.22-.52-.22c-.06 0-.1 0-.14.01c-.23.04-.42.15-.56.33l-2.36 2.77c-.13.16-.19.34-.19.55m.77 4.72c0 .12.03.23.08.32c.08.21.23.37.44.47c.11.05.22.07.33.07c.12 0 .23-.02.31-.07c.23-.09.39-.23.47-.41c.1-.22.11-.44.02-.67a.71.71 0 0 0-.45-.46a.82.82 0 0 0-.67-.02q-.345.135-.45.45c-.06.09-.08.2-.08.32m1.67-2.35v.11c.02.22.13.4.31.55s.37.22.55.22c.23 0 .43-.11.63-.33l4.35-5.24c.11-.12.17-.3.17-.52v-.12c-.02-.23-.12-.4-.27-.53s-.33-.2-.52-.2h-.13c-.23.01-.42.12-.55.31l-4.35 5.2c-.14.18-.19.36-.19.55m3.51 1.15q0 .135.06.3c.09.22.24.38.46.47c.14.04.24.06.31.06c.14 0 .26-.03.34-.08c.22-.09.38-.23.46-.42c.1-.17.11-.39.02-.67a.76.76 0 0 0-.44-.44l-.36-.09c-.09.02-.19.04-.32.07c-.22.08-.37.23-.45.44c-.05.13-.08.25-.08.36"/></svg>',
    '中雨': '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 30 30"><!-- Icon from Weather Icons by Erik Flowers - https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL --><path fill="currentColor" d="M4.63 16.93c0 1.12.33 2.11.98 2.99c.65.87 1.5 1.47 2.55 1.79c.09.02.17-.01.24-.08l1.16-1.43q-1.335 0-2.28-.96c-.63-.64-.95-1.41-.95-2.31c0-.84.28-1.58.84-2.2s1.26-.97 2.1-1.04l.53-.07c.11 0 .16-.04.16-.13l.08-.55c.12-1.1.59-2.01 1.39-2.73s1.75-1.08 2.85-1.08s2.06.36 2.87 1.09c.82.73 1.27 1.64 1.37 2.72l.07.58c.02.11.1.17.22.17h1.62c.9 0 1.67.32 2.3.95s.95 1.39.95 2.29c0 .83-.28 1.56-.84 2.18s-1.25.98-2.07 1.08c-.12 0-.28.02-.49.06c-.19.02-.33.09-.41.23l-2.36 2.79a.78.78 0 0 0-.16.63c.03.24.14.43.31.57c.11.12.29.19.56.19c.26 0 .47-.12.61-.35l2.12-2.44c1.24-.13 2.29-.66 3.15-1.61s1.28-2.06 1.28-3.33c0-.67-.13-1.32-.39-1.93a5 5 0 0 0-1.05-1.58a5 5 0 0 0-1.58-1.05a4.9 4.9 0 0 0-1.93-.39h-.32c-.33-1.32-1.04-2.41-2.12-3.26s-2.32-1.27-3.72-1.27c-.93 0-1.81.2-2.63.6S10.13 9 9.56 9.71s-.94 1.52-1.13 2.42c-1.12.25-2.04.82-2.75 1.72c-.7.89-1.05 1.92-1.05 3.08m3.38 8.02q0 .09.06.3c.09.21.23.36.44.44c.22.1.44.11.67.02a.76.76 0 0 0 .46-.45c.1-.22.11-.43.02-.65a.73.73 0 0 0-.46-.43a.75.75 0 0 0-.65-.03a.85.85 0 0 0-.46.47a.7.7 0 0 0-.08.33m1.85-2.44v.1c.02.23.12.41.3.56c.23.13.43.19.62.19c.22 0 .43-.11.61-.33l2.32-2.77c.14-.17.21-.39.2-.66a.8.8 0 0 0-.28-.53c-.16-.14-.33-.22-.52-.22c-.06 0-.1 0-.14.01c-.23.04-.42.15-.56.33l-2.36 2.77c-.13.16-.19.34-.19.55m.77 4.72c0 .12.03.23.08.32c.08.21.23.37.44.47c.11.05.22.07.33.07c.12 0 .23-.02.31-.07c.23-.09.39-.23.47-.41c.1-.22.11-.44.02-.67a.71.71 0 0 0-.45-.46a.82.82 0 0 0-.67-.02q-.345.135-.45.45c-.06.09-.08.2-.08.32m1.67-2.35v.11c.02.22.13.4.31.55s.37.22.55.22c.23 0 .43-.11.63-.33l4.35-5.24c.11-.12.17-.3.17-.52v-.12c-.02-.23-.12-.4-.27-.53s-.33-.2-.52-.2h-.13c-.23.01-.42.12-.55.31l-4.35 5.2c-.14.18-.19.36-.19.55m3.51 1.15q0 .135.06.3c.09.22.24.38.46.47c.14.04.24.06.31.06c.14 0 .26-.03.34-.08c.22-.09.38-.23.46-.42c.1-.17.11-.39.02-.67a.76.76 0 0 0-.44-.44l-.36-.09c-.09.02-.19.04-.32.07c-.22.08-.37.23-.45.44c-.05.13-.08.25-.08.36"/></svg>',
    '中到大雨': '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 30 30"><!-- Icon from Weather Icons by Erik Flowers - https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL --><path fill="currentColor" d="M4.65 16.96c0 1.32.47 2.46 1.4 3.41c.93.96 2.06 1.46 3.38 1.5c.12 0 .18-.06.18-.17v-1.33q0-.18-.18-.18c-.84-.04-1.57-.38-2.17-1.02s-.91-1.37-.91-2.22c0-.84.28-1.57.85-2.19s1.26-.97 2.1-1.04l.53-.07c.12 0 .19-.06.19-.18l.07-.5c.1-1.09.55-2.01 1.36-2.75s1.76-1.11 2.86-1.11c1.08 0 2.03.37 2.84 1.1s1.28 1.63 1.4 2.71l.07.58c0 .12.06.18.19.18h1.6c.9 0 1.67.32 2.32.97c.64.64.97 1.41.97 2.3q0 1.26-.9 2.22c-.6.63-1.33.97-2.18 1.02c-.13 0-.2.06-.2.18v1.33c0 .11.07.17.2.17c1.33-.04 2.46-.54 3.38-1.5s1.38-2.09 1.38-3.42c0-.89-.22-1.72-.67-2.48a4.9 4.9 0 0 0-1.81-1.8c-.76-.44-1.59-.66-2.48-.66h-.31A5.9 5.9 0 0 0 18 8.72a5.76 5.76 0 0 0-3.68-1.28c-1.41 0-2.66.44-3.75 1.31s-1.79 1.99-2.1 3.35c-1.13.29-2.04.88-2.75 1.77s-1.07 1.93-1.07 3.09m5.4 7.02c0 .17.05.34.16.51s.27.28.47.35c.23.07.44.06.64-.04c.19-.09.33-.28.39-.56l.14-.61a.853.853 0 0 0-.61-1.03c-.22-.07-.44-.04-.64.08s-.34.3-.4.53l-.14.59c0 .03-.01.09-.01.18m.76-2.9c0 .21.08.4.25.57c.16.17.34.25.56.25q.36 0 .6-.24c.16-.16.24-.35.24-.59c0-.23-.08-.43-.24-.59a.8.8 0 0 0-.6-.24c-.23 0-.42.08-.58.23c-.15.18-.23.38-.23.61m.61-2.27c-.01.16.03.31.14.45c.1.15.26.25.48.32c.21.06.41.04.62-.07s.34-.28.41-.51l.28-.9c.07-.24.05-.46-.07-.65a.9.9 0 0 0-.54-.39a.74.74 0 0 0-.63.07a.85.85 0 0 0-.41.5l-.24.92c0 .02-.01.06-.02.12c-.01.05-.02.1-.02.14m1.17 8.29c0 .18.05.34.15.5q.15.24.48.33c.08.02.17.03.25.03c.43 0 .69-.2.79-.61l.14-.59a.92.92 0 0 0-.08-.68a.77.77 0 0 0-.52-.37a.74.74 0 0 0-.63.07c-.21.12-.34.29-.41.51l-.14.59c-.02.09-.03.16-.03.22m.77-2.9c0 .22.08.41.25.58q.24.24.57.24c.24 0 .43-.08.59-.23c.16-.16.23-.35.23-.59a.784.784 0 0 0-.82-.81c-.24 0-.43.08-.59.23s-.23.35-.23.58m.63-2.27c-.01.15.03.31.13.47q.15.24.45.3c.23.06.44.04.64-.06s.33-.29.41-.56l.27-.9c.07-.22.05-.43-.07-.63a.87.87 0 0 0-.53-.4a.77.77 0 0 0-.64.08c-.21.12-.34.3-.41.53l-.23.9c-.01.08-.02.17-.02.27m2.76 2.15q0 .24.15.48c.1.16.26.27.46.33c.03 0 .08.01.14.02s.1.02.14.02c.41 0 .66-.22.76-.66l.14-.6c.07-.21.05-.42-.07-.63a.8.8 0 0 0-.51-.41c-.25-.06-.48-.04-.68.08s-.34.29-.41.53l-.09.59c0 .02-.01.07-.02.12s-.01.09-.01.13m.74-2.96c0 .22.08.42.25.57q.225.24.57.24c.24 0 .43-.08.59-.23s.23-.35.23-.58c0-.24-.08-.43-.23-.59s-.35-.23-.59-.23s-.43.08-.59.23c-.15.16-.23.35-.23.59m.61-2.31c0 .17.05.33.16.48s.27.26.49.32c.02 0 .06.01.12.02s.11.02.14.02q.15 0 .36-.09c.21-.11.35-.29.41-.52l.24-.9c.06-.23.04-.44-.08-.63a.83.83 0 0 0-.51-.4a.8.8 0 0 0-.64.06c-.19.11-.33.27-.39.51l-.28.91c0 .02-.01.06-.02.12z"/></svg>',
    '大雨': '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 30 30"><!-- Icon from Weather Icons by Erik Flowers - https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL --><path fill="currentColor" d="M4.65 16.96c0 1.32.47 2.46 1.4 3.41c.93.96 2.06 1.46 3.38 1.5c.12 0 .18-.06.18-.17v-1.33q0-.18-.18-.18c-.84-.04-1.57-.38-2.17-1.02s-.91-1.37-.91-2.22c0-.84.28-1.57.85-2.19s1.26-.97 2.1-1.04l.53-.07c.12 0 .19-.06.19-.18l.07-.5c.1-1.09.55-2.01 1.36-2.75s1.76-1.11 2.86-1.11c1.08 0 2.03.37 2.84 1.1s1.28 1.63 1.4 2.71l.07.58c0 .12.06.18.19.18h1.6c.9 0 1.67.32 2.32.97c.64.64.97 1.41.97 2.3q0 1.26-.9 2.22c-.6.63-1.33.97-2.18 1.02c-.13 0-.2.06-.2.18v1.33c0 .11.07.17.2.17c1.33-.04 2.46-.54 3.38-1.5s1.38-2.09 1.38-3.42c0-.89-.22-1.72-.67-2.48a4.9 4.9 0 0 0-1.81-1.8c-.76-.44-1.59-.66-2.48-.66h-.31A5.9 5.9 0 0 0 18 8.72a5.76 5.76 0 0 0-3.68-1.28c-1.41 0-2.66.44-3.75 1.31s-1.79 1.99-2.1 3.35c-1.13.29-2.04.88-2.75 1.77s-1.07 1.93-1.07 3.09m5.4 7.02c0 .17.05.34.16.51s.27.28.47.35c.23.07.44.06.64-.04c.19-.09.33-.28.39-.56l.14-.61a.853.853 0 0 0-.61-1.03c-.22-.07-.44-.04-.64.08s-.34.3-.4.53l-.14.59c0 .03-.01.09-.01.18m.76-2.9c0 .21.08.4.25.57c.16.17.34.25.56.25q.36 0 .6-.24c.16-.16.24-.35.24-.59c0-.23-.08-.43-.24-.59a.8.8 0 0 0-.6-.24c-.23 0-.42.08-.58.23c-.15.18-.23.38-.23.61m.61-2.27c-.01.16.03.31.14.45c.1.15.26.25.48.32c.21.06.41.04.62-.07s.34-.28.41-.51l.28-.9c.07-.24.05-.46-.07-.65a.9.9 0 0 0-.54-.39a.74.74 0 0 0-.63.07a.85.85 0 0 0-.41.5l-.24.92c0 .02-.01.06-.02.12c-.01.05-.02.1-.02.14m1.17 8.29c0 .18.05.34.15.5q.15.24.48.33c.08.02.17.03.25.03c.43 0 .69-.2.79-.61l.14-.59a.92.92 0 0 0-.08-.68a.77.77 0 0 0-.52-.37a.74.74 0 0 0-.63.07c-.21.12-.34.29-.41.51l-.14.59c-.02.09-.03.16-.03.22m.77-2.9c0 .22.08.41.25.58q.24.24.57.24c.24 0 .43-.08.59-.23c.16-.16.23-.35.23-.59a.784.784 0 0 0-.82-.81c-.24 0-.43.08-.59.23s-.23.35-.23.58m.63-2.27c-.01.15.03.31.13.47q.15.24.45.3c.23.06.44.04.64-.06s.33-.29.41-.56l.27-.9c.07-.22.05-.43-.07-.63a.87.87 0 0 0-.53-.4a.77.77 0 0 0-.64.08c-.21.12-.34.3-.41.53l-.23.9c-.01.08-.02.17-.02.27m2.76 2.15q0 .24.15.48c.1.16.26.27.46.33c.03 0 .08.01.14.02s.1.02.14.02c.41 0 .66-.22.76-.66l.14-.6c.07-.21.05-.42-.07-.63a.8.8 0 0 0-.51-.41c-.25-.06-.48-.04-.68.08s-.34.29-.41.53l-.09.59c0 .02-.01.07-.02.12s-.01.09-.01.13m.74-2.96c0 .22.08.42.25.57q.225.24.57.24c.24 0 .43-.08.59-.23s.23-.35.23-.58c0-.24-.08-.43-.23-.59s-.35-.23-.59-.23s-.43.08-.59.23c-.15.16-.23.35-.23.59m.61-2.31c0 .17.05.33.16.48s.27.26.49.32c.02 0 .06.01.12.02s.11.02.14.02q.15 0 .36-.09c.21-.11.35-.29.41-.52l.24-.9c.06-.23.04-.44-.08-.63a.83.83 0 0 0-.51-.4a.8.8 0 0 0-.64.06c-.19.11-.33.27-.39.51l-.28.91c0 .02-.01.06-.02.12z"/></svg>',
    '大到暴雨': '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 30 30"><!-- Icon from Weather Icons by Erik Flowers - https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL --><path fill="currentColor" d="M4.65 16.96c0 1.32.47 2.46 1.4 3.41c.93.96 2.06 1.46 3.38 1.5c.12 0 .18-.06.18-.17v-1.33q0-.18-.18-.18c-.84-.04-1.57-.38-2.17-1.02s-.91-1.37-.91-2.22c0-.84.28-1.57.85-2.19s1.26-.97 2.1-1.04l.53-.07c.12 0 .19-.06.19-.18l.07-.5c.1-1.09.55-2.01 1.36-2.75s1.76-1.11 2.86-1.11c1.08 0 2.03.37 2.84 1.1s1.28 1.63 1.4 2.71l.07.58c0 .12.06.18.19.18h1.6c.9 0 1.67.32 2.32.97c.64.64.97 1.41.97 2.3q0 1.26-.9 2.22c-.6.63-1.33.97-2.18 1.02c-.13 0-.2.06-.2.18v1.33c0 .11.07.17.2.17c1.33-.04 2.46-.54 3.38-1.5s1.38-2.09 1.38-3.42c0-.89-.22-1.72-.67-2.48a4.9 4.9 0 0 0-1.81-1.8c-.76-.44-1.59-.66-2.48-.66h-.31A5.9 5.9 0 0 0 18 8.72a5.76 5.76 0 0 0-3.68-1.28c-1.41 0-2.66.44-3.75 1.31s-1.79 1.99-2.1 3.35c-1.13.29-2.04.88-2.75 1.77s-1.07 1.93-1.07 3.09m5.4 7.02c0 .17.05.34.16.51s.27.28.47.35c.23.07.44.06.64-.04c.19-.09.33-.28.39-.56l.14-.61a.853.853 0 0 0-.61-1.03c-.22-.07-.44-.04-.64.08s-.34.3-.4.53l-.14.59c0 .03-.01.09-.01.18m.76-2.9c0 .21.08.4.25.57c.16.17.34.25.56.25q.36 0 .6-.24c.16-.16.24-.35.24-.59c0-.23-.08-.43-.24-.59a.8.8 0 0 0-.6-.24c-.23 0-.42.08-.58.23c-.15.18-.23.38-.23.61m.61-2.27c-.01.16.03.31.14.45c.1.15.26.25.48.32c.21.06.41.04.62-.07s.34-.28.41-.51l.28-.9c.07-.24.05-.46-.07-.65a.9.9 0 0 0-.54-.39a.74.74 0 0 0-.63.07a.85.85 0 0 0-.41.5l-.24.92c0 .02-.01.06-.02.12c-.01.05-.02.1-.02.14m1.17 8.29c0 .18.05.34.15.5q.15.24.48.33c.08.02.17.03.25.03c.43 0 .69-.2.79-.61l.14-.59a.92.92 0 0 0-.08-.68a.77.77 0 0 0-.52-.37a.74.74 0 0 0-.63.07c-.21.12-.34.29-.41.51l-.14.59c-.02.09-.03.16-.03.22m.77-2.9c0 .22.08.41.25.58q.24.24.57.24c.24 0 .43-.08.59-.23c.16-.16.23-.35.23-.59a.784.784 0 0 0-.82-.81c-.24 0-.43.08-.59.23s-.23.35-.23.58m.63-2.27c-.01.15.03.31.13.47q.15.24.45.3c.23.06.44.04.64-.06s.33-.29.41-.56l.27-.9c.07-.22.05-.43-.07-.63a.87.87 0 0 0-.53-.4a.77.77 0 0 0-.64.08c-.21.12-.34.3-.41.53l-.23.9c-.01.08-.02.17-.02.27m2.76 2.15q0 .24.15.48c.1.16.26.27.46.33c.03 0 .08.01.14.02s.1.02.14.02c.41 0 .66-.22.76-.66l.14-.6c.07-.21.05-.42-.07-.63a.8.8 0 0 0-.51-.41c-.25-.06-.48-.04-.68.08s-.34.29-.41.53l-.09.59c0 .02-.01.07-.02.12s-.01.09-.01.13m.74-2.96c0 .22.08.42.25.57q.225.24.57.24c.24 0 .43-.08.59-.23s.23-.35.23-.58c0-.24-.08-.43-.23-.59s-.35-.23-.59-.23s-.43.08-.59.23c-.15.16-.23.35-.23.59m.61-2.31c0 .17.05.33.16.48s.27.26.49.32c.02 0 .06.01.12.02s.11.02.14.02q.15 0 .36-.09c.21-.11.35-.29.41-.52l.24-.9c.06-.23.04-.44-.08-.63a.83.83 0 0 0-.51-.4a.8.8 0 0 0-.64.06c-.19.11-.33.27-.39.51l-.28.91c0 .02-.01.06-.02.12z"/></svg>',
    '雪': '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 30 30"><!-- Icon from Weather Icons by Erik Flowers - https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL --><path fill="currentColor" d="M4.64 16.95c0-1.16.35-2.18 1.06-3.08s1.62-1.48 2.74-1.76q.465-2.04 2.1-3.36c1.635-1.32 2.34-1.31 3.75-1.31c1.38 0 2.6.43 3.68 1.28s1.78 1.95 2.1 3.29h.32c.89 0 1.72.22 2.48.66s1.37 1.04 1.81 1.8s.67 1.59.67 2.48c0 1.32-.46 2.47-1.39 3.42c-.92.96-2.05 1.46-3.38 1.5c-.13 0-.2-.06-.2-.17v-1.33c0-.12.07-.18.2-.18c.85-.04 1.58-.38 2.18-1.02s.9-1.38.9-2.23c0-.89-.32-1.65-.97-2.3s-1.42-.97-2.32-.97h-1.61c-.12 0-.18-.06-.18-.17l-.08-.58c-.11-1.08-.58-1.99-1.39-2.72c-.82-.73-1.76-1.1-2.85-1.1c-1.1 0-2.05.37-2.86 1.11s-1.27 1.65-1.37 2.75l-.06.5c0 .12-.07.19-.2.19l-.53.07c-.83.07-1.53.41-2.1 1.04s-.85 1.35-.85 2.19c0 .85.3 1.59.9 2.23s1.33.97 2.18 1.02c.11 0 .17.06.17.18v1.33c0 .11-.06.17-.17.17c-1.34-.04-2.47-.54-3.4-1.5c-.87-.96-1.33-2.11-1.33-3.43M11 21.02c0-.22.08-.42.24-.58s.35-.24.59-.24c.23 0 .43.08.59.24s.24.36.24.58q0 .36-.24.6c-.16.17-.35.25-.59.25c-.23 0-.43-.08-.59-.25a.8.8 0 0 1-.24-.6m0 3.63q0-.36.24-.6c.16-.15.35-.23.58-.23s.43.08.59.23c.16.16.24.35.24.59s-.08.43-.24.59s-.35.23-.59.23a.84.84 0 0 1-.59-.23a.8.8 0 0 1-.23-.58m3.19-1.7c0-.23.08-.44.25-.62q.24-.24.57-.24c.23 0 .43.09.6.26s.26.37.26.6s-.08.43-.25.6s-.37.25-.61.25c-.23 0-.42-.08-.58-.25s-.24-.37-.24-.6m0-3.62c0-.23.08-.43.25-.6q.27-.24.57-.24c.24 0 .44.08.61.25a.8.8 0 0 1 .25.6c0 .23-.08.43-.25.59s-.37.24-.61.24c-.23 0-.42-.08-.58-.24a.85.85 0 0 1-.24-.6m0 7.28c0-.23.08-.43.25-.61q.24-.24.57-.24c.24 0 .44.08.61.25s.25.37.25.6s-.08.43-.25.59s-.37.24-.61.24a.824.824 0 0 1-.82-.83m3.22-5.59c0-.22.08-.41.25-.58s.37-.25.6-.25s.43.08.59.24s.24.36.24.58q0 .36-.24.6c-.16.17-.35.25-.59.25s-.44-.08-.6-.25a.82.82 0 0 1-.25-.59m0 3.63c0-.22.08-.42.25-.6c.16-.15.36-.23.6-.23s.43.08.59.23s.23.35.23.59s-.08.43-.23.59c-.16.16-.35.23-.59.23q-.36 0-.6-.24a.76.76 0 0 1-.25-.57"/></svg>',
    '小雪': '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 30 30"><!-- Icon from Weather Icons by Erik Flowers - https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL --><path fill="currentColor" d="M4.64 16.95c0-1.16.35-2.18 1.06-3.08s1.62-1.48 2.74-1.76q.465-2.04 2.1-3.36c1.635-1.32 2.34-1.31 3.75-1.31c1.38 0 2.6.43 3.68 1.28s1.78 1.95 2.1 3.29h.32c.89 0 1.72.22 2.48.66s1.37 1.04 1.81 1.8s.67 1.59.67 2.48c0 1.32-.46 2.47-1.39 3.42c-.92.96-2.05 1.46-3.38 1.5c-.13 0-.2-.06-.2-.17v-1.33c0-.12.07-.18.2-.18c.85-.04 1.58-.38 2.18-1.02s.9-1.38.9-2.23c0-.89-.32-1.65-.97-2.3s-1.42-.97-2.32-.97h-1.61c-.12 0-.18-.06-.18-.17l-.08-.58c-.11-1.08-.58-1.99-1.39-2.72c-.82-.73-1.76-1.1-2.85-1.1c-1.1 0-2.05.37-2.86 1.11s-1.27 1.65-1.37 2.75l-.06.5c0 .12-.07.19-.2.19l-.53.07c-.83.07-1.53.41-2.1 1.04s-.85 1.35-.85 2.19c0 .85.3 1.59.9 2.23s1.33.97 2.18 1.02c.11 0 .17.06.17.18v1.33c0 .11-.06.17-.17.17c-1.34-.04-2.47-.54-3.4-1.5c-.87-.96-1.33-2.11-1.33-3.43M11 21.02c0-.22.08-.42.24-.58s.35-.24.59-.24c.23 0 .43.08.59.24s.24.36.24.58q0 .36-.24.6c-.16.17-.35.25-.59.25c-.23 0-.43-.08-.59-.25a.8.8 0 0 1-.24-.6m0 3.63q0-.36.24-.6c.16-.15.35-.23.58-.23s.43.08.59.23c.16.16.24.35.24.59s-.08.43-.24.59s-.35.23-.59.23a.84.84 0 0 1-.59-.23a.8.8 0 0 1-.23-.58m3.19-1.7c0-.23.08-.44.25-.62q.24-.24.57-.24c.23 0 .43.09.6.26s.26.37.26.6s-.08.43-.25.6s-.37.25-.61.25c-.23 0-.42-.08-.58-.25s-.24-.37-.24-.6m0-3.62c0-.23.08-.43.25-.6q.27-.24.57-.24c.24 0 .44.08.61.25a.8.8 0 0 1 .25.6c0 .23-.08.43-.25.59s-.37.24-.61.24c-.23 0-.42-.08-.58-.24a.85.85 0 0 1-.24-.6m0 7.28c0-.23.08-.43.25-.61q.24-.24.57-.24c.24 0 .44.08.61.25s.25.37.25.6s-.08.43-.25.59s-.37.24-.61.24a.824.824 0 0 1-.82-.83m3.22-5.59c0-.22.08-.41.25-.58s.37-.25.6-.25s.43.08.59.24s.24.36.24.58q0 .36-.24.6c-.16.17-.35.25-.59.25s-.44-.08-.6-.25a.82.82 0 0 1-.25-.59m0 3.63c0-.22.08-.42.25-.6c.16-.15.36-.23.6-.23s.43.08.59.23s.23.35.23.59s-.08.43-.23.59c-.16.16-.35.23-.59.23q-.36 0-.6-.24a.76.76 0 0 1-.25-.57"/></svg>',
    '中雪': '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 30 30"><!-- Icon from Weather Icons by Erik Flowers - https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL --><path fill="currentColor" d="M4.64 16.95c0-1.16.35-2.18 1.06-3.08s1.62-1.48 2.74-1.76q.465-2.04 2.1-3.36c1.635-1.32 2.34-1.31 3.75-1.31c1.38 0 2.6.43 3.68 1.28s1.78 1.95 2.1 3.29h.32c.89 0 1.72.22 2.48.66s1.37 1.04 1.81 1.8s.67 1.59.67 2.48c0 1.32-.46 2.47-1.39 3.42c-.92.96-2.05 1.46-3.38 1.5c-.13 0-.2-.06-.2-.17v-1.33c0-.12.07-.18.2-.18c.85-.04 1.58-.38 2.18-1.02s.9-1.38.9-2.23c0-.89-.32-1.65-.97-2.3s-1.42-.97-2.32-.97h-1.61c-.12 0-.18-.06-.18-.17l-.08-.58c-.11-1.08-.58-1.99-1.39-2.72c-.82-.73-1.76-1.1-2.85-1.1c-1.1 0-2.05.37-2.86 1.11s-1.27 1.65-1.37 2.75l-.06.5c0 .12-.07.19-.2.19l-.53.07c-.83.07-1.53.41-2.1 1.04s-.85 1.35-.85 2.19c0 .85.3 1.59.9 2.23s1.33.97 2.18 1.02c.11 0 .17.06.17.18v1.33c0 .11-.06.17-.17.17c-1.34-.04-2.47-.54-3.4-1.5c-.87-.96-1.33-2.11-1.33-3.43M11 21.02c0-.22.08-.42.24-.58s.35-.24.59-.24c.23 0 .43.08.59.24s.24.36.24.58q0 .36-.24.6c-.16.17-.35.25-.59.25c-.23 0-.43-.08-.59-.25a.8.8 0 0 1-.24-.6m0 3.63q0-.36.24-.6c.16-.15.35-.23.58-.23s.43.08.59.23c.16.16.24.35.24.59s-.08.43-.24.59s-.35.23-.59.23a.84.84 0 0 1-.59-.23a.8.8 0 0 1-.23-.58m3.19-1.7c0-.23.08-.44.25-.62q.24-.24.57-.24c.23 0 .43.09.6.26s.26.37.26.6s-.08.43-.25.6s-.37.25-.61.25c-.23 0-.42-.08-.58-.25s-.24-.37-.24-.6m0-3.62c0-.23.08-.43.25-.6q.27-.24.57-.24c.24 0 .44.08.61.25a.8.8 0 0 1 .25.6c0 .23-.08.43-.25.59s-.37.24-.61.24c-.23 0-.42-.08-.58-.24a.85.85 0 0 1-.24-.6m0 7.28c0-.23.08-.43.25-.61q.24-.24.57-.24c.24 0 .44.08.61.25s.25.37.25.6s-.08.43-.25.59s-.37.24-.61.24a.824.824 0 0 1-.82-.83m3.22-5.59c0-.22.08-.41.25-.58s.37-.25.6-.25s.43.08.59.24s.24.36.24.58q0 .36-.24.6c-.16.17-.35.25-.59.25s-.44-.08-.6-.25a.82.82 0 0 1-.25-.59m0 3.63c0-.22.08-.42.25-.6c.16-.15.36-.23.6-.23s.43.08.59.23s.23.35.23.59s-.08.43-.23.59c-.16.16-.35.23-.59.23q-.36 0-.6-.24a.76.76 0 0 1-.25-.57"/></svg>',
    '大雪': '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 30 30"><!-- Icon from Weather Icons by Erik Flowers - https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL --><path fill="currentColor" d="M4.64 16.95c0-1.16.35-2.18 1.06-3.08s1.62-1.48 2.74-1.76q.465-2.04 2.1-3.36c1.635-1.32 2.34-1.31 3.75-1.31c1.38 0 2.6.43 3.68 1.28s1.78 1.95 2.1 3.29h.32c.89 0 1.72.22 2.48.66s1.37 1.04 1.81 1.8s.67 1.59.67 2.48c0 1.32-.46 2.47-1.39 3.42c-.92.96-2.05 1.46-3.38 1.5c-.13 0-.2-.06-.2-.17v-1.33c0-.12.07-.18.2-.18c.85-.04 1.58-.38 2.18-1.02s.9-1.38.9-2.23c0-.89-.32-1.65-.97-2.3s-1.42-.97-2.32-.97h-1.61c-.12 0-.18-.06-.18-.17l-.08-.58c-.11-1.08-.58-1.99-1.39-2.72c-.82-.73-1.76-1.1-2.85-1.1c-1.1 0-2.05.37-2.86 1.11s-1.27 1.65-1.37 2.75l-.06.5c0 .12-.07.19-.2.19l-.53.07c-.83.07-1.53.41-2.1 1.04s-.85 1.35-.85 2.19c0 .85.3 1.59.9 2.23s1.33.97 2.18 1.02c.11 0 .17.06.17.18v1.33c0 .11-.06.17-.17.17c-1.34-.04-2.47-.54-3.4-1.5c-.87-.96-1.33-2.11-1.33-3.43M11 21.02c0-.22.08-.42.24-.58s.35-.24.59-.24c.23 0 .43.08.59.24s.24.36.24.58q0 .36-.24.6c-.16.17-.35.25-.59.25c-.23 0-.43-.08-.59-.25a.8.8 0 0 1-.24-.6m0 3.63q0-.36.24-.6c.16-.15.35-.23.58-.23s.43.08.59.23c.16.16.24.35.24.59s-.08.43-.24.59s-.35.23-.59.23a.84.84 0 0 1-.59-.23a.8.8 0 0 1-.23-.58m3.19-1.7c0-.23.08-.44.25-.62q.24-.24.57-.24c.23 0 .43.09.6.26s.26.37.26.6s-.08.43-.25.6s-.37.25-.61.25c-.23 0-.42-.08-.58-.25s-.24-.37-.24-.6m0-3.62c0-.23.08-.43.25-.6q.27-.24.57-.24c.24 0 .44.08.61.25a.8.8 0 0 1 .25.6c0 .23-.08.43-.25.59s-.37.24-.61.24c-.23 0-.42-.08-.58-.24a.85.85 0 0 1-.24-.6m0 7.28c0-.23.08-.43.25-.61q.24-.24.57-.24c.24 0 .44.08.61.25s.25.37.25.6s-.08.43-.25.59s-.37.24-.61.24a.824.824 0 0 1-.82-.83m3.22-5.59c0-.22.08-.41.25-.58s.37-.25.6-.25s.43.08.59.24s.24.36.24.58q0 .36-.24.6c-.16.17-.35.25-.59.25s-.44-.08-.6-.25a.82.82 0 0 1-.25-.59m0 3.63c0-.22.08-.42.25-.6c.16-.15.36-.23.6-.23s.43.08.59.23s.23.35.23.59s-.08.43-.23.59c-.16.16-.35.23-.59.23q-.36 0-.6-.24a.76.76 0 0 1-.25-.57"/></svg>',
    '大到暴雪': '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 30 30"><!-- Icon from Weather Icons by Erik Flowers - https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL --><path fill="currentColor" d="M4.64 16.95c0-1.16.35-2.18 1.06-3.08s1.62-1.48 2.74-1.76q.465-2.04 2.1-3.36c1.635-1.32 2.34-1.31 3.75-1.31c1.38 0 2.6.43 3.68 1.28s1.78 1.95 2.1 3.29h.32c.89 0 1.72.22 2.48.66s1.37 1.04 1.81 1.8s.67 1.59.67 2.48c0 1.32-.46 2.47-1.39 3.42c-.92.96-2.05 1.46-3.38 1.5c-.13 0-.2-.06-.2-.17v-1.33c0-.12.07-.18.2-.18c.85-.04 1.58-.38 2.18-1.02s.9-1.38.9-2.23c0-.89-.32-1.65-.97-2.3s-1.42-.97-2.32-.97h-1.61c-.12 0-.18-.06-.18-.17l-.08-.58c-.11-1.08-.58-1.99-1.39-2.72c-.82-.73-1.76-1.1-2.85-1.1c-1.1 0-2.05.37-2.86 1.11s-1.27 1.65-1.37 2.75l-.06.5c0 .12-.07.19-.2.19l-.53.07c-.83.07-1.53.41-2.1 1.04s-.85 1.35-.85 2.19c0 .85.3 1.59.9 2.23s1.33.97 2.18 1.02c.11 0 .17.06.17.18v1.33c0 .11-.06.17-.17.17c-1.34-.04-2.47-.54-3.4-1.5c-.87-.96-1.33-2.11-1.33-3.43M11 21.02c0-.22.08-.42.24-.58s.35-.24.59-.24c.23 0 .43.08.59.24s.24.36.24.58q0 .36-.24.6c-.16.17-.35.25-.59.25c-.23 0-.43-.08-.59-.25a.8.8 0 0 1-.24-.6m0 3.63q0-.36.24-.6c.16-.15.35-.23.58-.23s.43.08.59.23c.16.16.24.35.24.59s-.08.43-.24.59s-.35.23-.59.23a.84.84 0 0 1-.59-.23a.8.8 0 0 1-.23-.58m3.19-1.7c0-.23.08-.44.25-.62q.24-.24.57-.24c.23 0 .43.09.6.26s.26.37.26.6s-.08.43-.25.6s-.37.25-.61.25c-.23 0-.42-.08-.58-.25s-.24-.37-.24-.6m0-3.62c0-.23.08-.43.25-.6q.27-.24.57-.24c.24 0 .44.08.61.25a.8.8 0 0 1 .25.6c0 .23-.08.43-.25.59s-.37.24-.61.24c-.23 0-.42-.08-.58-.24a.85.85 0 0 1-.24-.6m0 7.28c0-.23.08-.43.25-.61q.24-.24.57-.24c.24 0 .44.08.61.25s.25.37.25.6s-.08.43-.25.59s-.37.24-.61.24a.824.824 0 0 1-.82-.83m3.22-5.59c0-.22.08-.41.25-.58s.37-.25.6-.25s.43.08.59.24s.24.36.24.58q0 .36-.24.6c-.16.17-.35.25-.59.25s-.44-.08-.6-.25a.82.82 0 0 1-.25-.59m0 3.63c0-.22.08-.42.25-.6c.16-.15.36-.23.6-.23s.43.08.59.23s.23.35.23.59s-.08.43-.23.59c-.16.16-.35.23-.59.23q-.36 0-.6-.24a.76.76 0 0 1-.25-.57"/></svg>',
    '雷阵雨': '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 30 30"><!-- Icon from Weather Icons by Erik Flowers - https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL --><path fill="currentColor" d="M4.63 16.91q0 1.665.99 2.97c.99 1.305 1.52 1.47 2.58 1.79l-.66 1.68c-.03.14.02.22.14.22h2.13l-.98 4.3h.28l3.92-5.75c.04-.04.04-.09.01-.14s-.08-.07-.15-.07h-2.18l2.48-4.64c.07-.14.02-.22-.14-.22h-2.94c-.09 0-.17.05-.23.15l-1.07 2.87c-.71-.18-1.3-.57-1.77-1.16s-.7-1.26-.7-2.01c0-.83.28-1.55.85-2.17c.57-.61 1.27-.97 2.1-1.07l.53-.07c.13 0 .2-.06.2-.18l.07-.51c.11-1.08.56-1.99 1.37-2.72s1.76-1.1 2.85-1.1s2.04.37 2.85 1.1c.82.73 1.28 1.64 1.4 2.72l.07.58c0 .11.06.17.18.17h1.6c.91 0 1.68.32 2.32.95s.97 1.4.97 2.28c0 .85-.3 1.59-.89 2.21s-1.33.97-2.2 1.04c-.13 0-.2.06-.2.18v1.37c0 .11.07.17.2.17c1.33-.04 2.46-.55 3.39-1.51s1.39-2.11 1.39-3.45c0-.9-.22-1.73-.67-2.49a4.9 4.9 0 0 0-1.81-1.8c-.77-.44-1.6-.66-2.5-.66h-.31c-.33-1.33-1.04-2.42-2.11-3.26s-2.3-1.27-3.68-1.27c-1.41 0-2.67.44-3.76 1.31s-1.79 1.99-2.1 3.36c-1.11.26-2.02.83-2.74 1.73s-1.08 1.95-1.08 3.1m8.14 9.71c0 .39.19.65.58.77c.01 0 .05 0 .11.01s.11.01.14.01c.17 0 .33-.05.49-.15s.27-.26.32-.48l2.25-8.69c.06-.24.04-.45-.07-.65a.83.83 0 0 0-.5-.39l-.26-.03c-.16 0-.32.05-.47.15a.74.74 0 0 0-.31.45l-2.26 8.72c-.01.1-.02.19-.02.28m4.16-3.06c0 .13.03.26.1.38c.14.22.31.37.51.44c.11.03.21.05.3.05s.2-.02.32-.08q.315-.135.42-.57l1.44-5.67c.03-.14.05-.23.05-.27c0-.15-.05-.3-.16-.45s-.26-.26-.46-.32l-.26-.03c-.17 0-.33.05-.47.15a.82.82 0 0 0-.3.45l-1.46 5.7c0 .02 0 .05-.01.11c-.02.05-.02.08-.02.11"/></svg>',
    '阵雨': '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 30 30"><!-- Icon from Weather Icons by Erik Flowers - https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL --><path fill="currentColor" d="M1.52 16.9c0 1.11.33 2.09.98 2.96s1.51 1.46 2.57 1.78l-.64 1.7c-.04.14 0 .21.14.21H6.7L5.45 27.5h.29l4.17-5.39c.04-.04.04-.09.01-.14c-.02-.05-.07-.07-.14-.07H7.61l2.47-4.63c.07-.14.02-.22-.14-.22H7c-.09 0-.17.05-.23.14L5.7 20.07c-.71-.18-1.3-.57-1.77-1.16s-.7-1.26-.7-2.01c0-.83.28-1.55.85-2.17s1.27-.97 2.1-1.07l.52-.06c.13 0 .2-.06.2-.18l.06-.51c.11-1.08.57-1.99 1.38-2.72a4.15 4.15 0 0 1 2.86-1.1c1.09 0 2.04.37 2.85 1.1s1.28 1.64 1.4 2.72l.06.58c0 .11.06.17.18.17h1.61c.91 0 1.68.32 2.32.95s.96 1.39.96 2.29c0 .85-.3 1.59-.89 2.21s-1.32.97-2.19 1.04c-.13 0-.2.06-.2.18v1.37c0 .11.07.17.2.17c1.33-.04 2.46-.55 3.39-1.51s1.39-2.11 1.39-3.45c0-.74-.14-1.41-.43-2.01c.79-.96 1.18-2.06 1.18-3.32c0-.94-.24-1.81-.71-2.62a5.2 5.2 0 0 0-1.92-1.92c-.81-.47-1.68-.71-2.62-.71c-1.54 0-2.84.58-3.88 1.73c-.81-.43-1.71-.65-2.7-.65c-1.41 0-2.67.44-3.76 1.31s-1.79 1.99-2.1 3.36c-1.11.26-2.02.83-2.73 1.73s-1.09 1.94-1.09 3.09m8.09 9.58c-.01.15.03.3.14.44s.26.25.46.33q.105.03.21.03q.255 0 .51-.15c.255-.15.28-.26.34-.47l2.29-8.57a.83.83 0 0 0-.07-.64a.82.82 0 0 0-.49-.4a.78.78 0 0 0-.65.07c-.2.11-.34.28-.4.51l-2.31 8.6c-.02.07-.03.16-.03.25m.33-21.85c0 .24.08.43.25.59l.64.66c.17.17.37.25.61.26c.24 0 .43-.08.57-.26c.19-.15.28-.35.28-.6c0-.24-.08-.43-.25-.59l-.63-.66a.87.87 0 0 0-.61-.24c-.25 0-.46.08-.62.24q-.24.24-.24.6m3.83 18.8c0 .12.04.24.11.38c.13.2.29.34.5.43c.07.03.17.05.3.05q.225 0 .33-.06c.2-.08.34-.28.41-.58l1.49-5.55c.06-.24.04-.45-.07-.65a.85.85 0 0 0-.51-.39a.75.75 0 0 0-.64.07a.78.78 0 0 0-.39.51l-1.5 5.56c0 .02-.01.06-.02.11c-.01.06-.01.09-.01.12M15.3 9.04c.67-.64 1.49-.97 2.48-.97c.97 0 1.81.34 2.5 1.02s1.04 1.51 1.04 2.48c0 .62-.17 1.24-.52 1.85c-.99-.98-2.16-1.47-3.5-1.47h-.31c-.31-1.17-.88-2.14-1.69-2.91m1.61-5.25c0 .23.09.43.26.6s.37.26.6.26c.24 0 .43-.08.59-.25s.23-.37.23-.61V1.73c0-.24-.08-.44-.23-.61s-.35-.25-.59-.25c-.23 0-.43.08-.6.25s-.26.37-.26.61zm5.53 2.28c0 .24.09.44.26.6c.14.17.33.25.57.25s.44-.08.6-.25l1.44-1.45c.17-.16.26-.35.26-.59s-.08-.44-.25-.61a.82.82 0 0 0-.61-.25c-.22 0-.41.09-.57.26L22.7 5.47c-.17.16-.26.36-.26.6m.81 11.86q0 .33.24.6l.66.63c.12.14.31.23.54.24l.01.01h.1c.19 0 .36-.09.53-.26c.17-.16.26-.36.26-.6c0-.23-.09-.43-.26-.61l-.65-.61a.76.76 0 0 0-.58-.27c-.23 0-.43.08-.6.25c-.17.18-.25.39-.25.62m1.45-6.35q0 .345.27.6c.18.18.38.27.61.27h2.03c.23 0 .43-.09.6-.26s.26-.38.26-.61s-.08-.43-.25-.59a.85.85 0 0 0-.61-.24h-2.03q-.375 0-.63.24c-.17.16-.25.36-.25.59"/></svg>',
    '雾': '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 30 30"><!-- Icon from Weather Icons by Erik Flowers - https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL --><path fill="currentColor" d="M2.62 21.05c0-.24.08-.45.25-.61q.255-.24.63-.24h18.67a.82.82 0 0 1 .85.85c0 .23-.08.43-.25.58c-.17.16-.37.23-.6.23H3.5c-.25 0-.46-.08-.63-.23a.76.76 0 0 1-.25-.58m2.62-3.14c0-.24.09-.44.26-.6c.15-.15.35-.23.59-.23h18.67c.23 0 .42.08.58.24s.23.35.23.59s-.08.44-.23.6c-.16.17-.35.25-.58.25H6.09c-.24 0-.44-.08-.6-.25a.82.82 0 0 1-.25-.6m.13-2.39c0 .09.05.13.15.13h1.43c.06 0 .13-.05.2-.16c.24-.52.59-.94 1.06-1.27s.99-.52 1.55-.56l.55-.07c.11 0 .17-.06.17-.18l.07-.5c.11-1.08.56-1.98 1.37-2.7q1.215-1.08 2.85-1.08c1.08 0 2.02.36 2.83 1.07c.8.71 1.26 1.61 1.37 2.68l.08.57c0 .11.07.17.2.17h1.59c.64 0 1.23.17 1.76.52s.92.8 1.18 1.37c.07.11.14.16.21.16h1.43c.12 0 .17-.07.14-.23c-.29-1.02-.88-1.86-1.74-2.51c-.87-.65-1.86-.97-2.97-.97h-.32q-.495-1.995-2.1-3.27c-1.605-1.275-2.28-1.27-3.65-1.27c-1.4 0-2.64.44-3.73 1.32s-1.78 2-2.09 3.36c-.85.2-1.6.6-2.24 1.21s-1.09 1.33-1.34 2.18v-.04c-.01 0-.01.03-.01.07m1.61 8.59c0-.24.09-.43.26-.59c.15-.15.35-.23.6-.23h18.68c.24 0 .44.08.6.23c.17.16.25.35.25.58c0 .24-.08.44-.25.61s-.37.25-.6.25H7.84c-.23 0-.43-.09-.6-.26a.77.77 0 0 1-.26-.59"/></svg>',
    '霾': '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 30 30"><!-- Icon from Weather Icons by Erik Flowers - https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL --><path fill="currentColor" d="M7.33 16.58c0-.23.08-.41.23-.56c.16-.15.37-.22.64-.22h5.71c.27 0 .48.07.64.22s.23.33.23.56c0 .27-.08.49-.23.64s-.37.23-.64.23H8.2c-.27 0-.48-.08-.64-.23s-.23-.36-.23-.64m0-5.91c0-.22.08-.41.23-.55c.16-.15.37-.22.64-.22h2.96c.27 0 .48.07.64.22c.16.14.24.33.24.55c0 .27-.08.48-.24.64s-.37.24-.64.24H8.2c-.27 0-.48-.08-.64-.23s-.23-.38-.23-.65m.99 8.87c0-.22.09-.42.28-.6c.18-.18.39-.28.6-.28c.26 0 .46.09.62.27s.24.38.24.61c0 .27-.08.49-.23.65s-.36.23-.63.23a.87.87 0 0 1-.61-.24c-.19-.17-.27-.38-.27-.64m1.42-5.93c0-.23.07-.44.22-.61q.225-.27.54-.27c.26 0 .48.09.64.27s.24.38.24.61c0 .27-.08.49-.23.65c-.16.16-.37.23-.65.23c-.23 0-.41-.08-.55-.24s-.21-.37-.21-.64m.99 5.93a.87.87 0 0 1 .88-.88h3.83l.88.88c0 .26-.09.47-.27.64s-.38.24-.61.24h-3.83c-.27 0-.49-.08-.65-.24s-.23-.37-.23-.64m1.32-5.93c0-.22.09-.42.28-.6c.18-.18.39-.28.6-.28h3.83q.39 0 .63.27c.16.18.24.38.24.61c0 .27-.08.49-.23.65c-.16.16-.37.23-.64.23h-3.83a.87.87 0 0 1-.61-.24c-.18-.16-.27-.37-.27-.64m.76-2.94c0-.22.08-.41.24-.55s.37-.22.64-.22h5.71c.23 0 .43.08.61.23q.27.225.27.54c0 .26-.09.48-.27.64s-.38.24-.61.24h-5.71c-.27 0-.49-.08-.65-.24s-.23-.37-.23-.64m2.63 5.91c0-.21.09-.4.27-.55a.926.926 0 0 1 1.22 0a.7.7 0 0 1 .27.55q0 .39-.27.63c-.18.16-.38.24-.61.24a.87.87 0 0 1-.61-.24q-.27-.225-.27-.63m1.54 2.96c0-.23.08-.44.24-.61q.24-.27.63-.27h1.87c.26 0 .47.09.63.26s.24.38.24.62c0 .27-.08.49-.23.65s-.37.23-.64.23h-1.87c-.27 0-.48-.08-.64-.23c-.15-.16-.23-.38-.23-.65m.87-2.96c0-.21.09-.4.27-.55s.38-.23.61-.23h3.07c.22 0 .4.08.54.23s.22.33.22.55c0 .27-.07.48-.21.64s-.32.23-.55.23h-3.07a.87.87 0 0 1-.61-.24q-.27-.225-.27-.63m.44-2.97c0-.22.09-.42.28-.6c.18-.18.39-.28.6-.28h1.96q.315 0 .54.27c.15.18.23.38.23.61c0 .27-.07.48-.22.64c-.14.16-.33.24-.55.24h-1.96a.87.87 0 0 1-.61-.24c-.18-.16-.27-.37-.27-.64m2.74-2.94c0-.22.07-.4.22-.55s.33-.22.55-.22c.27 0 .48.07.64.22c.16.14.24.33.24.55c0 .27-.08.48-.24.64s-.37.24-.64.24c-.23 0-.41-.08-.55-.24c-.15-.16-.22-.37-.22-.64"/></svg>',
    '沙尘暴': '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 30 30"><!-- Icon from Weather Icons by Erik Flowers - https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL --><path fill="currentColor" d="M7.33 16.58c0-.23.08-.41.23-.56c.16-.15.37-.22.64-.22h5.71c.27 0 .48.07.64.22s.23.33.23.56c0 .27-.08.49-.23.64s-.37.23-.64.23H8.2c-.27 0-.48-.08-.64-.23s-.23-.36-.23-.64m0-5.91c0-.22.08-.41.23-.55c.16-.15.37-.22.64-.22h2.96c.27 0 .48.07.64.22c.16.14.24.33.24.55c0 .27-.08.48-.24.64s-.37.24-.64.24H8.2c-.27 0-.48-.08-.64-.23s-.23-.38-.23-.65m.99 8.87c0-.22.09-.42.28-.6c.18-.18.39-.28.6-.28c.26 0 .46.09.62.27s.24.38.24.61c0 .27-.08.49-.23.65s-.36.23-.63.23a.87.87 0 0 1-.61-.24c-.19-.17-.27-.38-.27-.64m1.42-5.93c0-.23.07-.44.22-.61q.225-.27.54-.27c.26 0 .48.09.64.27s.24.38.24.61c0 .27-.08.49-.23.65c-.16.16-.37.23-.65.23c-.23 0-.41-.08-.55-.24s-.21-.37-.21-.64m.99 5.93a.87.87 0 0 1 .88-.88h3.83l.88.88c0 .26-.09.47-.27.64s-.38.24-.61.24h-3.83c-.27 0-.49-.08-.65-.24s-.23-.37-.23-.64m1.32-5.93c0-.22.09-.42.28-.6c.18-.18.39-.28.6-.28h3.83q.39 0 .63.27c.16.18.24.38.24.61c0 .27-.08.49-.23.65c-.16.16-.37.23-.64.23h-3.83a.87.87 0 0 1-.61-.24c-.18-.16-.27-.37-.27-.64m.76-2.94c0-.22.08-.41.24-.55s.37-.22.64-.22h5.71c.23 0 .43.08.61.23q.27.225.27.54c0 .26-.09.48-.27.64s-.38.24-.61.24h-5.71c-.27 0-.49-.08-.65-.24s-.23-.37-.23-.64m2.63 5.91c0-.21.09-.4.27-.55a.926.926 0 0 1 1.22 0a.7.7 0 0 1 .27.55q0 .39-.27.63c-.18.16-.38.24-.61.24a.87.87 0 0 1-.61-.24q-.27-.225-.27-.63m1.54 2.96c0-.23.08-.44.24-.61q.24-.27.63-.27h1.87c.26 0 .47.09.63.26s.24.38.24.62c0 .27-.08.49-.23.65s-.37.23-.64.23h-1.87c-.27 0-.48-.08-.64-.23c-.15-.16-.23-.38-.23-.65m.87-2.96c0-.21.09-.4.27-.55s.38-.23.61-.23h3.07c.22 0 .4.08.54.23s.22.33.22.55c0 .27-.07.48-.21.64s-.32.23-.55.23h-3.07a.87.87 0 0 1-.61-.24q-.27-.225-.27-.63m.44-2.97c0-.22.09-.42.28-.6c.18-.18.39-.28.6-.28h1.96q.315 0 .54.27c.15.18.23.38.23.61c0 .27-.07.48-.22.64c-.14.16-.33.24-.55.24h-1.96a.87.87 0 0 1-.61-.24c-.18-.16-.27-.37-.27-.64m2.74-2.94c0-.22.07-.4.22-.55s.33-.22.55-.22c.27 0 .48.07.64.22c.16.14.24.33.24.55c0 .27-.08.48-.24.64s-.37.24-.64.24c-.23 0-.41-.08-.55-.24c-.15-.16-.22-.37-.22-.64"/></svg>',
    '浮尘': '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 30 30"><!-- Icon from Weather Icons by Erik Flowers - https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL --><path fill="currentColor" d="M7.33 16.58c0-.23.08-.41.23-.56c.16-.15.37-.22.64-.22h5.71c.27 0 .48.07.64.22s.23.33.23.56c0 .27-.08.49-.23.64s-.37.23-.64.23H8.2c-.27 0-.48-.08-.64-.23s-.23-.36-.23-.64m0-5.91c0-.22.08-.41.23-.55c.16-.15.37-.22.64-.22h2.96c.27 0 .48.07.64.22c.16.14.24.33.24.55c0 .27-.08.48-.24.64s-.37.24-.64.24H8.2c-.27 0-.48-.08-.64-.23s-.23-.38-.23-.65m.99 8.87c0-.22.09-.42.28-.6c.18-.18.39-.28.6-.28c.26 0 .46.09.62.27s.24.38.24.61c0 .27-.08.49-.23.65s-.36.23-.63.23a.87.87 0 0 1-.61-.24c-.19-.17-.27-.38-.27-.64m1.42-5.93c0-.23.07-.44.22-.61q.225-.27.54-.27c.26 0 .48.09.64.27s.24.38.24.61c0 .27-.08.49-.23.65c-.16.16-.37.23-.65.23c-.23 0-.41-.08-.55-.24s-.21-.37-.21-.64m.99 5.93a.87.87 0 0 1 .88-.88h3.83l.88.88c0 .26-.09.47-.27.64s-.38.24-.61.24h-3.83c-.27 0-.49-.08-.65-.24s-.23-.37-.23-.64m1.32-5.93c0-.22.09-.42.28-.6c.18-.18.39-.28.6-.28h3.83q.39 0 .63.27c.16.18.24.38.24.61c0 .27-.08.49-.23.65c-.16.16-.37.23-.64.23h-3.83a.87.87 0 0 1-.61-.24c-.18-.16-.27-.37-.27-.64m.76-2.94c0-.22.08-.41.24-.55s.37-.22.64-.22h5.71c.23 0 .43.08.61.23q.27.225.27.54c0 .26-.09.48-.27.64s-.38.24-.61.24h-5.71c-.27 0-.49-.08-.65-.24s-.23-.37-.23-.64m2.63 5.91c0-.21.09-.4.27-.55a.926.926 0 0 1 1.22 0a.7.7 0 0 1 .27.55q0 .39-.27.63c-.18.16-.38.24-.61.24a.87.87 0 0 1-.61-.24q-.27-.225-.27-.63m1.54 2.96c0-.23.08-.44.24-.61q.24-.27.63-.27h1.87c.26 0 .47.09.63.26s.24.38.24.62c0 .27-.08.49-.23.65s-.37.23-.64.23h-1.87c-.27 0-.48-.08-.64-.23c-.15-.16-.23-.38-.23-.65m.87-2.96c0-.21.09-.4.27-.55s.38-.23.61-.23h3.07c.22 0 .4.08.54.23s.22.33.22.55c0 .27-.07.48-.21.64s-.32.23-.55.23h-3.07a.87.87 0 0 1-.61-.24q-.27-.225-.27-.63m.44-2.97c0-.22.09-.42.28-.6c.18-.18.39-.28.6-.28h1.96q.315 0 .54.27c.15.18.23.38.23.61c0 .27-.07.48-.22.64c-.14.16-.33.24-.55.24h-1.96a.87.87 0 0 1-.61-.24c-.18-.16-.27-.37-.27-.64m2.74-2.94c0-.22.07-.4.22-.55s.33-.22.55-.22c.27 0 .48.07.64.22c.16.14.24.33.24.55c0 .27-.08.48-.24.64s-.37.24-.64.24c-.23 0-.41-.08-.55-.24c-.15-.16-.22-.37-.22-.64"/></svg>',
    '扬沙': '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 30 30"><!-- Icon from Weather Icons by Erik Flowers - https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL --><path fill="currentColor" d="M7.33 16.58c0-.23.08-.41.23-.56c.16-.15.37-.22.64-.22h5.71c.27 0 .48.07.64.22s.23.33.23.56c0 .27-.08.49-.23.64s-.37.23-.64.23H8.2c-.27 0-.48-.08-.64-.23s-.23-.36-.23-.64m0-5.91c0-.22.08-.41.23-.55c.16-.15.37-.22.64-.22h2.96c.27 0 .48.07.64.22c.16.14.24.33.24.55c0 .27-.08.48-.24.64s-.37.24-.64.24H8.2c-.27 0-.48-.08-.64-.23s-.23-.38-.23-.65m.99 8.87c0-.22.09-.42.28-.6c.18-.18.39-.28.6-.28c.26 0 .46.09.62.27s.24.38.24.61c0 .27-.08.49-.23.65s-.36.23-.63.23a.87.87 0 0 1-.61-.24c-.19-.17-.27-.38-.27-.64m1.42-5.93c0-.23.07-.44.22-.61q.225-.27.54-.27c.26 0 .48.09.64.27s.24.38.24.61c0 .27-.08.49-.23.65c-.16.16-.37.23-.65.23c-.23 0-.41-.08-.55-.24s-.21-.37-.21-.64m.99 5.93a.87.87 0 0 1 .88-.88h3.83l.88.88c0 .26-.09.47-.27.64s-.38.24-.61.24h-3.83c-.27 0-.49-.08-.65-.24s-.23-.37-.23-.64m1.32-5.93c0-.22.09-.42.28-.6c.18-.18.39-.28.6-.28h3.83q.39 0 .63.27c.16.18.24.38.24.61c0 .27-.08.49-.23.65c-.16.16-.37.23-.64.23h-3.83a.87.87 0 0 1-.61-.24c-.18-.16-.27-.37-.27-.64m.76-2.94c0-.22.08-.41.24-.55s.37-.22.64-.22h5.71c.23 0 .43.08.61.23q.27.225.27.54c0 .26-.09.48-.27.64s-.38.24-.61.24h-5.71c-.27 0-.49-.08-.65-.24s-.23-.37-.23-.64m2.63 5.91c0-.21.09-.4.27-.55a.926.926 0 0 1 1.22 0a.7.7 0 0 1 .27.55q0 .39-.27.63c-.18.16-.38.24-.61.24a.87.87 0 0 1-.61-.24q-.27-.225-.27-.63m1.54 2.96c0-.23.08-.44.24-.61q.24-.27.63-.27h1.87c.26 0 .47.09.63.26s.24.38.24.62c0 .27-.08.49-.23.65s-.37.23-.64.23h-1.87c-.27 0-.48-.08-.64-.23c-.15-.16-.23-.38-.23-.65m.87-2.96c0-.21.09-.4.27-.55s.38-.23.61-.23h3.07c.22 0 .4.08.54.23s.22.33.22.55c0 .27-.07.48-.21.64s-.32.23-.55.23h-3.07a.87.87 0 0 1-.61-.24q-.27-.225-.27-.63m.44-2.97c0-.22.09-.42.28-.6c.18-.18.39-.28.6-.28h1.96q.315 0 .54.27c.15.18.23.38.23.61c0 .27-.07.48-.22.64c-.14.16-.33.24-.55.24h-1.96a.87.87 0 0 1-.61-.24c-.18-.16-.27-.37-.27-.64m2.74-2.94c0-.22.07-.4.22-.55s.33-.22.55-.22c.27 0 .48.07.64.22c.16.14.24.33.24.55c0 .27-.08.48-.24.64s-.37.24-.64.24c-.23 0-.41-.08-.55-.24c-.15-.16-.22-.37-.22-.64"/></svg>',
    '强沙尘暴': '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 30 30"><!-- Icon from Weather Icons by Erik Flowers - https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL --><path fill="currentColor" d="M7.33 16.58c0-.23.08-.41.23-.56c.16-.15.37-.22.64-.22h5.71c.27 0 .48.07.64.22s.23.33.23.56c0 .27-.08.49-.23.64s-.37.23-.64.23H8.2c-.27 0-.48-.08-.64-.23s-.23-.36-.23-.64m0-5.91c0-.22.08-.41.23-.55c.16-.15.37-.22.64-.22h2.96c.27 0 .48.07.64.22c.16.14.24.33.24.55c0 .27-.08.48-.24.64s-.37.24-.64.24H8.2c-.27 0-.48-.08-.64-.23s-.23-.38-.23-.65m.99 8.87c0-.22.09-.42.28-.6c.18-.18.39-.28.6-.28c.26 0 .46.09.62.27s.24.38.24.61c0 .27-.08.49-.23.65s-.36.23-.63.23a.87.87 0 0 1-.61-.24c-.19-.17-.27-.38-.27-.64m1.42-5.93c0-.23.07-.44.22-.61q.225-.27.54-.27c.26 0 .48.09.64.27s.24.38.24.61c0 .27-.08.49-.23.65c-.16.16-.37.23-.65.23c-.23 0-.41-.08-.55-.24s-.21-.37-.21-.64m.99 5.93a.87.87 0 0 1 .88-.88h3.83l.88.88c0 .26-.09.47-.27.64s-.38.24-.61.24h-3.83c-.27 0-.49-.08-.65-.24s-.23-.37-.23-.64m1.32-5.93c0-.22.09-.42.28-.6c.18-.18.39-.28.6-.28h3.83q.39 0 .63.27c.16.18.24.38.24.61c0 .27-.08.49-.23.65c-.16.16-.37.23-.64.23h-3.83a.87.87 0 0 1-.61-.24c-.18-.16-.27-.37-.27-.64m.76-2.94c0-.22.08-.41.24-.55s.37-.22.64-.22h5.71c.23 0 .43.08.61.23q.27.225.27.54c0 .26-.09.48-.27.64s-.38.24-.61.24h-5.71c-.27 0-.49-.08-.65-.24s-.23-.37-.23-.64m2.63 5.91c0-.21.09-.4.27-.55a.926.926 0 0 1 1.22 0a.7.7 0 0 1 .27.55q0 .39-.27.63c-.18.16-.38.24-.61.24a.87.87 0 0 1-.61-.24q-.27-.225-.27-.63m1.54 2.96c0-.23.08-.44.24-.61q.24-.27.63-.27h1.87c.26 0 .47.09.63.26s.24.38.24.62c0 .27-.08.49-.23.65s-.37.23-.64.23h-1.87c-.27 0-.48-.08-.64-.23c-.15-.16-.23-.38-.23-.65m.87-2.96c0-.21.09-.4.27-.55s.38-.23.61-.23h3.07c.22 0 .4.08.54.23s.22.33.22.55c0 .27-.07.48-.21.64s-.32.23-.55.23h-3.07a.87.87 0 0 1-.61-.24q-.27-.225-.27-.63m.44-2.97c0-.22.09-.42.28-.6c.18-.18.39-.28.6-.28h1.96q.315 0 .54.27c.15.18.23.38.23.61c0 .27-.07.48-.22.64c-.14.16-.33.24-.55.24h-1.96a.87.87 0 0 1-.61-.24c-.18-.16-.27-.37-.27-.64m2.74-2.94c0-.22.07-.4.22-.55s.33-.22.55-.22c.27 0 .48.07.64.22c.16.14.24.33.24.55c0 .27-.08.48-.24.64s-.37.24-.64.24c-.23 0-.41-.08-.55-.24c-.15-.16-.22-.37-.22-.64"/></svg>',
    '冰雹': '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 30 30"><!-- Icon from Weather Icons by Erik Flowers - https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL --><path fill="currentColor" d="M4.64 16.9c0 1.33.46 2.47 1.39 3.43s2.06 1.47 3.4 1.53c.11 0 .17-.06.17-.17v-1.34c0-.11-.06-.17-.17-.17c-.86-.04-1.58-.38-2.18-1.02s-.9-1.39-.9-2.26c0-.83.28-1.54.84-2.16c.56-.61 1.26-.97 2.09-1.07l.53-.03c.13 0 .2-.06.2-.19l.06-.53c.11-1.08.56-1.99 1.37-2.71c.81-.73 1.76-1.09 2.85-1.09s2.04.36 2.85 1.09s1.27 1.63 1.39 2.71l.08.58c0 .11.06.17.18.17h1.61q1.335 0 2.31.96c.65.64.98 1.39.98 2.27c0 .87-.3 1.62-.9 2.26s-1.33.98-2.18 1.02c-.13 0-.2.06-.2.17v1.34c0 .11.07.17.2.17c.87-.02 1.67-.26 2.4-.71s1.31-1.05 1.73-1.8s.63-1.57.63-2.44c0-.89-.22-1.72-.67-2.47c-.44-.75-1.05-1.35-1.81-1.78S21.29 12 20.4 12h-.32c-.32-1.34-1.03-2.43-2.1-3.28s-2.3-1.28-3.68-1.28c-1.41 0-2.66.44-3.75 1.31a5.83 5.83 0 0 0-2.1 3.35c-1.11.26-2.02.83-2.73 1.73s-1.08 1.92-1.08 3.07m5.45 7.2c.09.21.25.37.46.46c.2.1.41.11.62.02c.22-.09.36-.24.45-.45c.1-.22.11-.43.02-.64c-.08-.21-.24-.35-.45-.44c-.2-.11-.4-.12-.61-.03a.85.85 0 0 0-.46.47c-.11.17-.11.37-.03.61m.63-2.82q0 .24.15.45c.1.15.26.25.46.32c.19.11.4.12.62.01c.22-.1.37-.3.44-.6l.9-3.38c.06-.25.04-.47-.08-.67a.72.72 0 0 0-.53-.36a.84.84 0 0 0-.71.12c-.15.1-.26.25-.32.44L10.77 21c-.04.16-.05.25-.05.28m1.86 5.59c0 .12.02.22.06.29q.135.33.45.45c.09.05.2.08.33.08q.09 0 .3-.06c.22-.08.38-.23.47-.45q.15-.33 0-.66a.88.88 0 0 0-.45-.46c-.2-.09-.4-.09-.62 0a.8.8 0 0 0-.41.36c-.09.16-.13.31-.13.45m.73-2.61c0 .37.21.61.63.73a.86.86 0 0 0 .62-.04q.315-.12.42-.57l1.67-6.29c.06-.24.04-.45-.06-.65a.76.76 0 0 0-.49-.38q-.12-.03-.27-.03a.9.9 0 0 0-.48.15c-.16.1-.26.25-.3.44l-1.71 6.34q-.03.21-.03.3m3.43-.46c0 .12.02.23.08.32c.08.19.23.34.44.44c.11.04.23.07.35.07q.09 0 .3-.06c.21-.08.37-.23.46-.44c.07-.22.07-.43-.01-.63a.84.84 0 0 0-.42-.45c-.23-.11-.44-.12-.65-.03a.85.85 0 0 0-.46.47c-.06.1-.09.2-.09.31m.73-2.57c0 .14.05.29.16.45q.165.24.45.33c.16.03.25.05.27.05c.09 0 .22-.03.37-.1c.2-.09.33-.27.4-.52l.9-3.34l.03-.26c0-.16-.05-.31-.15-.46a.78.78 0 0 0-.45-.31c-.09-.02-.18-.03-.26-.03c-.16 0-.32.05-.47.15s-.25.25-.31.45l-.9 3.36z"/></svg>',
    '暴雨': '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 30 30"><!-- Icon from Weather Icons by Erik Flowers - https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL --><path fill="currentColor" d="M4.65 16.96c0 1.32.47 2.46 1.4 3.41c.93.96 2.06 1.46 3.38 1.5c.12 0 .18-.06.18-.17v-1.33q0-.18-.18-.18c-.84-.04-1.57-.38-2.17-1.02s-.91-1.37-.91-2.22c0-.84.28-1.57.85-2.19s1.26-.97 2.1-1.04l.53-.07c.12 0 .19-.06.19-.18l.07-.5c.1-1.09.55-2.01 1.36-2.75s1.76-1.11 2.86-1.11c1.08 0 2.03.37 2.84 1.1s1.28 1.63 1.4 2.71l.07.58c0 .12.06.18.19.18h1.6c.9 0 1.67.32 2.32.97c.64.64.97 1.41.97 2.3q0 1.26-.9 2.22c-.6.63-1.33.97-2.18 1.02c-.13 0-.2.06-.2.18v1.33c0 .11.07.17.2.17c1.33-.04 2.46-.54 3.38-1.5s1.38-2.09 1.38-3.42c0-.89-.22-1.72-.67-2.48a4.9 4.9 0 0 0-1.81-1.8c-.76-.44-1.59-.66-2.48-.66h-.31A5.9 5.9 0 0 0 18 8.72a5.76 5.76 0 0 0-3.68-1.28c-1.41 0-2.66.44-3.75 1.31s-1.79 1.99-2.1 3.35c-1.13.29-2.04.88-2.75 1.77s-1.07 1.93-1.07 3.09m5.4 7.02c0 .17.05.34.16.51s.27.28.47.35c.23.07.44.06.64-.04c.19-.09.33-.28.39-.56l.14-.61a.853.853 0 0 0-.61-1.03c-.22-.07-.44-.04-.64.08s-.34.3-.4.53l-.14.59c0 .03-.01.09-.01.18m.76-2.9c0 .21.08.4.25.57c.16.17.34.25.56.25q.36 0 .6-.24c.16-.16.24-.35.24-.59c0-.23-.08-.43-.24-.59a.8.8 0 0 0-.6-.24c-.23 0-.42.08-.58.23c-.15.18-.23.38-.23.61m.61-2.27c-.01.16.03.31.14.45c.1.15.26.25.48.32c.21.06.41.04.62-.07s.34-.28.41-.51l.28-.9c.07-.24.05-.46-.07-.65a.9.9 0 0 0-.54-.39a.74.74 0 0 0-.63.07a.85.85 0 0 0-.41.5l-.24.92c0 .02-.01.06-.02.12c-.01.05-.02.1-.02.14m1.17 8.29c0 .18.05.34.15.5q.15.24.48.33c.08.02.17.03.25.03c.43 0 .69-.2.79-.61l.14-.59a.92.92 0 0 0-.08-.68a.77.77 0 0 0-.52-.37a.74.74 0 0 0-.63.07c-.21.12-.34.29-.41.51l-.14.59c-.02.09-.03.16-.03.22m.77-2.9c0 .22.08.41.25.58q.24.24.57.24c.24 0 .43-.08.59-.23c.16-.16.23-.35.23-.59a.784.784 0 0 0-.82-.81c-.24 0-.43.08-.59.23s-.23.35-.23.58m.63-2.27c-.01.15.03.31.13.47q.15.24.45.3c.23.06.44.04.64-.06s.33-.29.41-.56l.27-.9c.07-.22.05-.43-.07-.63a.87.87 0 0 0-.53-.4a.77.77 0 0 0-.64.08c-.21.12-.34.3-.41.53l-.23.9c-.01.08-.02.17-.02.27m2.76 2.15q0 .24.15.48c.1.16.26.27.46.33c.03 0 .08.01.14.02s.1.02.14.02c.41 0 .66-.22.76-.66l.14-.6c.07-.21.05-.42-.07-.63a.8.8 0 0 0-.51-.41c-.25-.06-.48-.04-.68.08s-.34.29-.41.53l-.09.59c0 .02-.01.07-.02.12s-.01.09-.01.13m.74-2.96c0 .22.08.42.25.57q.225.24.57.24c.24 0 .43-.08.59-.23s.23-.35.23-.58c0-.24-.08-.43-.23-.59s-.35-.23-.59-.23s-.43.08-.59.23c-.15.16-.23.35-.23.59m.61-2.31c0 .17.05.33.16.48s.27.26.49.32c.02 0 .06.01.12.02s.11.02.14.02q.15 0 .36-.09c.21-.11.35-.29.41-.52l.24-.9c.06-.23.04-.44-.08-.63a.83.83 0 0 0-.51-.4a.8.8 0 0 0-.64.06c-.19.11-.33.27-.39.51l-.28.91c0 .02-.01.06-.02.12z"/></svg>',
}
export const weather_icon_url = 'https://d.scggqx.com/forecast/img'
  
const getWeatherRich = () => {
  const weather = ["小雨","小雨","阴","小雨","多云","小雨","小雨"]
  const rich:any = {}
  for(let i = 0; i < weather.length; i++) {
    rich[i] = {
      backgroundColor: {
        image: `${weather_icon_url}/${weather[i]}.png`
      },
      height: 40,
      width: 40
    }
  }
  return { weather, rich }
}
export const weather_echarts_options = {
  textStyle: {
    fontFamily: 'OPPO, Song, KaiTi, serif'
  },
  grid: {
    show: true,
    backgroundColor: 'transparent',
    opacity: 0.3,
    borderWidth: '0',
  //   top: '50',
    left: '30',
    right: '30',
    bottom: '100'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    show: false
  },
  xAxis: [
    // 日期
    {
      type: 'category',
      boundaryGap: false,
      position: 'top',
      offset: 120,
      zlevel: 100,
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        interval: 0,
        formatter: [
          '{a|{value}}'
        ].join('\n'),
        rich: {
          a: {
            // color: 'white',
            fontSize: 14
          }
        }
      },
      nameTextStyle: {

      },
      data: ["25日","26日","27日","28日","29日","30日","31日"]
    },
    // 星期
    {
      type: 'category',
      boundaryGap: false,
      position: 'top',
      offset: 100,
      zlevel: 100,
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        interval: 0,
        formatter: [
          '{a|{value}}'
        ].join('\n'),
        rich: {
          a: {
            // color: 'white',
            fontSize: 14
          }
        }
      },
      nameTextStyle: {
        fontWeight: 'bold',
        fontSize: 19
      },
      data: ["周一","周二","周三","周四","周五","周六","周日"]
    },
    // 天气图标
    {
      type: 'category',
      boundaryGap: false,
      position: 'top',
      offset: 30,
      zlevel: 100,
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        interval: 0,
        formatter: function(value: string, index: string) {
          return '{' + index + '| }\n{a|' + value + '}'
        },
        rich: {
          ...getWeatherRich().rich,
          a: {
            // color: 'white',
            fontSize: 12,
            lineHeight: 20,
            height: 20
          }
        }
      },
      nameTextStyle: {
        fontWeight: 'bold',
        fontSize: 18
      },
      // data: this.weatherdata.weather
      data: getWeatherRich().weather
    },
    // 天气图标
    {
      type: 'category',
      boundaryGap: false,
      position: 'bottom',
      offset: 0,
      zlevel: 100,
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        interval: 0,
        formatter: function(value: string, index: string) {
          return '{' + index + '| }\n{a|' + value + '}'
        },
        rich: {
          ...getWeatherRich().rich,
          a: {
            // color: 'white',
            fontSize: 12,
            lineHeight: 20,
            height: 20
          }
        }
      },
      nameTextStyle: {
        fontWeight: 'bold',
        fontSize: 18
      },
      data: getWeatherRich().weather
    }
  ],
  yAxis: {
    type: 'value',
    show: false,
    axisLabel: {
      formatter: '{value} °C',
      color: 'white'
    }
  },
  series: [
    {
      name: '最高气温',
      type: 'line',
      data: ["16.3","16.2","17.6","14.2","17.6","15.7","14.3"],
      symbol: 'circle',
      symbolSize: 5,
      showSymbol: true,
      smooth: true,
      itemStyle: {
        color: '#ff7f50'
      },
      label: {
        show: true,
        position: 'top',
        // color: 'white',
        formatter: '{c} °C'
      },
      lineStyle: {
        width: 1,
        // color: 'white'
      },
      areaStyle: {
        opacity: 1,
        color: 'transparent'
      }
    },
    {
      name: '最低气温',
      type: 'line',
      data: ["13.4","12.8","13.5","12.5","12.4","13.2","13"],
      symbol: 'circle',
      symbolSize: 5,
      showSymbol: true,
      smooth: true,
      itemStyle: {
          color: 'skyblue'
      },
      label: {
        show: true,
        position: 'bottom',
        // color: 'white',
        formatter: '{c} °C'
      },
      lineStyle: {
        width: 1,
        // color: 'white'
      },
      areaStyle: {
        opacity: 1,
        color: 'transparent'
      }
    }
  ]
};