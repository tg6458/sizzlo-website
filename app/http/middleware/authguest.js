function authguest(req,res,next){
    if(req.isAuthenticated() && req.user.role=='admin')
    {
        return res.redirect('/admin/orders')
    }

    return next()
}

module.exports=authguest