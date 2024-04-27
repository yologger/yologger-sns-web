FROM yologger1013/node:16.18.0

RUN mkdir -p web
WORKDIR /web
ADD . /web

CMD ["yarn", "start"]