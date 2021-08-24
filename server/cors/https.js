// 怎么本地实现 https 的服务设置
// 参考: https://mp.weixin.qq.com/s/LOzSGaimT37P502D2X_buA

// 生成证书
// brew install mkcert
// mkcert -install 将根证书加入本地可信CA中
// cd ./cert && mkcert myname.com

// curl -k https://localhost:8000/
// curl 测试已经通了，但 chrome/safari 访问会有安全提示
const http = require('http');
const https = require('https');
const fs = require('fs');
// const path = require('path');

// const options = {
//   key: fs.readFileSync(path.resolve(__dirname, './cert/local-key.pem')),
//   cert: fs.readFileSync(path.resolve(__dirname, './cert/local.pem'))
// }

const options = {
  key: fs.readFileSync('./cert/myname.com-key.pem'),
  cert: fs.readFileSync('./cert/myname.com.pem')
};

const PORT = 8000;
http.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('hello http\n');
}).listen(PORT, () => {
  console.log('服务启动成功, 正在监听: ', `http://127.0.0.1:${PORT}`);
});
https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('hello https\n');
}).listen(PORT+1, () => {
  console.log('服务启动成功, 正在监听: ', `https://127.0.0.1:${PORT+1}`);
});
