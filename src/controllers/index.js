'use strict'

const PersonalController = require('./personal')
const UserController = require('./user')
const RemitenteController = require('./remitente')
const SolicitudController = require('./solicitud')
const AsignarController = require('./asignar')
const ImageController = require('./image')

module.exports = {
  SolicitudController,
  RemitenteController,
  PersonalController,
  UserController,
  AsignarController,
  ImageController
}
