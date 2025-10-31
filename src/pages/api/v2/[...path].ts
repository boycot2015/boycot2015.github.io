import type { APIContext } from "astro";
import siteConfig from '@/config'
export async function GET(context: APIContext) {
  const { request, params } = context;
  const Api = siteConfig.Api
  let res: any;
  try {
    const hasQuery = !!request.url.split('?')[1]
    const query = hasQuery ? '?' + request.url.split('?')[1] : ''
    res = await fetch(Api + '/' + params.path + query).then(res => res.json())
    // console.log(request, 'request.url');
  } catch (error) {}
  // console.log(Api + '/' + params.path , 'request.url');
  return Response.json({
    status: res ? 200 : 404,
    data: res?.data || {}
  }, {
    status: res ? 200 : 404,
  })
}
export async function getStaticPaths() {
    const response = await fetch(siteConfig.Api.replace(/\/v2/g, '')).then(res => res.json());
    // console.log(response, 'response');
    const { endpoints, ...data } = response;
    return endpoints?.map((endpoint:string) => {
      return {
        params: { path: endpoint.replace(/\/v2/g, '') || '/' },
        props: { ...data },
      };
    });
  }