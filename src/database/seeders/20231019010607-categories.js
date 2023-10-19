'use strict';

const categorieJSON =  require('../../data/categories.json');
const categories = categorieJSON.map(categorie => {
  return {
      name : categorie,
      createdAt : new Date,
      updatedAt : new Date
  }
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Categories', categories, {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Categories', null, {});
     
  }
};
