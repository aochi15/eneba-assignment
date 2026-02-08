ARG NODE_VERSION

FROM node:${NODE_VERSION:?error}-alpine AS development-dependencies-env
COPY . /front-end/
WORKDIR /front-end
RUN npm ci

FROM node:${NODE_VERSION}-alpine AS production-dependencies-env
COPY ./package.json package-lock.json /front-end/
COPY ./.husky/install.mts /front-end/.husky/install.mts
WORKDIR /front-end
RUN npm ci --omit=dev

FROM node:${NODE_VERSION}-alpine AS build-env
COPY . /front-end/
COPY --from=development-dependencies-env /front-end/node_modules /front-end/node_modules
WORKDIR /front-end
RUN npm run build

FROM node:${NODE_VERSION}-alpine AS development-env
ARG PORT \
    BACK_END_HOST_ADDRESS \
    BACK_END_PORT \
    BACK_END_API_PREFIX \
    BACK_END_IMAGES_PREFIX
ENV PORT=$PORT \
    VITE_BACK_END_HOST_ADDRESS=$BACK_END_HOST_ADDRESS \
    VITE_BACK_END_PORT=$BACK_END_PORT \
    VITE_BACK_END_API_PREFIX=$BACK_END_API_PREFIX \
    VITE_BACK_END_IMAGES_PREFIX=$BACK_END_IMAGES_PREFIX
COPY ./.env.development /front-end/.env.production
COPY ./package.json package-lock.json /front-end/
COPY --from=production-dependencies-env /front-end/node_modules /front-end/node_modules
COPY --from=build-env /front-end/build /front-end/build
WORKDIR /front-end
CMD ["npm", "run", "start"]

FROM development-env AS production-env
COPY ./.env.production /front-end/.env.production

EXPOSE $PORT
