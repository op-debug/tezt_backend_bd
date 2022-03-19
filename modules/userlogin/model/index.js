const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../../../database/models");

class UserloginModel extends Model{}

UserloginModel.init(
  {
    username: {
      type: DataTypes.STRING(100),
      primaryKey: true
    },
    id_karyawan:{
        type: DataTypes.INTEGER(11),
    },
    password: {
        type: DataTypes.STRING(150)
    }
  },
  {
    sequelize: sequelize,
    timestamps: false,
    tableName: 'user_login'
  }
);

module.exports = UserloginModel;