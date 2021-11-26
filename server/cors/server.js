const http = require('http');

// nodemon ./server/index.js
const PORT = 8888;

// 协议名必填, 如果同时存在 http 和 https 就写两条
const allowOrigin = [
  'http://127.0.0.1:3000',
  'http://localhost:3000',
  'http://127.0.0.1:5000',
  'http://localhost:5000',
  'http://localhost:8080',
  'http://127.0.0.1:8080',
  'http://localhost:8090',
  'http://127.0.0.1:8090',
  'http://localhost:8000',
  'http://127.0.0.1:8000',
  // 'https://localhost:5500',
];

// 创建一个 http 服务
const server = http.createServer((request, response) => {
  const { method, headers: { origin, cookie } } = request;

  // 允许跨域访问的域名：若有端口需写全（协议+域名+端口），若没有端口末尾不用加'/'
  // 如果需要http请求中带上cookie，需要前后端都设置credentials，且后端设置指定的origin
  // 允许前端带认证cookie：启用此项后，上面的域名不能为'*'，必须指定具体的域名，否则浏览器会提示
  if (allowOrigin.includes(origin)) {
    response.setHeader('Access-Control-Allow-Origin', origin);
  }

  // if fetch include or xhr withCredentials
  response.setHeader('Access-Control-Allow-Credentials', true);

  // 非简单请求的CORS请求，会在正式通信之前，增加一次HTTP查询请求，称为"预检"请求（preflight）
  // 这种情况下除了设置origin，还需要设置Access-Control-Request-Method以及Access-Control-Request-Headers
  response.setHeader('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, token');
  response.setHeader('Access-Control-Expose-Headers', 'token');
  response.setHeader('token', 'nodejs-session');

  if (method === 'OPTIONS') {
    // 提示OPTIONS预检时，后端需要设置的两个常用自定义头
    // response.setHeader("Access-Control-Allow-Headers", "Content-Type,X-Requested-With");
    response.writeHead(204);
    response.end('');
  } else if (!cookie) {
    // TIPS:
    // SameSite=Lax 要求 cros 要同根域，
    // 如要修复此问题，需改为 SameSite=None,必须同时设置 Secure（Cookie 只能通过 HTTPS 协议发送）
    // 此处非 https 服务，所以示例有问题
    response.setHeader('Set-Cookie', 'nodejs-session=123qwe; SameSite=None; Secure');
  }

  var body = JSON.stringify({
    data: {
      message: '自定义数据',
    },
    errno: 0,
    errmsg: '成功',
  })

  response.end(`${body}`);
});

// 启动服务, 监听端口
server.listen(PORT, () => {
  console.log('服务启动成功, 正在监听: ', PORT);
});
