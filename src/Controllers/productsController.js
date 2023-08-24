const { readJSON, writeJSON } = require('../data');
const Product = require('../data/Product')

module.exports = {
  add: require('./products/add'),
  create: require('./products/create'),
  
  // detail: require('./products/detail'),
  // edit: require('./products/edit'),
  // remove: require('./products/remove'),
  // update: require('./products/update'),
  // cart: (req, res) => {
    // return res.render('productCart');
  // }
  // detail: (req, res) => {
  //   const products = readJSON('products.json')

  //   const id = req.params.id;    
  //   const product = products.find(product => product.id === +id);

  //   return res.render('detail', {
  //     product
  //   });
  // }
}