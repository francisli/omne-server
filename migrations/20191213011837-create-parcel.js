'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(function(transaction) {
      return queryInterface.createTable('parcels', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        blklot: {
          allowNull: false,
          type: Sequelize.STRING
        },
        block_num: {
          type: Sequelize.STRING
        },
        lot_num: {
          type: Sequelize.STRING
        },
        from_address_num: {
          type: Sequelize.STRING
        },
        to_address_num: {
          type: Sequelize.STRING
        },
        street_name: {
          type: Sequelize.STRING
        },
        odd_even: {
          type: Sequelize.STRING
        },
        in_asr_secured_roll: {
          type: Sequelize.BOOLEAN
        },
        pw_recorded_map: {
          type: Sequelize.BOOLEAN
        },
        zoning_code: {
          type: Sequelize.STRING
        },
        zoning_district: {
          type: Sequelize.STRING
        },
        mapblklot: {
          type: Sequelize.STRING
        },
        active: {
          type: Sequelize.BOOLEAN
        },
        date_map_add: {
          type: Sequelize.STRING
        },
        project_id_add: {
          type: Sequelize.STRING
        },
        shape: {
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
        return queryInterface.addIndex('parcels', ['blklot'], {
          unique: true,
          transaction
        });
      });
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('parcels');
  }
};
