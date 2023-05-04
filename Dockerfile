# FROM node:18 as build

# WORKDIR /app

# COPY . /app/

# RUN npm install -g pnpm

# ENV PNPM_HOME=/usr/local/bin

# RUN pnpm config set store-dir /usr/local/bin/store/v3 --global

# RUN pnpm install

# RUN pnpm run build

# FROM nginx:alpine as production-stage

# COPY nginx.conf /etc/nginx/nginx.conf

# COPY --from=build /app/build /usr/share/nginx/html

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]
# 使用NGINX作为基础映像
FROM nginx

# 移除旧的NGINX配置文件
RUN rm /etc/nginx/conf.d/default.conf

# 将React应用程序的生产版本复制到NGINX默认文件夹
COPY build /usr/share/nginx/html

# 将自定义NGINX配置文件复制到容器中
COPY nginx.conf /etc/nginx/nginx.conf

# 暴露NGINX服务的端口
EXPOSE 80

# 启动NGINX服务
CMD ["nginx", "-g", "daemon off;"]