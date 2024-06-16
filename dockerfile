FROM node:lts

WORKDIR /QUICKVAC_FRONT

COPY package*.json ./

RUN npm install
RUN npm install dotenv

COPY . .

ARG PORT
ARG HOST
ENV PORT=${PORT}
ENV HOST=${HOST}

EXPOSE ${PORT}

CMD ["node", "set-env.ts", "--environment=dev"]
CMD ["sh", "-c", "ng serve --port ${PORT} --host ${HOST}"]
