"use strict";

const designsJSON = require('../../data/design.json')
const designs = designsJSON.map(design => {
  return {
    name : design,
    createdAt : new Date,
    updatedAt : new Date
  }
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Designs", designs, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Designs", null, {});
  },
};
