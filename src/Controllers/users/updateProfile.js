const {validationResult} = require('express-validator')
const db = require('../../database/models')

module.exports = (req,res) => {

    const errors = validationResult(req)

    if(errors.isEmpty()){
        const {name,surname,birthday,genderId}= req.body; //agregar image?

        db.User.update(
            {
                name : name.trim(),
                surname : surname.trim(),
                birthday,
                genderId,
                // agregar image?
            },
            {
                where : {
                    id : req.session.userLogin.id
                }
            }
        )
            .then(response => {
                console.log(response)
                return res.redirect('/')
            })
            .catch(error => console.log(error))

    }else {
        db.User.findByPk(req.session.userLogin.id)
        .then(user => {
            return res.render('profile', {
                ...user.dataValues,
                errors : errors.mapped()
            })
        })
        .catch(error => console.log(error))
    }
    
    // NO BORRAR MAUROOO!!!

    /*const usersModify = users.map(user =>{
        if( user.id === userId){
            return {
                ...user,
                name,
                surname,
                gender: req.body.gender? gender : user.gender,
                birthday: req.body.birthday? birthday: user.birthday,
                image: req.file?.filename || user.image
            }
        }
       return user*/    
}