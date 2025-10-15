---
title: 判断浏览器文档滚动方向
description: 判断用户是向上还是向下滚动
date: "2025-10-15T10:35:00Z"
categories: javascript
tags: ['javascript']
# music:
#   type: song
#   server: netease
#   id: 1420706073
recommend: true
---

通过监听滚动事件并比较当前滚动位置与之前的位置，可以判断用户是向上还是向下滚动。

### 示例代码
```js
let lastScrollTop = 0;

window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
    // 向下滚动
        console.log('向下滚动');
    } else {
        console.log('向上滚动');
    }

    lastScrollTop = scrollTop;
});
```
### 性能优化

由于滚动事件触发频繁，建议使用防抖或节流技术来优化性能。

### 防抖实现

```js
function debounce(fn, delay) {
    let timer;
    return function () {
    clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, arguments), delay);
    };
}

let lastScrollTop = 0;

window.addEventListener(
'scroll',
debounce(function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        console.log('向下滚动');
    } else {
        console.log('向上滚动');
    }

    lastScrollTop = scrollTop;
    }, 100)
);
```
### 节流实现

```js
function throttle(fn, limit) {
    let inThrottle;
    return function () {
        if (!inThrottle) {
            fn.apply(this, arguments);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}

let lastScrollTop = 0;

window.addEventListener(
'scroll',
throttle(function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        console.log('向下滚动');
    } else {
        console.log('向上滚动');
    }

    lastScrollTop = scrollTop;
    }, 100)
);
```
### 注意事项

兼容性：确保代码在不同浏览器中表现一致。

边界处理：考虑页面顶部和底部的特殊情况。

性能优化：务必使用防抖或节流技术，避免性能问题。