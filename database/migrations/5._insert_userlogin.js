'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('user_login', [{
      username: 'admin',
      password: '123456'
    }]);
  },
};