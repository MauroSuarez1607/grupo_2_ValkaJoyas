const express = require('express');
const router = express.Router();

const productsController = require('../Controllers/productsController');

/* /products */
router.get('/productDetail', productsController.productDetail);
router.get('/productCart', productsController.productCart);
router.get('/productAdd', productsController.add);
router.get('/productEdit', productsController.edit);

module.exports = router;
