# cross-domain

探究跨域的**原因**、**方法实现**及**原理**。

- 跨域产生的原因
- 跨域的实现方案
- 跨域实现原理

我们这里所说的是狭义的跨域，主要指由浏览器同源策略限制的一类请求场景

> 同源策略/SOP（Same origin policy）是一种约定，由Netscape公司1995年引入浏览器，它是浏览器最核心也最基本的安全功能，如果缺少了同源策略，浏览器很容易受到XSS、CSFR等攻击。所谓同源是指"**协议+域名+端口**"三者相同，即便两个不同的域名指向同一个ip地址，也非同源。

同源策略限制以下几种行为：

1. Cookie、LocalStorage 和 IndexDB 无法读取
2. DOM 和 Js对象无法获得
3. AJAX 请求不能发送

跨域实现方案主要为解决跨域通信问题，通常解决场景为 ajax 请求跨域，以及ajax请求带凭证(cookie)

## 跨域实现

- [x] jsonp
- [x] cors 🔥
- [x] nginx 🔥
- [x] postMessage
- [x] middleware
- [x] websocket
- [x] location.hash + iframe
- [x] window.name + iframe
- [x] document.domain + iframe
  - document.domain [已弃用](https://developer.mozilla.org/en-US/docs/Web/API/Document/domain)，不再推荐此功能。
  - 对于 `document.domain`, [Chrome 禁止修改 document.domain](https://developer.chrome.com/blog/document-domain-setter-deprecation/)从 [Chrome 115](https://chromiumdash.appspot.com/schedule) 开始，网站将无法设置 `document.domain`：Chrome 将设置为`document.domain`不可变。
  - 使用 setter (`document.domain=...`) 不会引发异常。它只会不再产生作用。
  - 要进行跨源通信，您需要使用替代方法，例如 `postMessage()` Channel Messaging API。
  - 为什么禁止修改 document.domain
    - `document.domain` 旨在获取或设置源主机名。许多网站设置 `document.domain` 为允许**同一站点但跨源**页面之间的通信。(即跨站)
    - 它引入了安全风险，因为它[放宽了同源策略](https://html.spec.whatwg.org/multipage/browsers.html#relaxing-the-same-origin-restriction)。
  - 参见：chrome://flags 配置项 Disable site isolation
    - 禁用站点隔离（SitePerProcess、IsolateOrigins等）
  - [理解“同站”和“同源”](https://web.dev/i18n/zh/same-site-same-origin/)
    - 同源 和 跨源 same-origin cross-origin
    - 同站 和 跨站 same-site cross-site
      - 请求头 Sec-Fetch-Site
    - [什么是 eTLD + 1？](https://jfhr.me/what-is-an-etld-+-1/)



## 跨窗口通信方案

- [ ] WebSocket
- [ ] setInterval + sessionStorage
- [ ] localStorage
- [ ] BroadcastChannel
- [ ] SharedWorker

### 其他

- [x] 本地实现 https
- [x] [解决canvas图片getImageData,toDataURL cross-origin跨域问题](https://www.zhangxinxu.com/wordpress/2018/02/crossorigin-canvas-getimagedata-cors/)
  - 服务端: 添加 `Access-Control-Allow-Origin`
  - 客户端: 添加 `img.crossOrigin='anonymous'`
    - 只要`crossOrigin`的属性值不是`use-credentials`，全部都会解析为`anonymous`，包括空字符串，包括类似'abc'这样的字符。
  - `<= IE10` 不支持 `crossOrigin` 详见上文链接

参考：

- [前端常见跨域解决方案（全）](https://segmentfault.com/a/1190000011145364)
- [不要再问我跨域的问题了](https://segmentfault.com/a/1190000015597029)
- [跨域资源共享 CORS 详解](http://www.ruanyifeng.com/blog/2016/04/cors.html)
- [快速入门跨域demo](https://github.com/FatDong1/cross-domain)
- [跨域请求的8中处理方法](https://github.com/Heyff12/cross-domain)
- [cross-domain](https://github.com/luoquanquan/cross-domain)
- [【Web技术】1091- 跨浏览器窗口 ，7种方式，你还知道几种呢？](https://mp.weixin.qq.com/s/739tSKFSLZbfeUR6OOmEhg)
