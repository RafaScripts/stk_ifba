FROM node:18

WORKDIR /usr/src/app

COPY package.json .

COPY . .

RUN chmod +x entrypoint.sh

EXPOSE 3001

CMD ["npm", "start"]