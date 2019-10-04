/* eslint-disable no-console */
const { spawn } = require('child-process-promise')

const spawnOptions = { stdio: 'inherit' }

const run = async () => {
  const url = process.env.DATABASE_URL || 'mysql://root@localhost:3306/database'

  try {
    console.log('Creating DB')

    // Create the DB
    await spawn('./node_modules/.bin/sequelize', ['db:create', `--url=${url}`], spawnOptions)

    console.log('DB Created')
  } catch (err) {
    console.log(`Error caught, assuming db already exists ${err}`)
  }
  process.exit(0)
}

run()
