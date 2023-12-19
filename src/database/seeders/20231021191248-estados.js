"use strict";

const statusesArray = ["pending","aproved","reject"]
const statuses = statusesArray.map(status => {
  return {
    name : status,
    createdAt : new Date,
    updatedAt : new Date
  }
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Statuses", statuses, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Statuses", null, {});
  },
};
