'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Professional extends Model {
    static associate(models) {
      Professional.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user'
      });
      Professional.belongsToMany(models.Service, {
        through: models.Service_Has_Professional,
        foreignKey: 'professional_id',
        as: 'services'
      });
      Professional.hasMany(models.Service_Request, {
        foreignKey: 'professional_id',
        as: 'service_Requests'
      });
    }
  }
  Professional.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    occupation: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Professional',
    tableName: 'Professionals',
    underscored: true
  });
  return Professional;
};
