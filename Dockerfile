# Base images
FROM node:16-alpine

WORKDIR /app

# Copy dependecies
COPY package*.json /app

RUN npm ci --only=production && npm cache clean --force

# COPY SOURCE FILES INTO THE IMAGE
COPY . /app

CMD npm start

EXPOSE 8000