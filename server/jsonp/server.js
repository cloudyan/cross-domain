const http = require('http');
const url = require('url');

const PORT = 8888;

// 创建一个 http 服务
const server = http.createServer((request, response) => {
  // https://nodejs.org/dist/latest-v14.x/docs/api/url.html#url_url_parse_urlstring_parsequerystring_slashesdenotehost
  const { query } = url.parse(request.url, true);

  const body = JSON.stringify({
    data: {
      message: '自定义数据',
    },
    errno: 0,
    errmsg: '成功',
  })

  response.end(`${query.callback}(${body})`);
});

// 启动服务, 监听端口
server.listen(PORT, () => {
  console.log('服务启动成功, 正在监听: ', PORT);
});
