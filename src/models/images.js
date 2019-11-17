'use strict'

module.exports = (sequelize, DataTypes) => {
  const image = sequelize.define('image', {
    image: DataTypes.INTEGER,
    userId: {
      type: DataTypes.INTEGER,
      field: 'user_id'
    },
  }, {
    tableName: 'infor_image',
    timestamps: false
  })
  image.associate = function (models) {}
  return image
}