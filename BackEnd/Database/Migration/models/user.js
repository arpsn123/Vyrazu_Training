// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   const User = sequelize.define('User', {
//     f_name: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     l_name: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     password_hash: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     role: {
//       type: DataTypes.ENUM('Customer', 'Employee'),
//       allowNull: false
//     },
//     created_at: {
//       type: DataTypes.DATE,
//       defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
//     }
//   }, {});
//   User.associate = function(models) {
//     User.hasMany(models.User_Flag, { foreignKey: 'users_user_id' });
//     User.hasMany(models.Professional, { foreignKey: 'user_id' });
//     User.hasMany(models.Service_Request, { foreignKey: 'user_id' });
//   };
//   return User;
// };






'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
      User.hasMany(models.User_Flag, {
        foreignKey: 'users_user_id',
        as: 'flags'
      });
      User.hasMany(models.Service_Request, {
        foreignKey: 'user_id',
        as: 'service_Requests'
      });
      User.hasOne(models.Professional, {
        foreignKey: 'user_id',
        as: 'professional'
      });
    }
  }
  User.init({
    user_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    f_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    l_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password_hash: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.ENUM('Customer', 'Employee'),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'Users',
    underscored: true
  });
  return User;
};
