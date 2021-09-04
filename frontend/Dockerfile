FROM node:14.16.0-alpine3.13

WORKDIR /app

RUN npm -g config set user root

RUN npm install --force

COPY . /app

EXPOSE 3000

CMD ["npm", "start"]