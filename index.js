const fastify = require('fastify')

const logger = require('./logger')

const server = fastify({
  logger
})

// Declare a route
server.get('/', function (request, reply) {
  reply.send({ hello: 'world' })
})

// Run the server!
server.listen(3000, function (err, address) {
  if (err) {
    server.log.error(err)
    process.exit(1)
  }
  server.log.info(`server listening on ${address}`)
})