ARG NODE_VERSION

FROM node:${NODE_VERSION:?error}-alpine AS development-dependencies-env
COPY . /app/
WORKDIR /app
RUN npm ci

FROM node:${NODE_VERSION}-alpine AS production-dependencies-env
COPY ./package.json package-lock.json /app/
WORKDIR /app
RUN npm ci --omit=dev

FROM node:${NODE_VERSION}-alpine AS build-env
COPY . /app/
COPY --from=development-dependencies-env /app/node_modules /app/node_modules
WORKDIR /app
RUN npm run build

FROM node:${NODE_VERSION}-alpine AS development-env
ARG PORT \
    DATABASE_HOST_ADDRESS \
    DATABASE_PORT \
    DATABASE_USERNAME \
    DATABASE_PASSWORD \
    DATABASE_NAME
ENV PORT=$PORT \
    DATABASE_HOST_ADDRESS=$DATABASE_HOST_ADDRESS \
    DATABASE_PORT=$DATABASE_PORT \
    DATABASE_USERNAME=$DATABASE_USERNAME \
    DATABASE_PASSWORD=$DATABASE_PASSWORD \
    DATABASE_NAME=$DATABASE_NAME
COPY ./.env.development /app/.env.production
COPY ./package.json package-lock.json /app/
COPY --from=production-dependencies-env /app/node_modules /app/node_modules
COPY --from=build-env /app/build /app/build
COPY --from=build-env /app/public /app/public
WORKDIR /app
CMD ["npm", "run", "start"]

FROM development-env AS production-env
COPY ./.env.production /app/.env.production

EXPOSE $PORT
