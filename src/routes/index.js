const express = require('express');
const router = express.Router();

const {index,admin} = require('../Controllers/indexController')

/* / */
router.get('/',index);
router.get('/admin',admin );

module.exports = router;
