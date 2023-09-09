module.exports = (req,res,next) => {
    if(req.cookies.valkaJewels02){
        req.session.userLogin =req.cookies.valkaJewels02
    }
    next()
}