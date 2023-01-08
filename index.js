const express = require('express')
const cors = require('cors')
const findLocalIp = require('./libs/ip')
const config = require('./config.json')

const init = () => {
  const app = express()

  //middlewares
  app.use(cors())
  app.use(express.json())

  /**
   * RUTAS
   */
  app.use('/images', express.static(config.imagesLocation))
  app.use('/', require(`${__dirname}/router/builder`))

  /**
   * EJECUCION DEL SERVIDOR
   */
  app.listen(config.port, async () => {
    console.log(`listening on ${findLocalIp()}:${config.port}`)
  })
}

init()
