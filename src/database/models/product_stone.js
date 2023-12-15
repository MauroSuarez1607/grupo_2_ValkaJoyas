'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product_stone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product_stone.init({
    productId: DataTypes.INTEGER,
    type_stoneId : DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product_stone',
  });
  return Product_stone;
};