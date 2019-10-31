'use strict'

const PersonalController = require('./personal')
const UserController = require('./user')
const RemitenteController = require('./remitente')
const SolicitudController = require('./solicitud')
const AsignarController = require('./asignar')

module.exports = {
  SolicitudController,
  RemitenteController,
  PersonalController,
  UserController,
  AsignarController
}
