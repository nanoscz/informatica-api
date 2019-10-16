'use strict'

const { RemitenteController } = require('../controllers')

const express = require('express')
const router = express.Router()
const remitenteController = new RemitenteController()

router
  .route('/')
  .get(remitenteController.findAll)
  .post(remitenteController.create)

router
  .route('/:id')
  .get(remitenteController.findOne)
  .patch(remitenteController.update)
  .delete(remitenteController.delete)

module.exports = router