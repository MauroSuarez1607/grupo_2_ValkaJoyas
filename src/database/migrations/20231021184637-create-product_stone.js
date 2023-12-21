'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Product_stones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'Products'
          }
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        constraints: false, // Desactivar temporalmente la restricción
      },
      type_stoneId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'Type_stones'
          }
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        constraints: false, // Desactivar temporalmente la restricción
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Product_stone');
  }
};