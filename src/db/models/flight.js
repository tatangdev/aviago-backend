'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Flight.init({
    flight_number: DataTypes.STRING,
    departure_airport_id: DataTypes.INTEGER,
    airplane_id: DataTypes.INTEGER,
    airline_id: DataTypes.INTEGER,
    arrival_airport_id: DataTypes.INTEGER,
    class: DataTypes.STRING,
    price: DataTypes.INTEGER,
    departure_terminal_name: DataTypes.STRING,
    arrival_terminal_name: DataTypes.STRING,
    flight_date: DataTypes.STRING,
    departure_time: DataTypes.STRING,
    arrival_time: DataTypes.STRING,
    flight_duration: DataTypes.INTEGER,
    departure_timestamp: DataTypes.INTEGER,
    arrival_timestamp: DataTypes.INTEGER,
    free_baggage: DataTypes.INTEGER,
    cabin_baggage: DataTypes.INTEGER,
    capacity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Flight',
    tableName: 'flights',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return Flight;
};