FROM node:20

WORKDIR /app

COPY . .

RUN npm install

RUN npm install -g astro

EXPOSE 4321

CMD ["npm", "run", "dev"]
