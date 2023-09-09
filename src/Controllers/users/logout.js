module.exports = (req,res) => {
    req.session.destroy()
    res.cookie('valkaJewels02', null, {
        maxAge : -1
    })
    return res.redirect('/')
}