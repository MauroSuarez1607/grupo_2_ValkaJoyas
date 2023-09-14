const { readJSON, writeJSON } = require("../../data")

module.exports = (req,res) => {
    const products = readJSON('products.json')
    const id = req.params.id

    const productDelete = products.filter(product => product.id !== +id)

    existsSync(`./src/public/images/${product.image1}`) &&
    unlinkSync(`./src/public/images/${product.image1}`);
// linea arriba para eliminar img de public
    writeJSON(productDelete, 'products.json')

    return res.redirect('/admin')
}