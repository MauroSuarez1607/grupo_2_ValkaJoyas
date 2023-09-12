const  express = require('express');
const  router = express.Router();

const {
    login,
    register, 
    processRegister,
    processLogin,
    profile,
    updateProfile,
    logout
}= require('../Controllers/usersController');
const { uploadImageUser } = require('../middlewares/uploadImageUsers');
const registerValidator = require('../validations/registerValidator');
const checkNotUserLogin = require('../middlewares/checkNotUserLogin')
const loginValidator = require('../validations/loginValidator')
const checkUserLogin = require('../middlewares/checkUserLogin')


/* /users */
router
    .get('/register', checkNotUserLogin, register )
    .post('/register', uploadImageUser.single('image'), registerValidator, processRegister )
    .get('/login', checkNotUserLogin, login )
    .post('/login', loginValidator, processLogin )
    .get('/profile', checkUserLogin, profile)
    .put('/update-profile',uploadImageUser.single('image'),updateProfile)
    .get('/logout',logout)
    

module.exports = router;
