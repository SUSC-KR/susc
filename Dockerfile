FROM node:20

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm install

RUN npm install -g astro

COPY . .

EXPOSE 4321

CMD ["npm", "run", "dev"]
