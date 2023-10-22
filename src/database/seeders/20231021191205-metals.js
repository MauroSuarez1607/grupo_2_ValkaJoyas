"use strict";

const metalsJSON = require('../../data/metals.json')
const metals = metalsJSON.map(metal => {
  return {
    name : metal,
    createdAt : new Date,
    updatedAt : new Date
  }
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Metals", metals, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Metals", null, {});
  },
};
