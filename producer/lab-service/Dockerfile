FROM node:12
LABEL MAINTAINER Rich Rose
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production
COPY . .
CMD [ "npm", "start" ]
