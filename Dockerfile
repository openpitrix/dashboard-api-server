FROM mhart/alpine-node:8
MAINTAINER sunnyw <iwisunny@gmail.com>

ENV HOME=/app

RUN mkdir -p /app

COPY .npmrc package.json /tmp/

RUN cd /tmp && npm install --production --verbose \
    && cd /app \
    && ln -s /tmp/node_modules

WORKDIR /app

EXPOSE 3000

CMD ["sh", "./run.sh"]