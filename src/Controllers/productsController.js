const db = require("../database/models");
module.exports = {
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