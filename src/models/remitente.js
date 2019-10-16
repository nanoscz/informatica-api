module.exports = (sequelize, DataTypes) => {
  const remitente = sequelize.define('remitente', {
    nombre: DataTypes.STRING,
    cargo: DataTypes.STRING,
    servicio: DataTypes.STRING
  }, {
    tableName: 'infor_remitente',
    timestamps: false
  })
  remitente.associate = function (models) {
    remitente.hasMany(models.solicitud)
  }
  return remitente
}
