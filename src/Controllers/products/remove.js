const { unlinkSync, existsSync } = require("fs");
const { readJSON, writeJSON } = require("../../data")

module.exports = (req,res) => {
    const products = readJSON('products.json')
    const id = req.params.id

    const productDelete = products.filter(product => product.id !== +id)

    products.forEach(product => {
        if (product.id === +id) {
          if (product.image1) {
            existsSync(`./src/public/images/${product.image1}`) &&
              unlinkSync(`./src/public/images/${product.image1}`);
          }
      
          if (product.image2 && product.image2.length > 0) {
            product.image2.forEach(images => {
              existsSync(`./src/public/images/${images}`) &&
                unlinkSync(`./src/public/images/${images}`);
            });
          }
        }
      });

// linea arriba para eliminar img de public
    writeJSON(productDelete, 'products.json')

    return res.redirect('/admin')
}

