import type { APIContext } from "astro";
import siteConfig from '@/config'
const Api = siteConfig.Api.replace(/api-v2|v2/g, 'api');
export async function GET(context: APIContext) {
  const { request, params } = context;
  let res: any;
  try {
    const hasQuery = !!request.url.split('?')[1]
    const query = hasQuery ? '?' + request.url.split('?')[1] : ''
    // console.log(query, 'request.url');
    res = await fetch(Api + '/' + params.path + query).then(res => res.json())
  } catch (error) {}
//   console.log(Api.replace(/\/api$/g, '') + '/' + params.path, res, 'request.url');
  return Response.json({
    status: res ? 200 : 404,
    data: res?.data || {}
  }, {
    status: res ? 200 : 404,
  })
}
export async function getStaticPaths() {
    const response = await fetch(Api.replace(/\/api$/g, '/swagger.json')).then(res => res.json());
    const { paths, ...data } = response;
    return Object.keys(paths).map((endpoint:string) => {
      return {
        params: { path: endpoint || '/' },
        props: { ...data },
      };
    });
  }