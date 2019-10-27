'use strict'

module.exports = (sequelize, DataTypes) => {
  const solicitud = sequelize.define('solicitud', {
    id: DataTypes.INTEGER,
    ruta: DataTypes.INTEGER,
    fecha: DataTypes.DATE,
    referencia: DataTypes.TEXT,
    cite: DataTypes.STRING,
    estado: DataTypes.INTEGER,
    userId: {
      type: DataTypes.INTEGER,
      field: 'usuario_id',
      primaryKey: true
    },
    remitenteId: {
      type: DataTypes.INTEGER,
      field: 'remitente_id',
      primaryKey: true
    }
  }, {
    tableName: 'infor_solicitud',
    timestamps: false,
    defaultScope: {
      attributes: { exclude: ['userId', 'remitenteId'] }
    }
  })
  solicitud.associate = function (models) {
    solicitud.belongsTo(models.user, {
      foreignKey: 'userId',
      constraints: false
    })
    solicitud.belongsTo(models.remitente, {
      foreignKey: 'remitenteId',
      constraints: false
    })
  }
  return solicitud
}
