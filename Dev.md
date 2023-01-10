## Autify Network Backend Documentation  

#### Dependencies 
---
Tools that orchestrate Autify Backend: 
```
1. Graphql - To make the APIs for end clients and internal usage. 
2. Express - Used to make the web server on which graphql is running 
3. Pino - A node.js logger, we use it to log nodejs in runtime
4. Apollo Server - Spec-compliant Graphql server to query the graphql APIs
5. dotenv - We use it to load the environment variables from .env file into process.env. 
6. Helmet - Used to set HTTP header for Express.
7. TypeGraphql - Used to create Graphql schema and resolvers using typscript.
8. Docker - We use docker to build images for it
```
> The project is set to use only nodejs version 18.

#### Spinup
---
This setup is tested with the following:
```
$ node --version
v18.13.0
$ yarn --version
v1.22.19
$ docker --version
Docker version 20.10.22, build 3a2c30b63a
$ docker compose version
Docker Compose version 2.14.2
```

Clone the repo and install dependencies:
```
$ git clone git@github.com:autifynetwork/Autify-Backend.git
$ cd Autify-Backend
$ yarn install 
```
To start the Graphql server and it's dependencies:
```
$ yarn dev
```
This will invoke nodemon and look for `.ts` files in the project and initiate graphql in watch
mode and excute `yarn run start` which then starts the triggers `graphql-main.js` and pipe it to `pino` and 
excute the server in runtime.
