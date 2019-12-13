'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(function(transaction) {
      return queryInterface.createTable('evictions', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        eviction_id: {
          allowNull: false,
          type: Sequelize.STRING
        },
        address: {
          type: Sequelize.STRING
        },
        city: {
          type: Sequelize.STRING
        },
        state: {
          type: Sequelize.STRING
        },
        zip: {
          type: Sequelize.STRING
        },
        file_date: {
          type: Sequelize.STRING
        },
        non_payment: {
          type: Sequelize.BOOLEAN
        },
        breach: {
          type: Sequelize.BOOLEAN
        },
        nuisance: {
          type: Sequelize.BOOLEAN
        },
        illegal_use: {
          type: Sequelize.BOOLEAN
        },
        failure_to_sign_renewal: {
          type: Sequelize.BOOLEAN
        },
        access_denial: {
          type: Sequelize.BOOLEAN
        },
        unapproved_subtenant: {
          type: Sequelize.BOOLEAN
        },
        owner_move_in: {
          type: Sequelize.BOOLEAN
        },
        demolition: {
          type: Sequelize.BOOLEAN
        },
        capital_improvement: {
          type: Sequelize.BOOLEAN
        },
        substantial_rehab: {
          type: Sequelize.BOOLEAN
        },
        ellis_act_withdrawal: {
          type: Sequelize.BOOLEAN
        },
        condo_conversion: {
          type: Sequelize.BOOLEAN
        },
        roommate_same_unit: {
          type: Sequelize.BOOLEAN
        },
        other_cause: {
          type: Sequelize.BOOLEAN
        },
        late_payments: {
          type: Sequelize.BOOLEAN
        },
        lead_remediation: {
          type: Sequelize.BOOLEAN
        },
        development: {
          type: Sequelize.BOOLEAN
        },
        good_samaritan_ends: {
          type: Sequelize.BOOLEAN
        },
        supervisor_district: {
          type: Sequelize.STRING
        },
        neighborhood: {
          type: Sequelize.STRING
        },
        client_location: {
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
        return queryInterface.addIndex('evictions', ['eviction_id'], {
          unique: true,
          transaction
        });
      });
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('evictions');
  }
};
