const fastify = require('fastify')

const sequelize = require('./db-connection')
const logger = require('./logger')

const server = fastify({
  logger
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

  sequelize
    .authenticate()
    .then(() => {
      server.log.info('Connection has been established successfully.')
    })
    .catch((dbErr) => {
      server.log.error('Unable to connect to the database:', dbErr)
    })

  server.log.info(`server listening on ${address}`)
})
