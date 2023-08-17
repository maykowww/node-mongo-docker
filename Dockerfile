FROM node:18 as BUILDER

WORKDIR /app/

COPY package.json .

# COPY yarn.lock .

RUN npm i

COPY . .

RUN npm run build

FROM node:18-slim as PROD

RUN apt-get update && \
    apt-get install -y git

WORKDIR /app/

COPY package.json .

RUN yarn install --prod

COPY --from=BUILDER /app/dist ./dist

CMD ["node", "dist/index.js" ]
