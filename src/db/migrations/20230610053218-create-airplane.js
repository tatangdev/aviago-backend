'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('airplanes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      airline_id: {
        type: Sequelize.INTEGER
      },
      model: {
        type: Sequelize.STRING
      },
      code: {
        type: Sequelize.STRING
      },
      seat_layout: {
        type: Sequelize.STRING
      },
      seat_pitch: {
        type: Sequelize.STRING
      },
      seat_type: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('airplanes');
  }
};