'use strict';

/** @type {import('sequelize-cli').Migration} */

const rawSchedules = require('./data/airports.json');

module.exports = {
  async up(queryInterface, Sequelize) {
    const airports = [];
    for (const [key, value] of Object.entries(rawSchedules)) {
      airports.push({
        name: value.localName,
        iata_code: value.airportId,
        city: value.city,
        country: value.country,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    await queryInterface.bulkInsert('airports', airports, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('airports', null, {});
  }
};
