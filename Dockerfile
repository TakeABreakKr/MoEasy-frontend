# 베이스 이미지
FROM node:20-alpine AS base

# 빌드 스테이지
FROM base AS builder

# pnpm 설치
RUN corepack enable && corepack prepare pnpm@latest --activate

# 작업 디렉토리 설정
WORKDIR /app

# 의존성 파일 복사
COPY pnpm-lock.yaml ./
COPY package.json ./
COPY pnpm-workspace.yaml ./

# 패키지 디렉토리 구조 복사
COPY packages/components/package.json ./packages/components/package.json
COPY packages/service/package.json ./packages/service/package.json

# 의존성 설치
RUN pnpm install --frozen-lockfile

# 소스 코드 복사
COPY packages/components ./packages/components
COPY packages/service ./packages/service

# Next.js의 standalone 빌드
WORKDIR /app/packages/service
RUN pnpm build


# 프로덕션 스테이지
FROM base AS runner

WORKDIR /app

# 비root 사용자로 실행
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

# 빌드된 standalone 출력물만 복사
COPY --from=builder --chown=nextjs:nodejs /app/packages/service/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/packages/service/.next/static ./packages/service/.next/static
COPY --from=builder --chown=nextjs:nodejs /app/packages/service/public ./packages/service/public

# 환경 변수 설정
ENV NODE_ENV=production
ENV PORT=4000
ENV HOSTNAME=0.0.0.0

# 포트 노출
EXPOSE 4000

# 서버 실행
CMD ["node", "packages/service/server.js"]