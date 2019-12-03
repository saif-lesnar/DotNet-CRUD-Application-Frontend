FROM node:10.15.0-alpine as node

WORKDIR /app

ADD ./package*.json ./

RUN npm i npm@latest -g
RUN npm install -g grunt-cli
#RUN npm install

COPY . .

RUN npm i
RUN npm run build:ci
RUN ls /app/dist


FROM node:10.15.0-alpine
WORKDIR /app
COPY --from=node /app/dist/ /app
RUN apk update
RUN apk add ca-certificates wget && rm -rf /var/cache/apk/*
EXPOSE 80
CMD [ "node", "server.js" ]