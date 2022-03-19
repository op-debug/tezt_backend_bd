const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../../../database/models");

class KaryawanModel extends Model{}

KaryawanModel.init(
  {
      id_karyawan: {
          type: DataTypes.INTEGER(11),
          autoIncrement: true,
          primaryKey: true
      },
      id_jabatan:{
            type: DataTypes.INTEGER(11),
      },
      nama: {
            type: DataTypes.STRING(150)
      },
      alamat:{
            type: DataTypes.TEXT()
      },
      jenis_kelamin:{
            type:DataTypes.STRING(50)
      },
      agama:{
            type:DataTypes.STRING(10)
      },
      tgl_bergabung:{
            type:DataTypes.DATE()
      }
  },
  {
    sequelize: sequelize,
    timestamps: false,
    tableName: 'karyawan'
  }
);

module.exports = KaryawanModel;