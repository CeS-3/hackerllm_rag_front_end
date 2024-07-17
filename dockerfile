# 使用官方 Node.js 镜像作为基础镜像
FROM node:14-alpine

# 设置工作目录
WORKDIR /app

# 复制 yarn.lock 和 package.json 到工作目录
COPY package.json yarn.lock ./

# 安装项目依赖
RUN yarn install

# 复制项目文件到工作目录
COPY . .

# 构建项目
RUN yarn build

# 使用一个轻量级的 web 服务器来服务静态文件
FROM nginx:alpine

# 复制构建的文件到 nginx 服务器目录
COPY --from=0 /app/dist /usr/share/nginx/html

# 暴露端口
EXPOSE 80

# 启动 nginx
CMD ["nginx", "-g", "daemon off;"]
