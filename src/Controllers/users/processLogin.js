const { validationResult } = require("express-validator")
const { readJSON } = require("../../data")

module.exports = (req,res) => {
    const errors = validationResult(req)

    if(errors.isEmpty()){
        const users = readJSON('users.json');
        const {email, remember} = req.body                     /* Ready: Add line cookie*/
        const user = users.find(user => user.email === email);    /* Ready: Add line cookie*/
        const {id, name, rol} = user;

        req.session.userLogin = {
            id,
            name,
            rol
        }

        remember !== undefined && res.cookie('valkaJewels02',req.session.userLogin,{ 
            maxAge : 1000 * 60 * 2 /* Ready: 2 minutos cookie*/
        })

        return res.redirect('/')
    }else {
        return res.render('login', {
            errors : errors.mapped()
        })
    }
}