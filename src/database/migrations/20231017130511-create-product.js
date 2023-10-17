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
      price: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull : false
      },
      discount: {
        type: Sequelize.INTEGER.UNSIGNED,
        defaultValue : 0
      },
      description: {
        type: Sequelize.TEXT,
        allowNull : false
      },
      image1: {
        type: Sequelize.STRING
      },
      image2: {
        type: Sequelize.STRING
      },
      stones: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull : false,
        defaultValue : 0
      },
      size: {
        type: Sequelize.STRING,
        allowNull : false
      },
      measuresMm: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull : false
      },
      warranty: {
        type: Sequelize.BOOLEAN,
        allowNull : false
      },
      jewelKeeper: {
        type: Sequelize.BOOLEAN,
        allowNull : false
      },
      stock: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull : false
      },
      brandId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'Brands'
          }
        }
      },
      modelId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'Models'
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
      categoryId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'Categories'
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
      type_stoneId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'Type_stones'
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