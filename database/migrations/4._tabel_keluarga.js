module.exports = {
    up: function(queryInterface, DataTypes) {        
        return (
            queryInterface.createTable('keluarga',
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
                engine: 'MYISAM',
                charset: 'latin1'
                }
            )
        )
    }
}
