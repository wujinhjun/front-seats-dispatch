# 使用 nginx:alpine 作为基础镜像
FROM nginx:alpine

# 将本地的 build 文件夹里的内容复制到 nginx 默认静态文件目录
COPY build /usr/share/nginx/html

# 将 nginx 的配置文件拷贝到容器中
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 声明容器要使用的端口
EXPOSE 80

# 启动 nginx 服务
CMD ["nginx", "-g", "daemon off;"]