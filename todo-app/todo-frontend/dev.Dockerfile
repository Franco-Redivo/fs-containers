FROM node:24

WORKDIR /usr/src/app

COPY . .

RUN npm install

ENV VITE_BACKEND_URL=/api

CMD ["npm", "run", "dev", "--", "--host"]