module.exports = {
    up: function(queryInterface, DataTypes) {        
        return (
            queryInterface.createTable('jabatan',
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
                engine: 'MYISAM',
                charset: 'latin1'
                }
            )
        )
    }
}
