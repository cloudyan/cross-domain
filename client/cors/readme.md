# 通过 CORS 实现跨域

前端可使用 XHR 或 [Fetch](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch) 实现

需要配置发送带凭据的请求

- `xhr.withCredentials = true;`
- `fetch(url, {credentials:  'include'})`
