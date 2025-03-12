FROM oven/bun:1

WORKDIR /usr/src/app
# not the docker layer optimization
COPY ./packages ./packages
COPY ./bun.lock ./bun.lock

COPY ./package.json ./package.json
COPY ./turbo.json ./turbo.json

COPY ./apps/ws ./apps/ws


RUN bun install 
RUN bun run db:migrate


EXPOSE 8080
# this command will be runned in the root folder of the monorepo but its for ws.....so write a script on the root package.json for this command
CMD ["bun", "run", "start:backend"]
