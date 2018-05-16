FROM node:9-alpine
MAINTAINER sunnyw <iwisunny@gmail.com>

WORKDIR /app

COPY public /app/public
COPY build/server.js /app/

EXPOSE 3000

CMD ["node", "server.js"]