# From scratch
### 1. Create github repo
```sh
git init
```
### 2. Create npm project
```sh
npm init
```
### 3. Add fastify
> From https://github.com/fastify/fastify/blob/master/docs/Getting-Started.md
```sh
npm i fastify
```

```js
// Require the framework and instantiate it
const fastify = require('fastify')

const server = fastify({
  logger: true
})

// Declare a route
server.get('/', (request, reply) => {
  reply.send({ hello: 'world' })
})

// Run the server!
server.listen(3000, (err, address) => {
  if (err) {
    server.log.error(err)
    process.exit(1)
  }
  server.log.info(`server listening on ${address}`)
})
```

### 4. Add a logger
> Pino Logger https://github.com/pinojs/pino
```sh
npm i pino
```

### 5. Pretty print logger
```sh
npm i pino-pretty
```

```js
const pino = require('pino')

module.exports = pino({
  level: 'trace',
  prettyPrint: true
})
```

### 6. Add eslint
```sh
npm i eslint
```

We will use airbnb base as an starting point
> https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base#usage

```sh
npx install-peerdeps --dev eslint-config-airbnb-base
```
