ARG BASE_IMAGE=node:20-alpine
FROM ${BASE_IMAGE} AS builder

RUN set -ex; \
  apk update; \
  apk add git

ARG APP_SRC=/usr/src/app
ARG REPOSITORY=https://github.com/empostigo/sportsee.git
WORKDIR ${APP_SRC}
RUN set -ex; \
  git clone ${REPOSITORY}

FROM ${BASE_IMAGE}

ARG USERNAME=nodejs
ARG GROUPNAME=nodejs
ARG APP_SRC=/usr/src/app
ARG APP_ROOT=${APP_SRC}/sportsee/service
RUN set -ex; \
  addgroup -S ${GROUPNAME}; \
  adduser -S -G ${GROUPNAME} ${USERNAME}
USER ${USERNAME}
WORKDIR ${APP_SRC}
COPY --from=builder --chown=${USERNAME}:${GROUPNAME} ${APP_ROOT} ${APP_SRC}

RUN set -ex; \
  npm i

CMD ["npm", "run", "dev"]