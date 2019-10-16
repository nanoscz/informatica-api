'use strict'

const { SolicitudController } = require('../controllers')

const express = require('express')
const router = express.Router()
const solicitudController = new SolicitudController()

router
  .route('/')
  .post(solicitudController.create)

router
  .route('/:estado/all')
  .get(solicitudController.findAll)

router
  .route('/:id')
  .get(solicitudController.findOne)
  .patch(solicitudController.update)
  .delete(solicitudController.delete)

module.exports = router