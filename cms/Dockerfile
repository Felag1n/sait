
FROM node:18


WORKDIR /app


COPY package.json ./


RUN rm -rf node_modules package-lock.json


RUN npm install


COPY . .


EXPOSE 1337


CMD ["npm", "run", "develop"]

