const db = require("../../database/models");
// const { readJSON } = require("../../data");
// const Product = require('../../data/Product')

module.exports = (req, res) => {

//     const products = readJSON("products.json");

//     const id = req.params.id;
//     const product = products.find((product) => product.id === +id);

//     return res.render("productEdit", {
//         ...product,
//     });
// }

// aclaracion el "+id" si le quito el +, no funciona a diferencia de erik video clase69 1hs:30min

const product = db.Product.findByPk(req.params.id,{
    include: ["images"],
  });

  const metals = db.Metal.findAll({
    order: ["name"],
  });

  Promise.all([product, metals])
    .then(([product, metals]) => {
      
      return res.render("editProduct", {
        product,
        metals,
        old: req.body
      });
    })
    .catch((error) => console.log(error));
};
