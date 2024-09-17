'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    static associate(models) {
      Service.belongsTo(models.Category, {
        foreignKey: 'category_id',
        as: 'category'
      });
      Service.belongsToMany(models.Professional, {
        through: models.Service_Has_Professional,
        foreignKey: 'service_id',
        as: 'professionals'
      });
      Service.hasMany(models.Service_Request, {
        foreignKey: 'services_id',
        as: 'service_Requests'
      });
    }
  }
  Service.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
    },
    cost: {
      type: DataTypes.FLOAT
    },
    duration: {
      type: DataTypes.FLOAT
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Service',
    tableName: 'Services',
    underscored: true
  });
  return Service;
};
