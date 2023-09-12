
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
                gender,
                birthday,
                image: req.file?.filename || user.image
            }
        }
       return user
    });
    writeJSON(usersModify,'users.json');
    const user = usersModify.find(({id}) => id === userId )
    return res.render('profile', {
        ...user
    });
}