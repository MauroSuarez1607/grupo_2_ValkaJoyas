"use strict";

const gendersJSON = require('../../data/genders.json')
const genders = gendersJSON.map(gender => {
  return {
    name : gender,
    createdAt : new Date,
    updatedAt : new Date
  }
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Genders", genders, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Genders", null, {});
  },
};
