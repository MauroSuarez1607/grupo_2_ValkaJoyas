
const { readJSON, writeJSON } = require("../../data");
module.exports = (req,res) => {
    
    const users = readJSON('users.json');
    const userId = req.session.userLogin.id;
    const {name,surname,gender,birthday}= req.body;
    

    const usersModify = users.map(user =>{
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
       return user
    });
    writeJSON(usersModify,'users.json');

    
    return res.redirect('/users/profile')
    
}