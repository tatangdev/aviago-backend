'use strict';

/** @type {import('sequelize-cli').Migration} */

const rawAirlines = require('./data/airlines.json');

module.exports = {
  async up(queryInterface, Sequelize) {
    const airplanes = [];
    for (const [key, airline] of Object.entries(rawAirlines)) {
      for (const [key, value] of Object.entries(airline.airplanes)) {
        airplanes.push({
          model: value.model,
          code: value.id,
          airline_code: airline.airlineId,
          seat_layout: value.seatLayout,
          seat_pitch: value.seatPitch,
          seat_type: value.seatType,
          createdAt: new Date(),
          updatedAt: new Date()
        });
      }
    }

    await queryInterface.bulkInsert('airplanes', airplanes, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('airplanes', null, {});
  }
};
