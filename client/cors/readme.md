# 通过 CORS 实现跨域

跨源资源共享（CORS，或通俗地译为跨域资源共享）是一种基于 HTTP 头的机制，该机制通过允许服务器标示除了它自己以外的其他源（域、协议或端口），使得浏览器允许这些源访问加载自己的资源。

跨源资源共享还通过一种机制来检查服务器是否会允许要发送的真实请求，该机制通过浏览器发起一个到服务器托管的跨源资源的 **“预检”请求**。在预检中，浏览器发送的头中标示有 HTTP 方法和真实请求中会用到的头。

前端可使用 XHR 或 [Fetch](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch) 实现

不带 cookie 前端无需设置，如需要，则要配置发送带凭据的请求

- 服务端
  - `Access-Control-Allow-Origin`
- 客户端(如需要携带凭证，上述不能配置为 `*`)
  - `xhr.withCredentials = true;`
  - `fetch(url, {credentials:  'include'})`

### 为何 CORS 跨域中会发送 options 请求？

复杂请求：不满足简单请求的都为复杂请求。在发送请求前，会使用 options 方法发起一个 预检请求（Preflight） 到服务器，以获知服务器是否允许该实际请求。

简单请求：满足如下条件的，将不会触发跨域检查：

- 请求方法为：`GET`、`POST`、`HEAD`
- 请求头：`Accept`、`Accept-Language`、`Content-Language`、`Content-Type`

其中 Content-Type 限定为 ：`text/plain`、`multipart/form-data`、`application/x-www-form-urlencoded`

