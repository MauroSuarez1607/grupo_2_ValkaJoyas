const {existsSync, unlinkSync} = require('fs');
const { readJSON, writeJSON } = require('../../data');
const Product = require('../../data/Product')

module.exports = (req, res) => {
  
  const products = readJSON('products.json')
    const data = {
      ...req.body,
      image1 : req.file ? req.file.filename : null,
      image2: req.files ? req.files.map(file => file.filename) : null,
    }



  let newProducto = new Product(data) // Se trae la función constructora con el destructuring del body
  products.push(newProducto);

  writeJSON(products, 'products.json')

    return res.redirect('/admin') //  POST



  // if(req.file){
  //   existsSync('./public/images/' + req.file.filename) && unlinkSync('./public/images/' + req.file.filename)
  // }

}