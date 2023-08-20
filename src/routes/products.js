const express = require('express');
const router = express.Router();

const {detail,cart,add,edit,remove} = require('../Controllers/productsController');

/* /products */
router
    //.get('/detail', detail)
    .get('/cart', cart)
    //.get('/add',add)
    //.get('/edit', edit)
    .delete('/remove/:id', remove)

module.exports = router;
