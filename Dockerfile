FROM node:7-alpine

RUN apk add --update python build-base

ADD package.json .
ADD package-lock.json .
RUN npm install

ADD . .

RUN npm run build

FROM ghcr.io/socialgouv/docker/nginx4spa:7.3.0

COPY --from=0 ./build /usr/share/nginx/html/