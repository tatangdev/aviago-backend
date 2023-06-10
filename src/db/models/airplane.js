'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Airplane.init({
    model: DataTypes.STRING,
    code: DataTypes.STRING,
    airline_code: DataTypes.STRING,
    seat_layout: DataTypes.STRING,
    seat_pitch: DataTypes.STRING,
    seat_type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Airplane',
    tableName: 'airplanes'
  });
  return Airplane;
};