'use strict'

const Personal = require('../models').personal

class PersonalController {
  findAll (req, res, next) {
    Personal.findAll()
      .then(personals => res.json(personals))
      .catch(err => next(err))
  }

  findOne (req, res, next) {
    Personal.findOne({ where: { id: req.params.id } })
      .then(personal => res.json(personal))
      .catch(err => next(err))
  }

  create (req, res, next) {
    const body = req.body
    Personal.create(body)
      .then(() => res.status(201).end())
      .catch(err => next(err))
  }

  update (req, res, next) {
    const body = req.body
    Personal.update(body, { where: { id: req.params.id } })
      .then(() => res.status(200).end())
      .catch(err => next(err))
  }

  delete (req, res, next) {
    Personal.destroy({ where: { id: req.params.id } })
      .then(() => res.status(204).end())
      .catch(err => next(err))
  }
}

module.exports = PersonalController
