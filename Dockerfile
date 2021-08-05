FROM node:10-alpine
ENV PORT 3333
WORKDIR /usr/src/app
COPY . /usr/src/app

RUN npm install -g nodemon
RUN npm install

ENTRYPOINT ["nodemon", "/usr/src/app/src/index.js"]