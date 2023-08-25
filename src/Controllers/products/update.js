const { readJSON } = require("../../data");

module.exports = (req,res) => {
    return res.send(req.body)
  }

// const { unlinkSync, existsSync } = require("fs");
// const { readJSON, writeJSON } = require("../../data");

// module.exports = (req, res) => {
//   const products = readJSON("products.json");
//   const id = req.params.id;
//   const { name, description, brand, model, collection, category, metal, stones, type_stone, color, size, measures_mm, warranty, jewel_keeper, price, discount, stock } = req.body;

//   const productsModify = products.map((product) => {
//     if (product.id === id) {

//       req.file &&
//         existsSync(`./public/images/${product.image}`) &&
//         unlinkSync(`./public/images/${product.image}`);

//         product.name = name.trim();
//         product.description = description.trim();
//         product.brand = brand.trim();  //es con trim (?)
//         product.model = model.trim();
//         product.collection = collection.trim();
//        // **************IMAGENES****************************
//        product.image1 = null;
//        product.image2 = null;
//        // **************CLASIFICACIÓN***********************
//       //  product.article = article;
//        product.category = category;
//        product.metal = metal;
//        product.stones = +stones;
//        // **************DETALLE***********************
//         product.type_stone = type_stone;
//         product.color = color;
//         product.size = size;
//         product.measures_mm = +measures_mm;
//         product.warranty = warranty;
//         product.jewel_keeper = jewel_keeper;
//          // **************ECONOMIA***********************
//          product.price = +price;
//          product.discount = +discount;
//          product.stock = +stock;


//       product.image = req.file ? req.file.filename : product.image;

//     }

//     return product;
//   });

//   writeJSON(productsModify, "products.json");

//   return res.redirect("/admin");
// };