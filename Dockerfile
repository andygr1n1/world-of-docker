FROM node:15

WORKDIR /camp

COPY package.json /camp

ARG NODE_ENV

RUN npm install -g ts-node

RUN if [ "NODE_ENV" = "dev" ]; \
        then npm install; \
        else npm install --only=production; \
        fi

COPY . /camp

ENV PORT 9009

EXPOSE $PORT

CMD [ "npm", "start" ]
