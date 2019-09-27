# From scratch
1. Create github repo
```sh
git init
```
2. Create npm project
```sh
npm init
```
3. Add fastify
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

4. Add a logger
> Pino Logger https://github.com/pinojs/pino
```
npm i pino
```
