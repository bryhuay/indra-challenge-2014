# Serverless - AWS Node.js Typescript

This project has been generated using the `aws-nodejs-typescript` template from the [Serverless framework](https://www.serverless.com/).

For detailed instructions, please refer to the [documentation](https://www.serverless.com/framework/docs/providers/aws/).

## Installation/deployment instructions

Depending on your preferred package manager, follow the instructions below to deploy your project.

> **Requirements**: NodeJS `lts/fermium (v.14.15.0)`. If you're using [nvm](https://github.com/nvm-sh/nvm), run `nvm use` to ensure you're using the same Node version in local and in your lambda's runtime.

### Using NPM

- Run `npm i` to install the project dependencies
- Run `npx sls deploy` to deploy this stack to AWS

### Using Yarn

- Run `yarn` to install the project dependencies
- Run `yarn sls deploy` to deploy this stack to AWS

## Test your service

This template contains a single lambda function triggered by an HTTP request made on the provisioned API Gateway REST API `/post/create` route with `POST` method. The request body must be provided as `application/json`. The body structure is tested by API Gateway against `src/functions/create-post/schema.ts` .


### Locally
Run `sls offline` to install the project dependencies and execute request with postman

or

In order to test the hello function locally, run the following command:

- `npx sls invoke local -f hello --path src/functions/create-post/mock.json` if you're using NPM
- `yarn sls invoke local -f hello --path src/functions/create-post/mock.json` if you're using Yarn

Check the [sls invoke local command documentation](https://www.serverless.com/framework/docs/providers/aws/cli-reference/invoke-local/) for more information.

### Remotely

Copy and replace your `url` - found in Serverless `deploy` command output - and `name` parameter in the following `curl` command in your terminal or in Postman to test your newly deployed application.

```
curl --location 'http://localhost:3000/dev/post/create   ' \
--header 'Content-Type: application/json' \
--data '{
  "author": "Silvia Cammi",
  "review": "Ejemplo de calificacion",
  "title": "Ejemplo de titulo",
  "observation": "ejemplo de observacion"
}'
```

## Template features

### Project structure

The project code base is mainly located within the `src` folder. This folder is divided in:

- `functions` - containing code base and configuration for your lambda functions
- `libs` - containing shared code base between your lambdas

```
.
├── src
│   ├── functions               # Lambda configuration and source code folder
│   │   ├── create-post
│   │   │   ├── handler.ts      # `create-post` lambda source code
│   │   │   ├── index.ts        # `create-post` lambda Serverless configuration
│   │   │   ├── mock.json       # `create-post` lambda input parameter, if any, for local invocation
│   │   │   └── schema.ts       # `create-post` lambda input event JSON-Schema
│   │   │
│   │   └── index.ts            # Import/export of all lambda configurations
│   │
│   └── libs                    # Lambda shared code
│       └── apiGateway.ts       # API Gateway specific helpers
│       └── handlerResolver.ts  # Sharable library for resolving lambda handlers
│       └── lambda.ts           # Lambda middleware
│
├── package.json
├── serverless.ts               # Serverless service file
├── tsconfig.json               # Typescript compiler configuration
├── tsconfig.paths.json         # Typescript paths
└── webpack.config.js           # Webpack configuration
```

### Despliegue
- Configure credentials of the AWS account where the deployment will be carried out with `sls config credentials`
- Run `sls deploy` to deploy project 

