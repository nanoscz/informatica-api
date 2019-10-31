'use strict'

const { AsignarController } = require('../controllers')

const express = require('express')
const router = express.Router()
const asignarController = new AsignarController()

router
  .route('/solicitud/:id')
  .get(asignarController.findBySolicitud)

module.exports = router