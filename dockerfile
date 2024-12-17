FROM node:22.12.0-alpine3.21

WORKDIR /home/app

COPY package*json .
RUN npm install

COPY controllers controllers/
COPY database database/
COPY routes routes/
COPY server.js server.js

CMD [ "npm", "start" ]