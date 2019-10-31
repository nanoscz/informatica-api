'use strict'

module.exports = (sequelize, DataTypes) => {
	const asignar = sequelize.define('asignar', {
		solicitudId: {
			type: DataTypes.INTEGER,
			field: 'solicitud_id',
			primaryKey: true
		},
		personalId: {
			type: DataTypes.INTEGER,
			field: 'personal_id',
			primaryKey: true
		}
	}, {
		tableName: 'infor_asignar',
		timestamps: false,
		defaultScope: {
      attributes: { exclude: ['personalId', 'solicitudId'] }
    }
	})
	asignar.associate = function (models) {
		asignar.belongsTo(models.solicitud, {
			foreignKey: 'solicitudId',
			constraints: false
		})
		asignar.belongsTo(models.personal, {
			foreignKey: 'personalId',
			constraints: false
		})
	}
	return asignar
}
