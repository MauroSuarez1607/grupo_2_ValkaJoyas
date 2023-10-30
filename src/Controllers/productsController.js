const db = require("../database/models");
module.exports = {
  
  products: (req, res) => {
    db.Product.findAll({
      include: ["images"],
    })
      .then((products) => {
        return res.render("productEdit", {
          products,
        });
      })
      .catch((error) => console.log(error));
  }, // Cierre del método "products"

  add: require('./products/add'),
  create: require('./products/create'),
  detail: require('./products/detail'),
  edit: require('./products/edit'),
  remove: require('./products/remove'),
  update: require('./products/update'),
  cart: (req, res) => {
    return res.render('productCart');
  }
};