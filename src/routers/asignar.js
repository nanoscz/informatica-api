'use strict'

const { AsignarController } = require('../controllers')

const express = require('express')
const router = express.Router()
const asignarController = new AsignarController()

router
  .route('/')
  .post(asignarController.create)

router
  .route('/solicitud/:id')
  .get(asignarController.findBySolicitud)

router
  .route('/solicitud/:solicitudId/personal/:personalId')
  .delete(asignarController.delete)

module.exports = router
