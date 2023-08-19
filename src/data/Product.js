const { v4: uuidv4 } = require("uuid");

const Product = function ({name, brand, price, discount, description, model, metal, size, stock}) {
  this.id = uuidv4();
  this.name = name.trim();
  this.brand = brand;
  this.price = +price;
  this.discount = +discount;
  this.description = description.trim();
  this.image = null;
  this.model = model.trimn();
  this.metal = metal;
  this.size = size;
  this.stock = +stock;
};

module.exports = Product;