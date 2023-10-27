const {existsSync, unlinkSync} = require('fs');

const Product = require('../../data/Product');

const db = require("../../database/models");

// const { readJSON, writeJSON } = require('../../data');

// module.exports = (req, res) => {
  
//   const products = readJSON('products.json')
//     const data = {
//       ...req.body,
//       image1: req.files && req.files.image1 && req.files.image1.length > 0 ? req.files.image1[0].filename : null,
//       image2: req.files && req.files.image2 ? req.files.image2.map((image) => image.filename) : [],
//     }



//   let newProducto = new Product(data) // Se trae la función constructora con el destructuring del body
//   products.push(newProducto);

//   writeJSON(products, 'products.json')

//     return res.redirect('/admin') //  POST

// }
module.exports = (req, res) => {

  
  const { name, description, brand, model, collection, category, metal, stones, type_stone, size, measures_mm, warranty, jewel_keeper, price, discount, stock, image1, image2 } = req.body;

  db.Product.create({
    name: name.trim(),
    description: description.trim(),
    brandId: brand.trim(),
    designId: model.trim(),
    collectionId: collection.trim(),
    categoryId: category,
    metalId: metal,
    stones,
    type_stoneId: type_stone,
    size: size.trim(),
    measures_mm,
    warranty: warranty === "true" ? 1 : 0,
    jewel_keeper: jewel_keeper === "true" ? 1 : 0,
    price,
    discount: discount || 0,
    stock,
    image1: req.files && req.files.image1 && req.files.image1.length > 0 ? req.files.image1[0].filename : null,
    image2: req.files && req.files.image2 ? req.files.image2.map((image) => image.filename).join(", ") : null,
  

  })





  
  .then((product) => {
    if (req.files.image2) {
      const image2 = req.files.image2.map((file) => {
        return {
          file: file.filename,
          main: false,
          productId: product.id,
        };
      });

      db.Image.bulkCreate(image2, {
        validate: true,
      }).then((response) => {
        return res.redirect("/admin");
      });
    } else {
      return res.redirect("/admin");
    }
  })
  .catch((error) => console.log(error));

  if (req.files.length) {
    req.files.forEach((file) => {
      existsSync("./public/images/" + file.filename) && unlinkSync("./public/images/" + file.filename);
    });
  }

  const metals = db.Metal.findAll({
    order: ["name"],
  });

  Promise.all([metals])
  .then(([metals]) => {
    return res.render("productAdd", {
      metals,
        errors: errors.mapped(),
        old: req.body,
      });
    })
    .catch((error) => console.log(error));


 
}