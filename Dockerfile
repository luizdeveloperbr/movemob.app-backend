FROM node:bullseye

WORKDIR /home/app

COPY package*.json ./

RUN npm install

COPY . ./

RUN npx prisma generate
RUN npm run build

ENV PORT=3000

EXPOSE 3000

ENTRYPOINT [ "npm", "run", "start:prod" ]
