function orderplacedController()
{
    return {
        index(req,res)
        {
            res.render('customer/orderplaced');
        },
        terms(req,res){
            res.render('terms');
        }
    }
}

module.exports=orderplacedController;