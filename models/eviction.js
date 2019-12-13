'use strict';

const sequelizePaginate = require('sequelize-paginate')

module.exports = (sequelize, DataTypes) => {
  const Eviction = sequelize.define('Eviction', {
    eviction_id: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.STRING,
    file_date: DataTypes.STRING,
    non_payment: DataTypes.BOOLEAN,
    breach: DataTypes.BOOLEAN,
    nuisance: DataTypes.BOOLEAN,
    illegal_use: DataTypes.BOOLEAN,
    failure_to_sign_renewal: DataTypes.BOOLEAN,
    access_denial: DataTypes.BOOLEAN,
    unapproved_subtenant: DataTypes.BOOLEAN,
    owner_move_in: DataTypes.BOOLEAN,
    demolition: DataTypes.BOOLEAN,
    capital_improvement: DataTypes.BOOLEAN,
    substantial_rehab: DataTypes.BOOLEAN,
    ellis_act_withdrawal: DataTypes.BOOLEAN,
    condo_conversion: DataTypes.BOOLEAN,
    roommate_same_unit: DataTypes.BOOLEAN,
    other_cause: DataTypes.BOOLEAN,
    late_payments: DataTypes.BOOLEAN,
    lead_remediation: DataTypes.BOOLEAN,
    development: DataTypes.BOOLEAN,
    good_samaritan_ends: DataTypes.BOOLEAN,
    supervisor_district: DataTypes.STRING,
    neighborhood: DataTypes.STRING,
    client_location: DataTypes.JSONB
  }, {
    tableName: 'evictions',
    underscored: true
  });
  Eviction.associate = function(models) {
    // associations can be defined here
  };
  sequelizePaginate.paginate(Eviction)
  return Eviction;
};
