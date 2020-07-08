# postMessage

window.postMessage() 方法可以安全地实现跨源通信。

> otherWindow.postMessage(message, targetOrigin, [transfer]);

使用场景

- 跨域通信（包括 GET, POST）, 通过 iframe
  - 父窗体创建跨域iframe并发送信息
  - 子窗体接收信息并处理
- WebWorker
- Service Worker

参考：

- https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage
- https://juejin.im/post/5b8359f351882542ba1dcc31
