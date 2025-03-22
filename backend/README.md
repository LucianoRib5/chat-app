## Description

Api chat app

## Basic folder structure

```bash
    chat-app/
    │── backend/
    │   ├── src/  
    │   │   ├── modules/  
    │   │   ├── common/  
    │   │   ├── database/  
    │   │   ├── main.ts  
    │   │   ├── app.module.ts  
    │   ├── test/  
    │   ├── .env  
    │   ├── package.json  
    │   ├── tsconfig.json
    │   ├── docker-compose.yml
```

## Project setup

```bash
$ yarn install
```

## Compile and run the project

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Run tests

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```
