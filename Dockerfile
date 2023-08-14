# Dockerfile

# Set the build argument for DATABASE_URL
ARG DATABASE_URL

# Build Stage
FROM node:18 AS BUILD_IMAGE
WORKDIR /app

# Install dependencies
COPY . .
RUN yarn install --frozen-lockfile

# Build Source Code
COPY ./src ./src
RUN yarn build
RUN yarn install --frozen-lockfile --production

# Final Stage
FROM node:18

# Copy build artifacts
COPY --from=BUILD_IMAGE /app/lib /app/lib
COPY --from=BUILD_IMAGE /app/node_modules /app/node_modules
COPY --from=BUILD_IMAGE /app/prisma /app/prisma
COPY --from=BUILD_IMAGE /app/.docker/scripts /app/.docker/scripts

# Copy remaining files
COPY ./*.js ./package.json ./tsconfig.json ./yarn.lock ./default.yaml ./

# Set the DATABASE_URL environment variable
ENV DATABASE_URL=$DATABASE_URL

WORKDIR /app

# Start the application
CMD [".docker/scripts/start.sh"]
