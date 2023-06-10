'use strict';

/** @type {import('sequelize-cli').Migration} */

const rawSchedules = require('./data/airlines.json');

module.exports = {
  async up(queryInterface, Sequelize) {
    const airlines = [];
    for (const [key, value] of Object.entries(rawSchedules)) {
      airlines.push({
        name: value.name,
        short_name: value.shortName,
        iata_code: value.airlineId,
        icon_url: value.iconUrl,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    await queryInterface.bulkInsert('airlines', airlines, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('airlines', null, {});
  }
};
