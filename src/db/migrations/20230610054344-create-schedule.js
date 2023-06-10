'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('schedules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      departure_airport: {
        type: Sequelize.STRING
      },
      arrival_airport: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      departure_terminalName: {
        type: Sequelize.STRING
      },
      arrival_terminalName: {
        type: Sequelize.STRING
      },
      flight_number: {
        type: Sequelize.STRING
      },
      airline_code: {
        type: Sequelize.STRING
      },
      aircraft_code: {
        type: Sequelize.STRING
      },
      free_baggage: {
        type: Sequelize.INTEGER
      },
      cabin_baggage: {
        type: Sequelize.INTEGER
      },
      departureBase_timestamp: {
        type: Sequelize.INTEGER
      },
      arrivalBase_timestamp: {
        type: Sequelize.INTEGER
      },
      class: {
        type: Sequelize.STRING
      },
      is_sunday: {
        type: Sequelize.BOOLEAN
      },
      is_monday: {
        type: Sequelize.BOOLEAN
      },
      is_tuesday: {
        type: Sequelize.BOOLEAN
      },
      is_wednesday: {
        type: Sequelize.BOOLEAN
      },
      is_thursday: {
        type: Sequelize.BOOLEAN
      },
      is_friday: {
        type: Sequelize.BOOLEAN
      },
      is_saturday: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('schedules');
  }
};