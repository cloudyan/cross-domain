// 怎么本地实现 https 的服务设置
// 参考: https://mp.weixin.qq.com/s/LOzSGaimT37P502D2X_buA

// 生成证书 https://github.com/FiloSottile/mkcert
// brew install mkcert
// brew install nss # if you use Firefox
// mkcert -install 将根证书加入本地可信CA中
// cd ./cert && mkcert myname.com

// curl -k https://localhost:8000/
// chrome/safari 访问会有安全提示？(注意生成证书的格式，后面要加需要的域名或 IP，如：)
// mkcert localhost 127.0.0.1 ::1
// mkcert -install
const http = require('http');
const https = require('https');
const fs = require('fs');
// const path = require('path');

// const options = {
//   key: fs.readFileSync(path.resolve(__dirname, './cert/local-key.pem')),
//   cert: fs.readFileSync(path.resolve(__dirname, './cert/local.pem'))
// }

const options = {
  key: fs.readFileSync('./localhost+2-key.pem'),
  cert: fs.readFileSync('./localhost+2.pem')
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
