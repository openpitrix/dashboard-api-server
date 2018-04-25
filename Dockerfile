FROM mhart/alpine-node:8
MAINTAINER sunnyw <iwisunny@gmail.com>

RUN mkdir -p /app

COPY .npmrc package.json /tmp/

RUN cd /tmp && npm install --verbose \
    && cd /app \
    && ln -s /tmp/node_modules

WORKDIR /app

#ADD . /app

EXPOSE 3000

ENTRYPOINT ["./node_modules/.bin/json-server", "-w", "index.js"]