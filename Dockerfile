FROM node:16.19.1-bullseye-slim

WORKDIR /home/app

COPY package*.json ./

RUN npm install

COPY . ./

RUN npx prisma generate

RUN npm run build

EXPOSE 3000

ENTRYPOINT [ "npm", "run", "start:prod" ]
