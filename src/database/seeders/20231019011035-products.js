"use strict";
const productsJSON = require("../../data/products.json");

const products = productsJSON.map(
  ({ name, price, discount, description, image1, image2, stones, size, measuresMm,warranty,jewelKeeper, stock, brand, model, collection, category, metal, type_stone }) => {
    return {
      name,
      price,
      discount,
      description,
      image1,
      image2,
      stones,
      size,
      measuresMm,
      warranty,
      jewelKeeper,
      stock,
      brandId: brand,
      modelId: model,
      collectionId: collection,
      categoryId: category,
      metalId: metal,
      type_stoneId: type_stone,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }
);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Products", products, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
