ARG NODE_VERSION

FROM node:${NODE_VERSION:?error}-alpine AS development-dependencies-env
COPY . /back-end/
WORKDIR /back-end
RUN npm ci

FROM node:${NODE_VERSION}-alpine AS production-dependencies-env
COPY ./package.json package-lock.json /back-end/
COPY ./.husky/install.mts /back-end/.husky/install.mts
WORKDIR /back-end
RUN npm ci --omit=dev

FROM node:${NODE_VERSION}-alpine AS build-env
COPY . /back-end/
COPY --from=development-dependencies-env /back-end/node_modules /back-end/node_modules
WORKDIR /back-end
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
COPY ./.env.development /back-end/.env.production
COPY ./package.json package-lock.json /back-end/
COPY --from=production-dependencies-env /back-end/node_modules /back-end/node_modules
COPY --from=build-env /back-end/build /back-end/build
COPY --from=build-env /back-end/public /back-end/public
WORKDIR /back-end
CMD ["npm", "run", "start"]

FROM development-env AS production-env
COPY ./.env.production /back-end/.env.production

EXPOSE $PORT
