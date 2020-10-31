# Name the node stage "builder"
FROM node:12-slim AS builder
WORKDIR /app
COPY . .
RUN yarn && yarn build

FROM nginx
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]