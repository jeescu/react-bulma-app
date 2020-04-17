
# Stage 1 - the build process
FROM mhart/alpine-node:11 AS builder
WORKDIR /app
COPY . .

RUN npm install react-scripts@3.4.1 -g --silent
RUN yarn install
RUN yarn run build

# Stage 2 - the production environment
FROM mhart/alpine-node
RUN yarn global add serve
WORKDIR /app
COPY --from=builder /app/build .
CMD ["serve", "-p", "80", "-s", "."]