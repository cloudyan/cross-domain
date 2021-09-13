# cross-domain

探究跨域的**原因**、**方法实现**及**原理**。

- 跨域产生的原因
- 跨域的实现方案
- 跨域实现原理

我们这里所说的是狭义的跨域，主要指由浏览器同源策略限制的一类请求场景

> 同源策略/SOP（Same origin policy）是一种约定，由Netscape公司1995年引入浏览器，它是浏览器最核心也最基本的安全功能，如果缺少了同源策略，浏览器很容易受到XSS、CSFR等攻击。所谓同源是指"协议+域名+端口"三者相同，即便两个不同的域名指向同一个ip地址，也非同源。

同源策略限制以下几种行为：

1. Cookie、LocalStorage 和 IndexDB 无法读取
2. DOM 和 Js对象无法获得
3. AJAX 请求不能发送

跨域实现方案主要为解决跨域通信问题，通常解决场景为 ajax 请求跨域，以及ajax请求带凭证(cookie)

## 跨域实现

- jsonp
- document.domain + iframe
- location.hash + iframe
- window.name + iframe
- postMessage
- cors !!!
- nginx !!!
- middleware
- websocket

### Todo

- [x] 本地实现 https
- [解决canvas图片getImageData,toDataURL跨域问题](https://www.zhangxinxu.com/wordpress/2018/02/crossorigin-canvas-getimagedata-cors/)

参考：

- [前端常见跨域解决方案（全）](https://segmentfault.com/a/1190000011145364)
- [不要再问我跨域的问题了](https://segmentfault.com/a/1190000015597029)
- [跨域资源共享 CORS 详解](http://www.ruanyifeng.com/blog/2016/04/cors.html)
- [快速入门跨域demo](https://github.com/FatDong1/cross-domain)
- [跨域请求的8中处理方法](https://github.com/Heyff12/cross-domain)
- [cross-domain](https://github.com/luoquanquan/cross-domain)
