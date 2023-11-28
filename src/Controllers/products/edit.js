// const { readJSON } = require("../../data");
// const Product = require('../../data/Product')

const db = require("../../database/models");
// module.exports = (req, res) => {

//     const products = readJSON("products.json");

//     const id = req.params.id;
//     const product = products.find((product) => product.id === +id);

//     return res.render("productEdit", {
//         ...product,
//     });
// }

// aclaracion el "+id" si le quito el +, no funciona a diferencia de erik video clase69 1hs:30min

module.exports = (req, res) => {
  const product = db.Product.findByPk(req.params.id, {
    include: ['brand', 'design', 'collection']
  })


  const metals = db.Metal.findAll({
        order: ["name"],
      });

    
      return Promise.all([product, metals])
        .then(([product, metals]) => {
          const brandName = product.brand ? product.brand.name : null;
          console.log("Brand Name:", brandName);
          const designName = product.design ? product.design.name : null;
          console.log("design Name:", designName);
          const collectionName = product.collection ? product.collection.name : null;
          console.log("collection Name:", collectionName);

          res.render("productEdit", {
            product,
            metals,
            brandName,
            designName,
            collectionName,
            old: req.body
          });
        })
        .catch(error => console.log(error));
    }
