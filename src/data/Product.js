const { readJSON } = require('../data');
const products = readJSON('products.json')

// const { v4: uuidv4 } = require("uuid");

const Product = function ({name, description, brand, model, collection, category, metal, stones, type_stone, color, size, measures_mm, warranty, jewel_keeper, price, discount, stock, image1}) {
  // this.id = uuidv4();
  this.id = products[products.length - 1].id + 1;
  // **************DATOS****************************
  this.name = name.trim();
  this.description = description.trim();
  this.brand = brand.trim();  //es con trim (?)
  this.model = model.trim();
  this.collection = collection.trim();
 // **************IMAGENES****************************
 this.image1 = image1;
 this.image2 = null;
 // **************CLASIFICACIÓN***********************
//  this.article = article;
 this.category = category;
 this.metal = metal;
 this.stones = +stones;
 // **************DETALLE***********************
  this.type_stone = Array.isArray(type_stone) && type_stone.length > 0 ? type_stone : (type_stone ? [type_stone] : []);
  this.color = Array.isArray(color) && color.length > 0 ? color : (color ? [color] : []);
  this.size = size;
  this.measures_mm = +measures_mm;
  this.warranty = warranty;
  this.jewel_keeper = jewel_keeper;
   // **************ECONOMIA***********************
   this.price = +price;
   this.discount = +discount;
   this.stock = +stock;
};

module.exports = Product;