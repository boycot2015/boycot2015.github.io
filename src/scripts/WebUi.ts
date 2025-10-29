import { LoadScript } from "@/utils/index";
// declare const WebComponents: any;
export default async () => {
  await LoadScript("/assets/js/wc-ui.min.js");
//   console.log(WebComponents, 'WebComponents');
};