const {validationResult} = require('express-validator')
const db = require('../../database/models')

module.exports = async (req,res) => {

    const errors = validationResult(req)

    if(errors.isEmpty()){
        const {name,surname,birthday,genderId}= req.body; //agregar image?

        const user = await db.User.findByPk(req.session.userLogin.id)

        db.User.update(
            {
                name : name.trim(),
                surname : surname.trim(),
                birthday,
                genderId,
                image : req.file ? req.file.filename : user.image
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

        const genders = db.Gender.findAll()
        const user = db.User.findByPk(req.session.userLogin.id)
        
        Promise.all([genders, user])
        .then(([genders, user]) => {
                const birthday = new Date (user.birthday).toISOString()
                return res.render('profile', {
                    ...user.dataValues,
                    birthday : birthday.split('T')[0],
                    genders,
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