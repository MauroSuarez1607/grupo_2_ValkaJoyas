const express = require('express');
const router = express.Router();

const indexController = require('../Controllers/indexController')

/* GET home page. */
router.get('/', indexController.index);

module.exports = router;
