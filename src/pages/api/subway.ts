import type { APIContext } from "astro";
import subwayData from './json/subway/_data.json';
import sz_subwayData from './json/subway/_sz.json';
import subwayTimeData from './json/subway/_time.json';
type Time = {
    INTERVAL:string,
    FIRST_SUBWAY_TIME:string,
    PEAK_INTERVAL:string,
    LAST_SUBWAY_TIME:string,
    DRIVING_DIRECTION:string,
    ID:string,
    DAY_TYPE:string,
    SITE_CODE:string,
    OPER_CODE:string,
    LINE_CODE:string,
    BELONG_LINE:string
}
export type Subway = {
    XLMC: string,
    ZDJS: string,
    ID: string,
    isGtOperation?: boolean,
    isTransfer?: boolean,
    transfer?: string[],
    time?: Time,
    ZDMZ: string
}
export type Destination = Record<string, string[]>
export type Subways = {
    line: string,
    color: string,
    destination: string[],
    subways: Subway[]
}
export async function GET(context?: APIContext) {
    //   const { request } = context;
    
    try {
        const destination: Destination = {
            1: ['罗湖', '机场东'],
            2: ['赤湾', '莲塘'],
            3: ['福保', '双龙'],
            4: ['福田口岸', '牛湖'],
            5: ['赤湾', '黄贝岭'],
            6: ['科学馆', '松岗'],
            7: ['西丽湖', '太安'],
            8: ['梧桐山南', '盐田路'],
            9: ['前湾', '文锦'],
            10: ['双拥街', '福田口岸'],
            11: ['福田', '碧头'],
            12: ['左炮台东', '松岗'],
            13: ['深圳湾口岸', '高新中'],
            14: ['沙田', '岗厦北'],
            20: ['会展城', '机场北'],
        }
        const colors: Record<string, string> = {
            1: '#019800',
            2: '#FE9B1A',
            3: '#019FDE',
            4: '#E71619',
            5: '#694D9A',
            6: '#1dc5b8',
            7: '#003c92',
            8: '#FE9B1A',
            9: '#85666c',
            10: '#f67496',
            11: '#530000',
            12: '#A794B0',
            13: '#db850e',
            14: '#edcc63',
            20: '#40B5CF',
        }
        const gtoperation = [4, 13]
        const subways = (subwayData.filter((el) => el.ZDJS !== '暂无数据' || (destination[el.XLMC]?.includes(el.ZDMZ)))) as Subway[]
        const transfers: Destination = {}
        const list:Subways[] = []
        Object.keys(destination).forEach(key => {
            let station = {
            line: key,
            color: colors[key] || '#000',
            isGtOperation: gtoperation.includes(Number(key)),
            destination: destination[key],
            subways: subways.filter((el, index, self) => index === self.findIndex((item) => item.ZDMZ === el.ZDMZ && item.XLMC === el.XLMC)).filter((item:Subway) => item.XLMC === key).map((item:Subway) => {
                const isTransfer = (item.ZDJS.includes('换乘') || item.ZDJS.includes('枢纽'))
                if (isTransfer) {
                    transfers[key] && (transfers[key] = Array.from(new Set([...transfers[key], item.ZDMZ])))
                    !transfers[key] && (transfers[key] = [item.ZDMZ])
                }
                return {
                    ...item,
                    time: subwayTimeData.find((el) => el.BELONG_LINE.includes(item.XLMC) && el.DRIVING_DIRECTION === item.ZDMZ),
                    isTransfer
                }
            })
          }
          if (station.subways.length <= 0) {
            station.subways = sz_subwayData.reverse().filter((el, index, self) => index === self.findIndex((item) => item.sname === el.sname)).filter((el) => el.rname.includes(key)).map((item:any) => ({
                XLMC: item.rname,
                ZDJS: item.desc,
                ID: item.id,
                isTransfer: false,
                transfer: [],
                time: subwayTimeData.find((el) => item.rname.includes(el.BELONG_LINE) && el.DRIVING_DIRECTION === item.ZDMZ),
                ZDMZ: item.sname.replace(/\(地铁站\)|深圳/g, ''),
            }))
          }
          list.push(station)
        })
        list.map(el => {
            el.subways.forEach(item => {
                if (item.isTransfer) {
                    item.transfer = []
                    for (const key in transfers) {
                        if (transfers[key].includes(item.ZDMZ) && key !== item.XLMC) {
                            item.transfer.push(key)
                        }
                    }
                }
            })
        })
        return Response.json({
            status: 200,
            data: {
                subways: list,
                destination,
            }
        }, {
            status: 200
        });
    } catch (error) {
        console.log(error, 'error');
        return Response.json({
            status: 400,
            data: {}
        }, {
            status: 400
        });
    }
}