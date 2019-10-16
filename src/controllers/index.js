'use strict'

const PersonalController = require('./personal')
const UserController = require('./user')
const RemitenteController = require('./remitente')
const SolicitudController = require('./solicitud')

module.exports = {
  SolicitudController,
  RemitenteController,
  PersonalController,
  UserController
}
