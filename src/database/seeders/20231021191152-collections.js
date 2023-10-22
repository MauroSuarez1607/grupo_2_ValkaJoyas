"use strict";


const collectionsJSON = require('../../data/collections.json')
const collections = collectionsJSON.map(collection => {
  return {
    name : collection,
    createdAt : new Date,
    updatedAt : new Date
  }
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Collections", collections, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Collections", null, {});
  },
};
