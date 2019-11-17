'use strict'
const Image = require('../models').image

class ImageController {
  findOne (req, res, next) {
    Image.findOne({ where: { userId: req.params.userId } })
      .then(image => res.json(image))
      .catch(err => next(err))
  }

  create (req, res, next) {
    const body = req.body
    Image.create(body)
      .then((image) => res.status(201).json(image))
      .catch(err => next(err))
  }

  update (req, res, next) {
    const body = req.body
    Image.update(body, { where: { userId: req.params.userId } })
      .then(() => res.status(200).end())
      .catch(err => next(err))
  }

  delete (req, res, next) {
    Image.destroy({ where: { userId: req.params.userId } })
      .then(() => res.status(204).end())
      .catch(err => next(err))
  }
}

module.exports = ImageController