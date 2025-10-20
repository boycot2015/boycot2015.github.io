import type { APIContext } from "astro";
import Link from '@/data/Link';
import xml2js from 'xml2js'
export async function GET(context: APIContext) {
//   const { request } = context;
  if (Link.data && Array.isArray(Link.data) && Link.data.length > 0) {
    // /feed/
    let list:any = []
    await Promise.all(Link.data.filter((i: any) => i.link).map(async (i: any) => {
        try {
            i.content = await fetch((i.link + '/rss.xml').replace(/\/\/+/g, '/')).then(res => res?.text());
            if (!i.content) 
            i.content = await fetch((i.link + '/feed/').replace(/\/\/+/g, '/')).then(res => res?.text());
            // console.log(i.link, i.content);
        } catch (error) {
            // console.log(error);
        }
        i.content && xml2js.parseString(i.content, (err: any, result: any) => {
            if (err) {
                // console.error(err);
            } else {
                // console.log(result.rss?.channel?.[0]?.item[0]);
                result.rss?.channel?.[0]?.item?.slice(0, 10).map((item: any) => {
                    list.push({
                        title: item.title?.[0],
                        link: item.link?.[0],
                        content: item.description?.[0],
                        date: item.pubDate?.[0],
                        avatar: i.avatar,
                        auther: item['dc:creator']?.[0] || item.creator || i.name
                    })
                })
                // console.log(list);
            }
        })
    }))
    
    return new Response(JSON.stringify({status: 200, data: list}));
}
}