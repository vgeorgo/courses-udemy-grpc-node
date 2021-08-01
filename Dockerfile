FROM node:14-alpine

WORKDIR /usr/src/app

COPY certs ./certs
COPY protos ./protos
COPY server ./server
COPY package*.json ./

RUN npm install

CMD [ "npm", "run", "static-server" ]