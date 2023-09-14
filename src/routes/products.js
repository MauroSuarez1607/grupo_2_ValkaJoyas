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
    .post('/add', upload.fields([{ name: 'image1'},{ name: 'image2'}]), create)
    .put('/update/:id', upload.fields([{ name: 'image1'},{ name: 'image2'}]), update)

module.exports = router;