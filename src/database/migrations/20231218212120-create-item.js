'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      orderId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName: 'Orders'
          }
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        constraints: false, // Desactivar temporalmente la restricción
      },
      productId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName: 'Products'
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
    await queryInterface.dropTable('Items');
  }
};