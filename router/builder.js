const express = require('express')
const router = express.Router()

const controllers = require('../controllers/builder')

router.all('/builder', (req, res) =>
  controllers
    .builder(req)
    .then(data => res.status(200).json(data))
    .catch(error => res.status(400).json(error))
)

module.exports = router
