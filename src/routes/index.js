const express = require('express');
const router = express.Router();

const {index,admin,search, category} = require('../Controllers/indexController')
const checkAdmin = require('../middlewares/checkAdmin')

/* / */
router.get('/',index);
router.get('/admin', checkAdmin,admin );
router.get('/search',search);
router.get('/category/:category',category)





module.exports = router;
