FROM node:8.0

LABEL maintainer "mitchseymour@gmail.com"

# Install `serve` module  so we can serve static files
RUN yarn global add serve

# Prepare app directory
RUN mkdir -p /opt/app

# Copy the dependencies
ADD package.json /tmp/package.json
RUN cd /tmp && yarn install
RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/

# Build
WORKDIR /opt/app
ADD . /opt/app
RUN yarn build

# Expose the app port
EXPOSE 8000

# Start the app
CMD serve -p 8000 -s build
