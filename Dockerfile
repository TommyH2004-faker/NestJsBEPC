# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

# Cài luôn cả devDependencies để build
RUN npm install

COPY . .

RUN npm run build

# Stage 2: Production
FROM node:20-alpine AS runner

WORKDIR /app

COPY package*.json ./

# Chỉ cài dependencies cần cho production
RUN npm install --only=production

# Copy dist từ builder stage
COPY --from=builder /app/dist ./dist

CMD ["node", "dist/main.js"]
