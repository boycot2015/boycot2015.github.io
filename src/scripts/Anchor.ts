import { debounce } from "@/utils/index";
export default (post?:any) => {
    let sticky:any = document.querySelector('.main-inner>.byt-aside .sticky-aside');
    let anchor:any = document.querySelector('.main-inner>.byt-aside .sticky-aside .anchor');
    let url = location.pathname;
    if (url.includes('/eBook/') && window.innerWidth < 768) {
        document.querySelector('.main-inner>.byt-aside')?.classList.add('!hidden');
        return
    }
    document.querySelector('.main-inner>.byt-aside')?.classList.remove('!hidden');
    if (url.includes('/article/')) {
      document.querySelectorAll('.main-inner>.byt-aside >.byt-aside-item:not(.user)').forEach((i:any) => i.classList.add('!hidden'));
      document.querySelector('.main-inner>.byt-aside .sticky-aside .tags')?.classList.add('!hidden');
    } else {
      if (anchor) sticky.removeChild(anchor)
      document.querySelectorAll('.main-inner>.byt-aside >.byt-aside-item:not(.user)').forEach((i:any) => i.classList.remove('!hidden'));
      document.querySelector('.main-inner>.byt-aside .sticky-aside .tags')?.classList.remove('!hidden');
    }
    if (!sticky || !post) return;
    if (window.innerWidth < 768) return;
    let dom = document.createElement('div');
    dom.className = 'byt-aside-item !items-start anchor';
    // console.log(post.rendered.metadata, 'post');
    const { frontmatter = {} } = post.rendered.metadata;
    let headings = post.rendered.metadata.headings;
    const hasDep2 = headings.find((i:any) => i.depth === 2);
    !headings.find((i:any) => i.depth === 1) && headings.unshift({
      text: frontmatter.title,
      slug: frontmatter.title,
      depth: 1,
    })
    let styles: Record<number, string> = {
      1: 'pl-2',
      2: 'pl-4',
      3: hasDep2 ? 'pl-8' : 'pl-4',
    }
    const slug = decodeURIComponent(location.hash || '');
    // console.log(slug, 'slug');
    
    dom.innerHTML = `
    <h3 class="flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><!-- Icon from Gravity UI Icons by YANDEX LLC - https://github.com/gravity-ui/icons/blob/main/LICENSE --><path fill="#888888" fill-rule="evenodd" d="M0 4.5a3 3 0 0 1 3-3h1.257a3 3 0 0 1 2.122.879L7 3h4a3 3 0 0 1 3 3H5.449a3 3 0 0 0-2.573 1.457L1.43 9.867a.75.75 0 0 0 1.287.772l1.446-2.41A1.5 1.5 0 0 1 5.45 7.5h9.376a1.175 1.175 0 0 1 1.008 1.779l-1.96 3.265A3 3 0 0 1 11.302 14H2.94q-.179 0-.35-.028A3 3 0 0 1 0 11z" clip-rule="evenodd"/></svg>
      目录
    </h3>
    <ul class="leading-[18px] max-h-[260px] overflow-auto">${headings.map((i: any, index: number) => (
        `<li class="${styles[i.depth]} line-clamp-1"><a class="hover:!text-[var(--byt-main-color)] ${slug == `#${i.slug}` ? '!text-[var(--byt-main-color)]' : ''}" href="#${i.slug}">${i.text}</a></li>`
    ))}</ul>`.replace(/\,/g, '');
    if (anchor) sticky.removeChild(anchor)
    if (url.includes('/article/')) sticky.prepend(dom)
    dom.querySelectorAll('li')[0].classList.add('active')
    dom.querySelectorAll('li')[0].querySelector('a')?.classList.add('!text-[var(--byt-main-color)]')
    sticky.addEventListener('click', function (event:any){
      let target = event.target
      if(target.tagName === 'A'){
        dom.querySelectorAll('li').forEach((i:any) => {
          i.classList.remove('active')
          i.querySelector('a').classList.remove('!text-[var(--byt-main-color)]')
        });
        target.parentElement.classList.add('active')
        target.classList.add('!text-[var(--byt-main-color)]');
      }
    });
    let offsetTops:any = []
    let columnOffsetTops:any = []
    let timer:any = null
    function getOffsetTop(el:any):number {
      let offset = el.offsetTop;
      if(el.offsetParent != null) {
        return getOffsetTop(el.offsetParent) + offset;
      }
      return offset;
    }
    document.querySelectorAll('.main-inner-content h2, .main-inner-content h3').forEach((item:any) => {
      offsetTops.push(getOffsetTop(item))
    })
    dom.querySelectorAll('li').forEach((item:any) => {
      columnOffsetTops.push(item.offsetTop)
    })
    let isColumnScroll = false
    window.addEventListener('scroll', debounce(() => {
      // console.log(offsetTops, 'offsetTops');
      clearTimeout(timer)
      if (isColumnScroll) return
      let scrollTop = window.scrollY;
      let flag = true
      const len = offsetTops.length
      for (let i = len - 1; i >= 0; i--) {
        const curReference = offsetTops[i] // 当前参考值
        if (flag && scrollTop >= curReference - 10) {
          flag = false
          dom.querySelectorAll('li').forEach((i:any) => {
            i.classList.remove('active')
            i.querySelector('a').classList.remove('!text-[var(--byt-main-color)]')
          });
          dom.querySelectorAll('li')[i + 1].classList.add('active')
          dom.querySelectorAll('a')[i + 1].classList.add('!text-[var(--byt-main-color)]');
        }
      }
      if (scrollTop == 0) {
        dom.querySelectorAll('li').forEach((i:any) => {
          i.classList.remove('active')
          i.querySelector('a').classList.remove('!text-[var(--byt-main-color)]')
        });
        dom.querySelectorAll('li')[0].classList.add('active')
        dom.querySelectorAll('li')[0].querySelector('a')?.classList.add('!text-[var(--byt-main-color)]')
      }
      dom.querySelector('li.active')?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'nearest',
      })
    }, 100))
}