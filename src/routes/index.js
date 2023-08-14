const express = require('express');
const router = express.Router();

const indexController = require('../Controllers/indexController')

/* / */
router.get('/', indexController.index);
router.get('/admin',indexController.admin );

module.exports = router;
