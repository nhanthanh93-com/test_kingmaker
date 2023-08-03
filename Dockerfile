FROM node:18-slim As deps
# yarn already included in node
# RUN npm i -g yarn 

###################
# BUILD 
###################

FROM deps as builder

WORKDIR /home/node/app/web

RUN apt-get update
RUN apt-get install -y openssl

COPY --chown=node:node package*.json ./
COPY --chown=node:node yarn*.lock ./

RUN  yarn install --frozen-lockfile

COPY --chown=node:node . .

RUN yarn build

# ###################
# PROD
# ###################

FROM deps As prod

WORKDIR /home/node/app/web

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /home/node/app/web/next.config.js ./
COPY --from=builder /home/node/app/web/public ./public
COPY --from=builder /home/node/app/web/package.json ./package.json
COPY --from=builder --chown=nextjs:nodejs /home/node/app/web/.next ./.next
COPY --from=builder /home/node/app/web/node_modules ./node_modules

USER nextjs

CMD sh -c "yarn start"
