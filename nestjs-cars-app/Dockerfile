FROM node:14 AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/api

COPY package.json .
COPY yarn.lock .

RUN yarn global add @nestjs/cli
RUN yarn global add ts-node
RUN yarn install --production=true

#Install netcat 
RUN apt-get -q update && apt-get -qy install netcat

COPY . .

RUN yarn build 

CMD ["sh", "-c", "yarn ts-typeorm migration:run && yarn start:prod"]