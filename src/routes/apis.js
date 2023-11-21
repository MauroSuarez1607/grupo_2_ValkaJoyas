const express = require('express')
const { checkEmail } = require('../Controllers/apiController')
const router = express.Router()

/* /apis */
router.get('/checkEmail', checkEmail )

module.exports = router