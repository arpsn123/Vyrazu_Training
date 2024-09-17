'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Flag extends Model {
    static associate(models) {
      User_Flag.belongsTo(models.User, {
        foreignKey: 'users_user_id',
        as: 'user'
      });
    }
  }
  User_Flag.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    reason: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    blocked_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    modelName: 'User_Flag',
    tableName: 'User_Flags',
    underscored: true
  });
  return User_Flag;
};
