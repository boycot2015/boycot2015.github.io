import type { APIContext } from "astro";
import siteConfig from '@/config'
export async function GET(context: APIContext) {
    //   const { request, params } = context;
    const Api = siteConfig.Api.replace(/\/v2/g, '');
    let res: any;
    try {
        res = await fetch(Api).then(res => res.json())
    } catch (error) {}
    //   console.log(Api, 'request.url');
    return Response.json({
        status: res ? 200 : 404,
        data: res || {}
    }, {
        status: res ? 200 : 404,
    })
}