# 通过 Nginx 代理跨域

跨域原理： 同源策略是浏览器的安全策略，不是HTTP协议的一部分。服务器端调用HTTP接口只是使用HTTP协议，不会执行JS脚本，不需要同源策略，也就不存在跨域问题。

实现思路：通过nginx配置一个代理服务器（域名与domain1相同，端口不同）做跳板机，反向代理访问domain2接口，并且可以顺便修改cookie中domain信息，方便当前域cookie写入，实现跨域登录。

## 配置 Nginx

直接启用一个 docker，将配置指向 server/nginx/conf.d

```bash
# 启动 docker nginx
docker run -it --name nginx -p 5500:80 -v ~/docker/data/h5:/data/apps/h5 -v ~/docker/nginx/conf.d:/etc/nginx/conf.d nginx:alpine sleep 1d

docker exec nginx /bin/sh

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
