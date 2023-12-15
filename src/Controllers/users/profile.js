const db = require('../../database/models')

module.exports = (req,res)=>{

    const genders = db.Gender.findAll()
    const user = db.User.findByPk(req.session.userLogin.id)
    
    Promise.all([genders, user])
    .then(([genders, user]) => {
            const birthday = new Date (user.birthday).toISOString()
            return res.render('profile', {
                ...user.dataValues,
                birthday : birthday.split('T')[0],
                genders
            })
        })
        .catch(error => console.log(error))
    
}