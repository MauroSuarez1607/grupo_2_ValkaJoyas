const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');
const {add, edit, create, update} = require('../Controllers/productsController');

/* /products */
router
    // .get('/detail', detail)
    // .get('/cart', cart)
    .get('/add',add)
    .get('/edit/:id', edit)
    .post('/add', upload.single('image1'),create)
    // .get('/add',add)
    .put('/update/:id', upload.single('image1'),update)


module.exports = router;