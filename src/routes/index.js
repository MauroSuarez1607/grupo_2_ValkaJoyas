const express = require('express');
const router = express.Router();

const {index,admin,search} = require('../Controllers/indexController')

/* / */
router.get('/',index);
router.get('/admin',admin );
router.get('/search',search); 




module.exports = router;
