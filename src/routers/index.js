'use strict'

const personalChildRouter = require('./personal')
const remitenteChildRouter = require('./remitente')
const solicitudChildRouter = require('./solicitud')
const asignarChildRouter = require('./asignar')

const { userChildRouter, loginController } = require('./user')

const express = require('express')
const router = express.Router()

router.post('/login', loginController)
router.use('/personal', personalChildRouter)
router.use('/remitente', remitenteChildRouter)
router.use('/solicitud', solicitudChildRouter)
router.use('/user', userChildRouter)
router.use('/asignar', asignarChildRouter)

module.exports = router
