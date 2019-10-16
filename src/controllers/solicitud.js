'use strict'

const Solicitud = require('../models').solicitud
const User = require('../models').user
const Remitente = require('../models').remitente
const Sequelize = require('sequelize')
const Op = Sequelize.Op

class PersonalController {
  findAll (req, res, next) {
    const condition = {
      where: {
        estado: parseInt(req.params.estado, 10)
      },
      include: [
        { model: User },
        { model: Remitente }
      ]
    }

    if (Object.keys(req.query).length) {
      const search = req.query.search
      if (search) {
        const fields = ['ruta', 'referencia', 'cite']
        condition.where[Op.or] = []
        for (const field of fields) {
          condition.where[Op.or].push({
            [field]: {
              [Op.like]: `%${search}%`
            }
          })
        }
      }
      if (req.query.range) {
        const range = req.query.range.split('-')
        condition.offset = parseInt(range[0], 10)
        condition.limit = parseInt(range[1], 10)
      }
    }
    Solicitud.count(condition)
      .then(count => {
        Solicitud.findAll(condition)
          .then(personals => {
            const range = `${req.query.range}/${count}`
            res.status(206)
            res.append('Content-Range', range)
            res.json({ personals, count })
          })
          .catch(err => next(err))
      })
      .catch(err => next(err))
  }

  findOne (req, res, next) {
    Solicitud.findOne({ where: { id: req.params.id } })
      .then(personal => res.json(personal))
      .catch(err => next(err))
  }

  create (req, res, next) {
    const body = req.body
    Solicitud.create(body)
      .then((personal) => res.status(201).json(personal))
      .catch(err => next(err))
  }

  update (req, res, next) {
    const body = req.body
    Solicitud.update(body, { where: { id: req.params.id } })
      .then(() => res.status(200).end())
      .catch(err => next(err))
  }

  delete (req, res, next) {
    Solicitud.destroy({ where: { id: req.params.id } })
      .then(() => res.status(204).end())
      .catch(err => next(err))
  }
}

module.exports = PersonalController
