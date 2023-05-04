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
FROM nginx

RUN rm /etc/nginx/conf.d/default.conf

COPY build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]