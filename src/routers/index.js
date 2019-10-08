'use strict'

const personalChildRouter = require('./personal')
const userChildRouter = require('./user')

const express = require('express')
const router = express.Router()

router.use('/personal', personalChildRouter)
router.use('/user', userChildRouter)

module.exports = router
