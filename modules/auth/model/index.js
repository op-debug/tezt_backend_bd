const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../../../database/models");

class UsersModel extends Model{}

UsersModel.init(
  {
    username: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    password: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
  },
  {
    sequelize: sequelize,
    timestamps: false,
    tableName: 'user_login'
  }
);

module.exports = UsersModel;