const multer = require('multer');
const path = require('path')

const storage = multer.diskStorage({
    destination : function(req,file,callback){
        callback(null,'public/images')
    },
    filename : function(req,file,callback){
        callback(null,`${Date.now()}_users_${path.extname(file.originalname)}`)
    }
})

const uploadImageUser = multer({storage});

module.exports = {
    uploadImageUser
}