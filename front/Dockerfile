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
RUN set -ex; \
  sed -i 's#http://localhost:3000#https://oc-sportsee-backend.hub.empostigo.dev#' sportsee/front/src/components/Root/Root.jsx

FROM ${BASE_IMAGE}

ARG USERNAME=reactjs
ARG GROUPNAME=reactjs
ARG APP_SRC=/usr/src/app
ARG APP_ROOT=${APP_SRC}/sportsee/front
RUN set -ex; \
  addgroup -S ${GROUPNAME}; \
  adduser -S -G ${GROUPNAME} ${USERNAME}
USER ${USERNAME}
WORKDIR ${APP_SRC}
COPY --from=builder --chown=${USERNAME}:${GROUPNAME} ${APP_ROOT} ${APP_SRC}

RUN set -ex; \
  npm i

CMD ["npx", "vite", "--host"]