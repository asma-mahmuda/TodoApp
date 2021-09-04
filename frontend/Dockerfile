FROM node:14.16.0-alpine3.13

RUN addgroup app && adduser -S -G app app

WORKDIR /app
# To Fix Permissions for Packages
RUN npm config set unsafe-perm true

RUN npm install --force

COPY . /app

RUN chown -R node:node /app/node_modules

USER app

EXPOSE 3000 

CMD ["npm", "run", "start"]