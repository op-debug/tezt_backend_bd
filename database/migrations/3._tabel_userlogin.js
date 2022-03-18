module.exports = {
    up: function(queryInterface, DataTypes) {        
        return (
            queryInterface.createTable('user_login',
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
                engine: 'MYISAM',
                charset: 'latin1'
                }
            )
        )
    }
}
