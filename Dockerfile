FROM node:20 AS builder

WORKDIR /app
RUN apt-get update && apt-get install -y bash libc6-dev make g++ python3 git
COPY package*.json tsconfig.json ./
RUN npm install --include=dev

COPY . .
RUN npm run build

# Production stage
FROM node:20 AS runner
WORKDIR /app

ENV NODE_ENV production

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

CMD ["npm", "start"]