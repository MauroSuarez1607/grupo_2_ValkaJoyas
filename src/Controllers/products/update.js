
const { unlinkSync, existsSync } = require("fs");
const { readJSON, writeJSON } = require("../../data");

module.exports = (req, res) => {
  const products = readJSON("products.json");
  const id = req.params.id;
  const { name, description, brand, model, collection, category, metal, stones, type_stone, color, size, measures_mm, warranty, jewel_keeper, price, discount, stock } = req.body;

  const productsModify = products.map((product) => {
    if (product.id === +id) {

      // Problema: si hay imagenes cargadas de antemano, pero no cargo nada en la actualizacion, igualmente esas imagenes se borran

      if (req.files && req.files.image1 && req.files.image1.length > 0) {
        existsSync(`./src/public/images/${product.image1}`) && unlinkSync(`./src/public/images/${product.image1}`);
      }
  
      // Elimina las imágenes secundarias si existen
      if (product.image2 && product.image2.length > 0) {
        product.image2.forEach((image) => {
          existsSync(`./src/public/images/${image}`) && unlinkSync(`./src/public/images/${image}`);
        });
      }

      product.name = name.trim();
      product.description = description.trim();
      product.brand = brand.trim();  //es con trim (?)
      product.model = model.trim();
      product.collection = collection.trim();
      // **************IMAGENES****************************
      // product.image1 = null;
      // product.image2 = null;
      // **************CLASIFICACIÓN***********************
      //  product.article = article;
      product.category = category;
      product.metal = metal;
      product.stones = +stones;
      // **************DETALLE***********************
      product.type_stone = Array.isArray(type_stone) && type_stone.length > 0 ? type_stone : (type_stone ? [type_stone] : []);
      product.color = Array.isArray(color) && color.length > 0 ? color : (color ? [color] : []);
      product.size = size;
      product.measures_mm = +measures_mm;
      product.warranty = warranty;
      product.jewel_keeper = jewel_keeper;
      // **************ECONOMIA***********************
      product.price = +price;
      product.discount = +discount;
      product.stock = +stock;

    // **************MULTER**************************** 
    product.image1 = req.files && req.files.image1 && req.files.image1.length > 0 ? req.files.image1[0].filename : null;
    product.image2 = req.files && req.files.image2 ? req.files.image2.map((file) => file.filename) : product.image2;
    }
  // }
    return product;
  });

  writeJSON(productsModify, "products.json");

  return res.redirect("/admin");
};