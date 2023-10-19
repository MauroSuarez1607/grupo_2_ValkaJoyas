'use strict';

const modelJSON =  require('../../data/models.json');
const models = modelJSON.map((model, index) => {
  return {
      name : model,
      brandId : index + 1,
      createdAt : new Date,
      updatedAt : new Date
  }
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Models', models, {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Models', null, {});
     
  }
};
