const {v4 : uuidv4} = require('uuid');
const {hashSync}= require('bcryptjs');

const User = function ({name,email,surname,password,image}){
    this.id = uuidv4();
    this.name = name.trim();
    this.surname = surname.trim();
    this.email = email.trim();
    this.password = hashSync(password.trim(),10)
    this.rol = "Regular";
    this.image = image;
    this.birthday = null
}

module.exports = User;

//que nodemon ingnore los cambiso en json, BUSCAR