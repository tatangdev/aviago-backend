'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Schedule.init({
    departure_airport: DataTypes.STRING,
    arrival_airport: DataTypes.STRING,
    price: DataTypes.INTEGER,
    departure_terminalName: DataTypes.STRING,
    arrival_terminalName: DataTypes.STRING,
    flight_number: DataTypes.STRING,
    airline_code: DataTypes.STRING,
    aircraft_code: DataTypes.STRING,
    free_baggage: DataTypes.INTEGER,
    cabin_baggage: DataTypes.INTEGER,
    departureBase_timestamp: DataTypes.INTEGER,
    arrivalBase_timestamp: DataTypes.INTEGER,
    class: DataTypes.STRING,
    is_sunday: DataTypes.BOOLEAN,
    is_monday: DataTypes.BOOLEAN,
    is_tuesday: DataTypes.BOOLEAN,
    is_wednesday: DataTypes.BOOLEAN,
    is_thursday: DataTypes.BOOLEAN,
    is_friday: DataTypes.BOOLEAN,
    is_saturday: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Schedule',
    tableName: 'schedules'
  });
  return Schedule;
};