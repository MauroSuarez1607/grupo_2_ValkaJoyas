const express = require('express');
const router = express.Router();

const {detail,cart,add,edit} = require('../Controllers/productsController');

/* /products */
router
    .get('/detail', detail)
    .get('/cart', cart)
    .get('/add',add)
    .get('/edit', edit)

module.exports = router;
