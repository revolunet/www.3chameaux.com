FROM node:7-alpine

RUN apk add --update python build-base

ADD package.json .
ADD package-lock.json .
RUN npm install

ADD . .

RUN npm run build

FROM registry.gitlab.factory.social.gouv.fr/socialgouv/docker/nginx4spa:1.15.0

COPY --from=0 ./build /usr/share/nginx/html/