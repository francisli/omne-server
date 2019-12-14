'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.addColumn('buyouts', 'street_num', Sequelize.INTEGER, {
      allowNull: true,
      defaultValue: null
    }).then(function() {
      return queryInterface.addColumn('buyouts', 'street_address', Sequelize.STRING, {
        allowNull: true,
        defaultValue: null
      });
    }).then(function() {
      return queryInterface.addColumn('evictions', 'street_num', Sequelize.INTEGER, {
        allowNull: true,
        defaultValue: null
      });
    }).then(function() {
      return queryInterface.addColumn('evictions', 'street_address', Sequelize.STRING, {
        allowNull: true,
        defaultValue: null
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.removeColumn('buyouts', 'street_address').then(function() {
      return queryInterface.removeColumn('buyouts', 'street_num');
    }).then(function() {
      return queryInterface.removeColumn('evictions', 'street_address');
    }).then(function() {
      return queryInterface.removeColumn('evictions', 'street_num');
    });
  }
};
