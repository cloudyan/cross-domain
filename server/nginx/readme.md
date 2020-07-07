# 通过 Nginx 代理跨域

跨域原理： 同源策略是浏览器的安全策略，不是HTTP协议的一部分。服务器端调用HTTP接口只是使用HTTP协议，不会执行JS脚本，不需要同源策略，也就不存在跨域问题。

实现思路：

通过nginx配置一个代理服务器（域名与domain1相同，端口不同）做跳板机，反向代理访问domain2接口，并且可以顺便修改cookie中domain信息，方便当前域cookie写入，实现跨域登录。

步骤

1. 前端服务 domain1.com
2. nginx 代理服务器 domain1.com:8888 反向代理访问 domain2.com
3. 修改 cookie 的 domain 信息
4. 实现跨域

本地测试实现流程

1. 修改 host， www.domain1.com www.domain2.com 指向本地
2. 本地前端 :5500 映射到 docker:80
3. 本地服务端 :8800 映射到 docker:81
4. :5510 反向代理到 127.0.0.1:8888
5. 修改 cookie

## 配置 Nginx

直接启用一个 docker，将配置指向 server/nginx/conf.d

```bash
# 启动 docker nginx
docker run -it
  --name nginx
  -p 5500:80
  -v ~/docker/data/h5:/data/apps/h5
  -v ~/docker/nginx/conf.d:/etc/nginx/conf.d
  nginx:alpine

# 进入
docker exec -it nginx /bin/sh

# 把配置拷贝到 ~/docker/nginx/conf.d
mkdir -p ~/docker/nginx/conf.d
cp -R ./server/nginx/conf.d/ ~/docker/nginx/conf.d/

# 检查配置是否正确
docker exec nginx nginx -t

# 重启 nginx
docker exec nginx nginx -s reload

# or 重启 docker nginx
docker restart nginx
```
