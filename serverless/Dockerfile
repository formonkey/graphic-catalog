FROM node:14-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN yarn

COPY . ./
EXPOSE 80

CMD [ "node", "index" ]
