# WebSocket 实现跨域

- https://socket.io/docs/

## websocket/socket/socket.io的区别

Socket是应用层与TCP/IP协议族通信的中间软件抽象层，它是一组接口。在设计模式中，Socket其实就是一个门面模式，它把复杂的TCP/IP协议族隐藏在Socket接口后面，对用户来说，一组简单的接口就是全部，让Socket去组织数据，以符合指定的协议。

Socket是传输控制层协议，WebSocket是应用层协议，Socket.io是一个框架

Websocket仅仅是 Socket.io实现实时通信的一个子集。

WebSocket是HTML5新增的一种通信协议，其特点是服务端可以主动向客户端推送信息，客户端也可以主动向服务端发送信息，是真正的双向平等对话，属于服务器推送技术的一种。

Socket.io完全由JavaScript实现、基于Node.js、支持WebSocket协议用于实时通信、跨平台的开源框架，它包括了客户端的JavaScript和服务器端的Node.js。也就是说Socket.io将Websocket和轮询（Polling）机制以及其它的实时通信方式封装成了通用的接口，并且在服务端实现了这些实时通信机制。

Socket.io中主要使用了websocket，将轮询作为其辅助选项，提供的是相同的接口。其与node.js一样，也是事件驱动的。

参考：

- https://blog.csdn.net/qq_24884131/article/details/99854480
