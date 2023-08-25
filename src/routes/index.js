const express = require('express');
const router = express.Router();

const {index,admin,search, category} = require('../Controllers/indexController')

/* / */
router.get('/',index);
router.get('/admin',admin );
router.get('/search',search);
router.get('/category/:category',category)





module.exports = router;
