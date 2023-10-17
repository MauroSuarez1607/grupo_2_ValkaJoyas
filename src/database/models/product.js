'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    discount: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    image1: DataTypes.STRING,
    image2: DataTypes.STRING,
    stones: DataTypes.INTEGER,
    size: DataTypes.STRING,
    measuresMm: DataTypes.INTEGER,
    warranty: DataTypes.BOOLEAN,
    jewelKeeper: DataTypes.BOOLEAN,
    stock: DataTypes.INTEGER,
    brandId: DataTypes.INTEGER,
    modelId: DataTypes.INTEGER,
    collectionId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    metalId: DataTypes.INTEGER,
    type_stoneId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};