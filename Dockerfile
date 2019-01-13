FROM nginx:1.13-alpine

COPY ./build /www

COPY nginx.conf /etc/nginx/nginx.conf
