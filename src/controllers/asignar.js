'use strict'

const Asignar = require('../models').asignar
const Personal = require('../models').personal
class AsignarController {
  findBySolicitud (req, res, next) {
    const solicitudId = req.params.id
    Asignar.findAll({
      include: [
        { model: Personal }
      ],
      where: {
        solicitudId
      }
    })
      .then((data) => {
        let personals = []
        personals = data.map(element => {
          const { personal } = element
          const p = personal.dataValues
          return {
            fullName: `${p.nom} ${p.app} ${p.apm}`
          }
        })

        res.json({
          solicitudId,
          personal: personals
        })
      })
      .catch((err) => next(err))
  }

  create (req, res, next) {
    const asignars = req.body
    Asignar.bulkCreate(asignars)
      .then(() => res.status(201).end())
      .catch((err) => next(err))
  }

  delete (req, res, next) {
    const solicitudId = req.params.solicitudId
    const personalId = req.params.personalId
    Asignar.destroy({
      where: {
        solicitudId,
        personalId
      }
    })
      .then(() => res.status(204).end())
      .catch((err) => next(err))
  }
}

module.exports = AsignarController
