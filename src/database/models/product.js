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
      Product.belongsTo(models.Brand, {
        as : 'brand',
        foreignKey : 'brandId'
      })
      Product.belongsTo(models.Design, {
        as : 'design',
        foreignKey : 'designId'
      })
      Product.belongsTo(models.Collection, {
        as : 'collection',
        foreignKey : 'collectionId'
      })
      Product.belongsTo(models.Metal, {
        as : 'metal',
        foreignKey : 'metalId'
      })
      Product.belongsTo(models.Category, {
        as : 'category',
        foreignKey : 'categoryId'
      })
      Product.belongsToMany(models.Type_stone, {
        as : 'stones',
        foreignKey : 'productId',
        otherKey : 'type_stoneId',
        through : 'Product_stone'
      })
    }
  }
  Product.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    image1: DataTypes.STRING,
    image2: DataTypes.STRING,
    countStones: DataTypes.INTEGER,
    size: DataTypes.STRING,
    measures_mm: DataTypes.INTEGER,
    warranty: DataTypes.BOOLEAN,
    jewel_keeper: DataTypes.BOOLEAN,
    price: DataTypes.INTEGER,
    discount: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
    brandId: DataTypes.INTEGER,
    designId: DataTypes.INTEGER,
    collectionId: DataTypes.INTEGER,
    metalId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};