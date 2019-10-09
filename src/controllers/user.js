'use strict'

const bcrypt = require('bcrypt')
const saltRounds = 10
const User = require('../models').user
const { keysCanonical } = require('../../utils')
class UserController {
  findAll (req, res, next) {
    User.findAll()
      .then(users => res.json(users))
      .catch(err => next(err))
  }

  findOne (req, res, next) {
    User.findOne({ where: { id: req.params.id } })
      .then(user => res.json(user))
      .catch(err => next(err))
  }

  create (req, res, next) {
    let body = null
    let salt = null
    let password = null
    body = req.body
    salt = bcrypt.genSaltSync(saltRounds)
    password = bcrypt.hashSync(body.password, salt)
    body.salt = salt
    body.password = password
    body.usernameCanonical = body.username
    body.emailCanonical = body.email
    body.roles = body.roles || 'a:0:{}'
    body.locked = false
    body.expired = false
    body.enabled = true
    body.lastLogin = new Date()
    body.credentialsExpired = false
    User.create(body)
      .then(() => res.status(201).end())
      .catch(err => next(err))
  }

  update (req, res, next) {
    const body = req.body
    for (const key in body) {
      const hasBarProperty = Object.prototype.hasOwnProperty.call(body, key)
      if (hasBarProperty) {
        const value = body[key]
        const fieldCanonical = keysCanonical[key]
        if (fieldCanonical) {
          body[fieldCanonical] = value
        }
      }
    }
    User.update(body, { where: { id: req.params.id } })
      .then(() => res.status(200).end())
      .catch(err => next(err))
  }

  delete (req, res, next) {
    User.destroy({ where: { id: req.params.id } })
      .then(() => res.status(204).end())
      .catch(err => next(err))
  }
}

module.exports = UserController
