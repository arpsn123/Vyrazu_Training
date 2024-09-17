// 'use strict'
// module.exports = (sequelize, DataTypes) => {
//   const Service_Request = sequelize.define(
//     'Service_Request',
//     {
//       user_id: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//       },
//       description: {
//         type: DataTypes.TEXT,
//         allowNull: true
//       },
//       location: {
//         type: DataTypes.STRING,
//         allowNull: false
//       },
//       scheduled_date: {
//         type: DataTypes.DATE,
//         allowNull: false
//       },
//       scheduled_start_time: {
//         type: DataTypes.TIME,
//         allowNull: false
//       },
//       scheduled_end_time: {
//         type: DataTypes.TIME,
//         allowNull: false
//       },
//       status: {
//         type: DataTypes.ENUM('Active', 'Completed', 'Inactive'),
//         allowNull: false
//       },
//       created_at: {
//         type: DataTypes.DATE,
//         defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
//       },
//       services_id: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//       },
//       professional_id: {
//         type: DataTypes.INTEGER,
//         allowNull: true
//       }
//     },
//     {}
//   )
//   Service_Request.associate = function (models) {
//     Service_Request.belongsTo(models.User, { foreignKey: 'user_id' })
//     Service_Request.belongsTo(models.Service, { foreignKey: 'services_id' })
//     Service_Request.belongsTo(models.Professional, {
//       foreignKey: 'professional_id'
//     })
//   }
//   return Service_Request
// }







'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Service_Request extends Model {
    static associate(models) {
      Service_Request.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user'
      });
      Service_Request.belongsTo(models.Service, {
        foreignKey: 'services_id',
        as: 'service'
      });
      Service_Request.belongsTo(models.Professional, {
        foreignKey: 'professional_id',
        as: 'professional'
      });
    }
  }
  Service_Request.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    scheduled_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    scheduled_start_time: {
      type: DataTypes.TIME,
      allowNull: false
    },
    scheduled_end_time: {
      type: DataTypes.TIME,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('Active', 'Completed', 'Inactive'),
      allowNull: false
    },
    services_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    professional_id: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Service_Request',
    tableName: 'Service_Requests',
    underscored: true
  });
  return Service_Request;
};
