"use strict";

const type_stonesJSON = require('../../data/type_stones.json')
const type_stones = type_stonesJSON.map(type_stone => {
  return {
    name : type_stone,
    createdAt : new Date,
    updatedAt : new Date
  }
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Type_stones", type_stones, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Type_stones", null, {});
  },
};
