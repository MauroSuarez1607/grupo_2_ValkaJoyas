'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull : false
      },
      surname: {
        type: Sequelize.STRING,
        allowNull : false
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull : false
      },
      password: {
        type: Sequelize.STRING,
        allowNull : false
      },
      image: {
        type: Sequelize.STRING
      },
      birthday: {
        type: Sequelize.DATE,

      },
      genderId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'Genders'
          }
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        constraints: false, // Desactivar temporalmente la restricción
      },
      roleId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'Roles'
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
    await queryInterface.dropTable('Users');
  }
};