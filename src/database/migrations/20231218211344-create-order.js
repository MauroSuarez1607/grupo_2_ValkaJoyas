'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      total: {
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName: 'Users'
          }
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        constraints: false, // Desactivar temporalmente la restricción
      },
      statusId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName: 'Statuses'
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
    await queryInterface.dropTable('Orders');
  }
};