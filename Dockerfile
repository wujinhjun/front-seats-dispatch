FROM node:18

WORKDIR /app

COPY . /app/

RUN npm install -g pnpm

ENV PNPM_HOME=/usr/local/bin

RUN pnpm config set store-dir /usr/local/bin/store/v3 --global

RUN pnpm install -g serve

RUN pnpm install

RUN pnpm run build

EXPOSE 3000

CMD ["pnpm", "start"]