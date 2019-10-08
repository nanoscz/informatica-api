'use strict'

const { PersonalController } = require('../controllers')

const express = require('express')
const router = express.Router()
const personalController = new PersonalController()

router
  .route('/')
  .get(personalController.findAll)
  .post(personalController.create)

router
  .route('/:id')
  .get(personalController.findOne)
  .patch(personalController.update)
  .delete(personalController.delete)

module.exports = router
