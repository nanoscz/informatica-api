'use strict'

const { UserController } = require('../controllers')

const express = require('express')
const router = express.Router()
const userController = new UserController()

router
  .route('/')
  .get(userController.findAll)
  .post(userController.create)

router
  .route('/:id')
  .get(userController.findOne)
  .patch(userController.update)
  .delete(userController.delete)

module.exports = router
