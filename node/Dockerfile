FROM node:15.0

WORKDIR /app

COPY ./app/ ./

RUN npm install

EXPOSE 8080

CMD [ "node", "index.js" ]