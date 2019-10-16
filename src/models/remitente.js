module.exports = (sequelize, DataTypes) => {
  const personal = sequelize.define('remitente', {
    nombre: DataTypes.STRING,
    cargo: DataTypes.STRING,
    servicio: DataTypes.STRING,
  }, {
    tableName: 'infor_remitente',
    timestamps: false
  })
  personal.associate = function (models) {}
  return personal
}
