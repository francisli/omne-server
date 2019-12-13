'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(function(transaction) {
      return queryInterface.createTable('buyouts', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        case_number: {
          allowNull: false,
          type: Sequelize.STRING
        },
        pre_buyout_disclosure_date: {
          type: Sequelize.STRING
        },
        date_buyout_filed: {
          type: Sequelize.STRING
        },
        buyout_amount: {
          type: Sequelize.STRING
        },
        unknown_amount: {
          type: Sequelize.BOOLEAN
        },
        other_consideration: {
          type: Sequelize.BOOLEAN
        },
        number_of_tenants: {
          type: Sequelize.STRING
        },
        block_address: {
          type: Sequelize.STRING
        },
        zip_code: {
          type: Sequelize.STRING
        },
        supervisor_district: {
          type: Sequelize.STRING
        },
        analysis_neighborhood: {
          type: Sequelize.STRING
        },
        the_geom: {
          type: Sequelize.JSONB
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE
        }
      }, { transaction }).then(function() {
        return queryInterface.addIndex('buyouts', ['case_number'], {
          unique: true,
          transaction
        });
      });
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('buyouts');
  }
};
