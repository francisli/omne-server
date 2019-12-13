'use strict';
module.exports = (sequelize, DataTypes) => {
  const Parcel = sequelize.define('Parcel', {
    blklot: DataTypes.STRING,
    block_num: DataTypes.STRING,
    lot_num: DataTypes.STRING,
    from_address_num: DataTypes.STRING,
    to_address_num: DataTypes.STRING,
    street_name: DataTypes.STRING,
    odd_even: DataTypes.STRING,
    in_asr_secured_roll: DataTypes.BOOLEAN,
    pw_recorded_map: DataTypes.BOOLEAN,
    zoning_code: DataTypes.STRING,
    zoning_district: DataTypes.STRING,
    mapblklot: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    date_map_add: DataTypes.STRING,
    project_id_add: DataTypes.STRING,
    shape: DataTypes.JSONB
  }, {
    tableName: 'parcels',
    underscored: true
  });
  Parcel.associate = function(models) {
    // associations can be defined here
  };
  return Parcel;
};
