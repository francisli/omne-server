'use strict';

const sequelizePaginate = require('sequelize-paginate')

module.exports = (sequelize, DataTypes) => {
  const Buyout = sequelize.define('Buyout', {
    case_number: DataTypes.STRING,
    pre_buyout_disclosure_date: DataTypes.STRING,
    date_buyout_filed: DataTypes.STRING,
    buyout_amount: DataTypes.STRING,
    unknown_amount: DataTypes.BOOLEAN,
    other_consideration: DataTypes.BOOLEAN,
    number_of_tenants: DataTypes.STRING,
    block_address: DataTypes.STRING,
    zip_code: DataTypes.STRING,
    supervisor_district: DataTypes.STRING,
    analysis_neighborhood: DataTypes.STRING,
    the_geom: DataTypes.JSONB
  }, {
    tableName: 'buyouts',
    underscored: true
  });
  Buyout.associate = function(models) {
    // associations can be defined here
  };
  sequelizePaginate.paginate(Buyout)
  return Buyout;
};
