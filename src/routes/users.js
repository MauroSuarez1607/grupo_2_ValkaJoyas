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



/* /users */
router
    .get('/register', register )
    //.post('/register', processRegister )
    .get('/login', login )
    //.post('/login', processLogin )
    //.get('/profile', profile)
    //.put('/update-profile',updateProfile)
    //.get('/logout',logout)
    

module.exports = router;
