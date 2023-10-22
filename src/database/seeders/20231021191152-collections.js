"use strict";

const collections = [
  {  
    name : ' ',
    createdAt : new Date,
    updatedAt : new Date  
  }
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Collections", collections, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Collections", null, {});
  },
};
