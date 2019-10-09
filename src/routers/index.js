'use strict'

const personalChildRouter = require('./personal')
const { userChildRouter, loginController } = require('./user')

const express = require('express')
const router = express.Router()

router.post('/login', loginController)
router.use('/personal', personalChildRouter)
router.use('/user', userChildRouter)

module.exports = router
