FROM node:14-alpine

WORKDIR /usr/src/app
COPY app .

RUN npm i -g grpc-tools --unsafe-perm
RUN npm i

# RUN cd server && npx knex migrate:latest && npx knex seed:run

EXPOSE 50051
CMD npm run ${RUN_COMMAND}