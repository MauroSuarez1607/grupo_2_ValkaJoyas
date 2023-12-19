const express = require('express')
const { showAll, addItem, removeItem, emptyCart } = require('../Controllers/apiCartController')
const router = express.Router()

/* /cart */
router
    .get('/',showAll)
    .post('/', addItem)
    .delete('/:id',removeItem)
    .delete('/all',emptyCart)

module.exports = router