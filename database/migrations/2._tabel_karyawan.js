module.exports = {
    up: function(queryInterface, DataTypes) {        
        return (
            queryInterface.createTable('karyawan',
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
                engine: 'MYISAM',
                charset: 'latin1'
                }
            )
        )
    }
}
