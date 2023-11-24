const express = require('express');

const router = express.Router();
const upload = require('../middlewares/upload');
const {detail,cart,add,edit,remove,create,update} = require('../Controllers/productsController');
// sprint 7
const productAddValidator = require("../validations/productAddValidator");
const productUpateValidator = require("../validations/productUpdateValidations");

/* /products */
router
    .get('/detail/:id/', detail)
    .get('/cart', cart)
    .get('/add',add)
    .get('/edit/:id', edit)
    .delete('/remove/:id', remove)
    .post('/add', upload.fields([{ name: 'image1'},{ name: 'image2'}]), productAddValidator, create)
    .put('/update/:id', upload.fields([{ name: 'image1'},{ name: 'image2'}]), productUpateValidator, update)

module.exports = router;