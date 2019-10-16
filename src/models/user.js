'use strict'

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    usernameCanonical: {
      type: DataTypes.STRING,
      field: 'username_canonical',
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    emailCanonical: {
      type: DataTypes.STRING,
      field: 'email_canonical',
      allowNull: false
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    salt: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastLogin: {
      type: DataTypes.DATE,
      field: 'last_login'
    },
    locked: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    expired: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    expiresAt: {
      type: DataTypes.DATE,
      field: 'expires_at'
    },
    confirmation_token: DataTypes.STRING,
    password_requested_at: DataTypes.DATE,
    roles: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    credentialsExpired: {
      type: DataTypes.BOOLEAN,
      field: 'credentials_expired',
      allowNull: false
    },
    credentialsExpiredAt: {
      type: DataTypes.BOOLEAN,
      field: 'credentials_expire_at'
    }
  }, {
    defaultScope: {
      attributes: {
        exclude: [
          'usernameCanonical',
          'emailCanonical',
          'confirmation_token',
          'password_requested_at',
          'salt'
        ]
      }
    },
    tableName: 'fos_user',
    timestamps: false
  })
  user.associate = function (models) {
    user.hasMany(models.solicitud)
  }
  return user
}
