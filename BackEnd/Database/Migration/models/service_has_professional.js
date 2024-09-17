'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Service_Has_Professional extends Model {
    static associate(models) {
      // Define associations here if needed
    }
  }
  Service_Has_Professional.init({
    service_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    professional_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Service_Has_Professional',
    tableName: 'Service_Has_Professionals',
    underscored: true
  });
  return Service_Has_Professional;
};
