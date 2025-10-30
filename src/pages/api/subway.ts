import type { APIContext } from "astro";
import siteConfig from "@/config";
import fs from "fs";
export async function GET(context: APIContext) {
    //   const { request } = context;
    try {
        let data:any = await fetch(siteConfig.Site + '/assets/json/subways.json').then(res => res.json());
        const destination:any = {
            1: ['罗湖', '机场东', '西乡'],
            2: ['赤湾', '黄贝岭', '小梅沙'],
            3: ['福保', '坪地六联'],
            4: ['福田口岸', '牛湖'],
            5: ['赤湾', '黄贝岭', '长岭坡'],
            6: ['科学馆', '松岗', '深理工', '光明城'],
            7: ['深大丽湖', '西丽湖', '太安'],
            8: ['梧桐山南', '盐田路', '小梅沙'],
            9: ['前湾', '文锦', '孖岭'],
            10: ['双拥街', '福田口岸', '孖岭'],
            11: ['华强南', '碧头', '机场'],
            // 12: ['左炮台东', '松岗', '机场东'],
            // 13: ['深圳湾口岸', '高新中'],
            // 14: ['沙田', '岗厦北'],
        }
        const lines = Object.keys(destination);
        let index = Math.floor(Math.random() * (lines.length));
        const destinationIndex = Math.floor(Math.random() * ((lines[index] || lines[1]).length));
        let current = data.filter((el:any) => el.XLMC == (index+1)).map((el:any) => ({line: el.XLMC, name: el.ZDMZ, id: el.ID, desc: el.ZDJS}));
        let currentIndex = Math.floor(Math.random() * (current.length - 1));
        return new Response(JSON.stringify({ status: 200, data: {
            subways: current,
            destination: destination[index+1][destinationIndex],
            line: index+1,
            nextStation: current[currentIndex],
        } }))
        
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({ status: 200, data: {} }))
    }
}