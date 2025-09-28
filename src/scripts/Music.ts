import SITE_CONFIG from "@/config";
const { musicApi, musicBoxShow } = SITE_CONFIG;
import { $GET } from '@/utils/index'
import 'aplayer/dist/APlayer.min.css';
import APlayer from 'aplayer';
import { LoadScript } from "@/utils/index";
// 初始化音乐播放器
export default async (MusicList: any[]) => {
  if (musicBoxShow && document.body.querySelector("meting-js") === null) {
    const config = { type: 'playlist', server: 'netease', id: 3778678, fixed: true, api: musicApi + '?server=:server&type=:type&id=:id&r=:r' }
    let mettingDiv = document.createElement('div');
    mettingDiv.innerHTML = `<meting-js type=${config.type} fixed=${config.fixed} server=${config.server} id=${config.id} api=${config.api}></meting-js>`;
    document.body.appendChild(mettingDiv);
    window.APlayer = APlayer;
    await LoadScript("/assets/js/metting.js");
  }
  const musicDOM: any = document.querySelectorAll(".byt-node.byt-music");
  if (!musicDOM.length) return;
  musicDOM.forEach(async (container: any) => {
    try {
      container.dataet = JSON.parse(container.dataset.config);
    } catch (error: any) {
      container.dataet = {};
    }
    const { type = 'playlist', server = 'netease', id = 3778678 } = container.dataet;
    const audio = await $GET(`${musicApi}?server=${server}&type=${type}&id=${id}&r=${Math.random()}`);
    const ap = new APlayer({ container, audio, lrcType: 3, autoplay: true });
    MusicList.push(ap);
  });
};
