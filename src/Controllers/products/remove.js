const { readJSON, writeJSON } = require("../../data")

module.exports = (req,res) => {
    const products = readJSON('products.json')
    const id = req.params.id

    const productDelete = products.filter(product => product.id !== id)

    writeJSON(productDelete, 'products.json')

    return res.redirect('/admin')
}