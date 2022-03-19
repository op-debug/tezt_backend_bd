const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../../../database/models");

class JabatanModel extends Model{}

JabatanModel.init(
  {
    id_jabatan: {
        type: DataTypes.INTEGER(11),
        autoIncrement: true,
        primaryKey: true
    },
    nama: {
        type: DataTypes.STRING(150)
    },
  },
  {
    sequelize: sequelize,
    timestamps: false,
    tableName: 'jabatan'
  }
);

module.exports = JabatanModel;