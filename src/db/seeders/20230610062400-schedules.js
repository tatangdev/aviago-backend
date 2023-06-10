'use strict';

/** @type {import('sequelize-cli').Migration} */

const rawSchedules = require('./data/schedules.json');

module.exports = {
  async up(queryInterface, Sequelize) {
    const schedules = [];
    for (const [key, value] of Object.entries(rawSchedules)) {
      schedules.push({
        departure_airport: value.departureAirport,
        arrival_airport: value.arrivalAirport,
        price: value.price,
        departure_terminalName: value.departureTerminalName,
        arrival_terminalName: value.arrivalTerminalName,
        flight_number: value.flightNumber,
        airline_code: value.airlineCode,
        aircraft_code: value.aircraftId,
        free_baggage: value.freeBaggage,
        cabin_baggage: value.cabinBaggage,
        departureBase_timestamp: value.departureBaseTimestamp,
        arrivalBase_timestamp: value.arrivalBaseTimestamp,
        class: value.class,
        is_sunday: value.isSunday,
        is_monday: value.isMonday,
        is_tuesday: value.isTuesday,
        is_wednesday: value.isWednesday,
        is_thursday: value.isThursday,
        is_friday: value.isFriday,
        is_saturday: value.isSaturday,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    await queryInterface.bulkInsert('schedules', schedules, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('schedules', null, {});
  }
};
