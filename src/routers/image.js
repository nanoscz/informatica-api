'use strict'

const { ImageController } = require('../controllers')

const express = require('express')
const router = express.Router()
const imageController = new ImageController()

router
  .route('/')
  .post(imageController.create)

router
.route('/:userId')
  .get(imageController.findOne)
  .patch(imageController.update)
  .delete(imageController.delete)

module.exports = router