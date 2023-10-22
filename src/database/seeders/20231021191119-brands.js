"use strict";

const brandsJSON = require('../../data/brands.json')
const brands = brandsJSON.map(brand => {
  return {
    name : brand,
    createdAt : new Date,
    updatedAt : new Date
  }
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Brands", brands, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Brands", null, {});
  },
};
