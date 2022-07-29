FROM docker.io/node:17-alpine as BUILDER

WORKDIR /app

ADD . .

RUN --mount=type=cache,target=/app/node_modules yarn install && NODE_ENV=production yarn build

FROM docker.io/nginx:1.21.3-alpine

COPY --from=BUILDER /app/build /usr/share/nginx/html
ADD nginx.conf /etc/nginx/nginx.conf
