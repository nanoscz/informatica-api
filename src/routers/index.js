'use strict'

const personalChildRouter = require('./personal')
const remitenteChildRouter = require('./remitente')
const { userChildRouter, loginController } = require('./user')

const express = require('express')
const router = express.Router()

router.post('/login', loginController)
router.use('/personal', personalChildRouter)
router.use('/remitente', remitenteChildRouter)
router.use('/user', userChildRouter)

module.exports = router
