const User = require('../../data/User');
const { readJSON, writeJSON } = require('../../data');

module.exports = (req,res)=>{

    const users = readJSON('users.json');

    const data={
        ...req.body,
        image : req.file ? req.file.filename : null,
    }
    
    let newUser = new User(data);
    users.push(newUser);
    writeJSON(users,'users.json');

    
    return res.redirect('/')
}