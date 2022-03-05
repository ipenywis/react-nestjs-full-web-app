FROM node:14-alpine AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/api

COPY package.json .
COPY yarn.lock .

RUN yarn global add @nestjs/cli
RUN yarn install --production=true

RUN apk -q update && apk add --no-cache netcat-openbsd

COPY . .

RUN yarn build 

CMD ["sh", "-c", "yarn typeorm migration:run && yarn start:prod"]