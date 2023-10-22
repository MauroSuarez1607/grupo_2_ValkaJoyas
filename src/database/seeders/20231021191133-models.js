"use strict";

const modelsJSON = require('../../data/models.json')
const models = modelsJSON.map(model => {
  return {
    name : model,
    createdAt : new Date,
    updatedAt : new Date
  }
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Models", models, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Models", null, {});
  },
};
