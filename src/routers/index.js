'use strict'

const personalRouter = require('./personal')

const express = require('express')
const router = express.Router()

router.use('/personal', personalRouter)

module.exports = router
