FROM mcr.microsoft.com/playwright:v1.62.1-jammy

WORKDIR /workspace

COPY package*.json ./

RUN npm ci || npm install

COPY . .

RUN npx playwright install --with-deps chromium || true

CMD ["npx", "playwright", "test"]
