const http = require('http');

const PORT = 8888;

// 协议名必填, 如果同时存在 http 和 https 就写两条
const allowOrigin = [
  'http://127.0.0.1:5500',
  'http://localhost:5500',
  // 'https://localhost:5500',
];

// 创建一个 http 服务
const server = http.createServer((request, response) => {
  const { method, headers: { origin, cookie } } = request;

  // 允许跨域访问的域名：若有端口需写全（协议+域名+端口），若没有端口末尾不用加'/'
  if (allowOrigin.includes(origin)) {
    response.setHeader('Access-Control-Allow-Origin', origin);
  }
  // 允许前端带认证cookie：启用此项后，上面的域名不能为'*'，必须指定具体的域名，否则浏览器会提示
  response.setHeader('Access-Control-Allow-Credentials', true);

  response.setHeader('Access-Control-Allow-Methods', 'GET,POST');
  response.setHeader('Access-Control-Allow-Headers', 'token');
  response.setHeader('Access-Control-Expose-Headers', 'token');
  response.setHeader('token', 'nodejs-session');

  if (method === 'OPTIONS') {
    // 提示OPTIONS预检时，后端需要设置的两个常用自定义头
    // response.setHeader("Access-Control-Allow-Headers", "Content-Type,X-Requested-With");
    response.writeHead(204);
    response.end('');
  } else if (!cookie) {
    response.setHeader('Set-Cookie', 'nodejs-session=123qwe');
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
