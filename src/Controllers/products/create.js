const { readJSON, writeJSON } = require('../../data');
const Product = require('../../data/Product')

module.exports = (req, res) => {
    const products = readJSON('products.json')
    const data = {
      ...req.body,
      image : req.file ? req.file.filename : null,
      image2: req.files ? req.files.map(file => file.filename) : null
    }

  let newProducto = new Product(req.body) // Se trae la función constructora con el destructuring del body
  products.push(newProducto);

  writeJSON(products, 'products.json')

    return res.redirect('/admin') // Sirve para el envio de informacion por POST
}
