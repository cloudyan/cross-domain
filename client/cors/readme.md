# 通过 CORS 实现跨域

前端可使用 XHR 或 [Fetch](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch) 实现

不带 cookie 前端无需设置，如需要，则要配置发送带凭据的请求

- 服务端
  - `Access-Control-Allow-Origin`
- 客户端(如需要携带凭证，上述不能配置为 `*`)
  - `xhr.withCredentials = true;`
  - `fetch(url, {credentials:  'include'})`
