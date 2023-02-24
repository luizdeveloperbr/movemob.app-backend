FROM node:16

WORKDIR /home/app

COPY package*.json ./

RUN npm install

COPY . ./

RUN npx prisma generate

RUN npm run build

ENTRYPOINT [ "npm", "run", "start:prod" ]
