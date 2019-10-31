'use strict'

const debug = require('debug')('informatica:api')
const morgan = require('morgan')
const http = require('http')
const express = require('express')
const cors = require('cors')
const compression = require('compression')
const chalk = require('chalk')
const nconf = require('nconf')
const settings = nconf.file({ file: 'config/config.json' })

const port = process.env.PORT || settings.get('settings').port
const format = settings.get('settings').morgan || 'tiny'

const router = require('./src/routers')

const app = express()
const server = http.createServer(app)

app.use(express.json())
app.use(morgan(format))
app.use(cors())
app.use(compression())
app.use('/v1', router)
app.use((err, req, res, next) => {
  debug(`Error: ${err.message}`)

  if (err.message.match(/not found/)) {
    return res.status(404).send({ error: err.message })
  }

  res.status(500).send({
    error: {
      name: err.name,
      message: err.message
    }
  })
})

function handleFatalError (err) {
  console.error(`${chalk.red('[fatal error]')} ${err.message}`)
  console.error(err.stack)
  process.exit(1)
}

if (!module.parent) {
  process.on('uncaughtException', handleFatalError)
  process.on('unhandledRejection', handleFatalError)

  server.listen(port, () => {
    debug('connecting...')
    console.log(`${chalk.green('[SERVER SUCCESSFUL]')} Server listening on port ${port}`)
  })
}
