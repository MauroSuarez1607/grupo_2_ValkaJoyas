const express = require('express');
const router = express.Router();

const productsController = require('../Controllers/productsController');

/* /products */
router.get('/productDetail', productsController.productDetail);
router.get('/productCart', productsController.productCart);

module.exports = router;
