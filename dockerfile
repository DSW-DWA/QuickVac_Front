FROM node:lts

WORKDIR /QUICKVAC_FRONT

COPY package*.json ./

RUN npm install

COPY . .

ARG PORT
ARG HOST
ENV PORT=${PORT}
ENV HOST=${HOST}

EXPOSE ${PORT}

CMD ["sh", "-c", "ng serve --port ${PORT} --host ${HOST}"]
