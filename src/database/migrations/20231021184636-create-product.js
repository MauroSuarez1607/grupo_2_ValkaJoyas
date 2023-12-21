'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
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
      description: {
        type: Sequelize.TEXT
      },
      image1: {
        type: Sequelize.STRING
      },
      image2: {
        type: Sequelize.STRING
      },
      countStones: {
        type: Sequelize.INTEGER.UNSIGNED,
        defaultValue : 0
      },
      size: {
        type: Sequelize.STRING
      },
      measures_mm: {
        type: Sequelize.INTEGER
      },
      warranty: {
        type: Sequelize.BOOLEAN
      },
      jewel_keeper: {
        type: Sequelize.BOOLEAN
      },
      price: {
        type: Sequelize.INTEGER.UNSIGNED,
        defaultValue : 0
      },
      discount: {
        type: Sequelize.INTEGER.UNSIGNED,
        defaultValue : 0
      },
      stock: {
        type: Sequelize.INTEGER.UNSIGNED,
        defaultValue : 0
      },
      brandId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'Brands'
          }
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        constraints: false, // Desactivar temporalmente la restricción
      },
      designId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'Designs'
          }
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        constraints: false, // Desactivar temporalmente la restricción
      },
      collectionId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'Collections'
          }
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        constraints: false, // Desactivar temporalmente la restricción
      },
      metalId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'Metals'
          }
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        constraints: false, // Desactivar temporalmente la restricción
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'Categories'
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
    await queryInterface.dropTable('Products');
  }
};