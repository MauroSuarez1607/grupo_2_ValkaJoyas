const { readJSON, writeJSON } = require('../../data');
// const Product = require('../../data/Product')

module.exports = (req, res) => {
    return res.render('productAdd')
}