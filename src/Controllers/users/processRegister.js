const User = require('../../data/User');
const { readJSON, writeJSON } = require('../../data');
const {validationResult} = require('express-validator')

module.exports = (req,res)=>{

    let errors = validationResult(req);

    if(errors.isEmpty()){
        const users = readJSON('users.json');

        const data={
            ...req.body,
            image : req.file ? req.file.filename : null,
        }
        
        let newUser = new User(data);
        users.push(newUser);
        writeJSON(users,'users.json');
        return res.redirect('/')

    }else{
        return res.render('register', {
            old : req.body,
            errors : errors.mapped()
        })
    }
    
}