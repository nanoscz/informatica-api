'use strict'

const Remitente = require('../models').remitente
const Sequelize = require('sequelize')
const Op = Sequelize.Op

class RemitenteController {
  
  findAll (req, res, next) {
    const condition = {}
    const fields= ['nombre', 'cargo', 'servicio']
    if (Object.keys(req.query).length) {
      const search = req.query.search
      condition.where = {[Op.or]: []}
      for (const field of fields) {
        condition.where[Op.or].push({
          [field]: {
            [Op.like]: `%${search}%`
          }
        })
      }
      if (req.query.range) {
        const range = req.query.range.split('-')
        condition.offset = parseInt(range[0], 10)
        condition.limit = parseInt(range[1], 10)
      }
    }
    Remitente.count(condition)
      .then(count => {
        Remitente.findAll(condition)
          .then(remitentes =>{
            const range = `${req.query.range}/${count}`
            res.status(206)
            res.append('Content-Range', range)
            res.json({ remitentes, count })
          })
          .catch(err => next(err))
      })
      .catch(err => next(err))
  }

  findOne (req, res, next) {
    Remitente.findOne({ where: { id: req.params.id } })
      .then(remitente => res.json(remitente))
      .catch(err => next(err))
  }

  create (req, res, next) {
    const body = req.body
    Remitente.create(body)
      .then((remitente) => res.status(201).json(remitente))
      .catch(err => next(err))
  }

  update (req, res, next) {
    const body = req.body
    Remitente.update(body, { where: { id: req.params.id } })
      .then(() => res.status(200).end())
      .catch(err => next(err))
  }

  delete (req, res, next) {
    Remitente.destroy({ where: { id: req.params.id } })
      .then(() => res.status(204).end())
      .catch(err => next(err))
  }
}

module.exports = RemitenteController