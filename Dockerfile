FROM jarredsumner/bun:edge

WORKDIR /app
ADD . .
RUN bun install
CMD ["bun", "main.ts"]