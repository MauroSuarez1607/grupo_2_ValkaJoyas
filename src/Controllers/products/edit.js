const { readJSON } = require("../../data");
const Product = require('../../data/Product')

module.exports = (req, res) => {

    const products = readJSON("products.json");

    const id = req.params.id;
    const product = products.find((product) => product.id === +id);

    return res.render("productEdit", {
        ...product,
    });
}

// aclaracion el "+id" si le quito el +, no funciona a diferencia de erik video clase69 1hs:30min