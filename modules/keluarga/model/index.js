const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../../../database/models");

class KeluargaModel extends Model{}

KeluargaModel.init(
  {
    id_keluarga: {
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      primaryKey: true
    },
    id_karyawan:{
          type: DataTypes.INTEGER(11),
    },
    nama: {
          type: DataTypes.STRING(150)
    },
    pekerjaan: {
      type: DataTypes.STRING(150)
    },
    hubungan: {
      type: DataTypes.STRING(150)
    }
  },
  {
    sequelize: sequelize,
    timestamps: false,
    tableName: 'keluarga'
  }
);

module.exports = KeluargaModel;