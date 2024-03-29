'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Type_stone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Type_stone.belongsToMany(models.Product, {
        as : 'products',
        foreignKey : 'type_stoneId',
        otherKey : 'productId',
        through : 'Product_stone'
      })
    }
  }
  Type_stone.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Type_stone',
  });
  return Type_stone;
};