const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');
const {detail,cart,add,edit,remove,create,update} = require('../Controllers/productsController');

/* /products */
router
    .get('/detail/:id/', detail)
    .get('/cart', cart)
    .get('/add',add)
    .get('/edit/:id', edit)
    .delete('/remove/:id', remove)
    .post('/add', upload.single('image1'),create)
    .put('/update/:id', upload.single('image1'),update)

module.exports = router;