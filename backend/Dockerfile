# FROM node

# WORKDIR /dist


# COPY package*.json .

# RUN npm install

# COPY . .

# RUN npx prisma generate --schema ./prisma/schema.prisma

# # RUN npm run build # For production
# # EXPOSE 3000

# CMD npm run start:prod


FROM node:21-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate --schema ./prisma/schema.prisma

RUN npm run build

CMD npm run start:prod
