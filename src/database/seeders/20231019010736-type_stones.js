'use strict';

const typeStoneJSON =  require('../../data/type_stones.json');
const typeStones = typeStoneJSON.map(typeStone => {
  return {
      name : typeStone,
      createdAt : new Date,
      updatedAt : new Date
  }
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Type_stones', typeStones, {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Type_stones', null, {});
     
  }
};
