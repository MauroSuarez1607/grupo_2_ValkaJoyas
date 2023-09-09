module.exports = (req,res,next) => {
    if(req.session.userLogin && req.session.userLogin.rol === "Admin"){
        next()
    }else {
        return res.redirect('/')
    }
}