const {existsSync, unlinkSync} = require('fs');
const { readJSON, writeJSON } = require('../../data');
const Product = require('../../data/Product')

module.exports = (req, res) => {
  
  const products = readJSON('products.json')
    const data = {
      ...req.body,
      image1: req.files && req.files.image1 && req.files.image1.length > 0 ? req.files.image1[0].filename : null,
      image2: req.files && req.files.image2 ? req.files.image2.map((image) => image.filename) : [],
    }



  let newProducto = new Product(data) // Se trae la función constructora con el destructuring del body
  products.push(newProducto);

  writeJSON(products, 'products.json')

    return res.redirect('/admin') //  POST

}