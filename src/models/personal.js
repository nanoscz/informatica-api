'use strict'

module.exports = (sequelize, DataTypes) => {
  const personal = sequelize.define('personal', {
    nom: DataTypes.STRING,
    app: DataTypes.STRING,
    apm: DataTypes.STRING,
    pref: DataTypes.STRING,
    cargo: DataTypes.STRING,
    servicio: DataTypes.INTEGER
  }, {
    tableName: 'infor_personal',
    timestamps: false
  })
  personal.associate = function (models) {}
  return personal
}
