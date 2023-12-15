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
        }
      },
      designId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'Designs'
          }
        }
      },
      collectionId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'Collections'
          }
        }
      },
      metalId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'Metals'
          }
        }
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'Categories'
          }
        }
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