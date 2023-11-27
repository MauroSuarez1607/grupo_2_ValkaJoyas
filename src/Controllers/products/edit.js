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
    const product = db.Product.findByPk(req.params.id,{
    //   include: ["images"],                           
    // ARREGLAR LA LINEA DE ARRIBA 
    });
  
    const metals = db.Metal.findAll({
        order: ["name"],
      });
  
  
    Promise.all([product, metals])
      .then(([product , metals]) => {
      
        return res.render("productEdit", {
          product,
          metals,
          old: req.body
        });
      })
      .catch((error) => console.log(error));
  };