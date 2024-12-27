FROM ubuntu
RUN apt-get update && apt-get install -y curl
RUN curl -fsSL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
RUN /bin/sh -c -E bash nodesource_setup.sh
RUN apt-get install -y nodejs
RUN apt-get install -y npm 
LABEL contact="bezerramaike@gmail.com"
LABEL version="1.0"
EXPOSE 3000
WORKDIR /app
COPY /public ./public
COPY /src ./src
COPY package.json .
COPY tsconfig.json .
RUN npm install
CMD [ "npm", "start" ]