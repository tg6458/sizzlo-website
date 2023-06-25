const homeController=require("../app/http/controllers/homeControllers");
const authController=require("../app/http/controllers/authController");
const cartController=require("../app/http/controllers/customer/cartController");
const menuController=require("../app/http/controllers/menuController");
const orderController=require("../app/http/controllers/customer/orderController");
const adminorderController=require("../app/http/controllers/admin/orderController");
const statusController=require("../app/http/controllers/admin/statusController");
const orderplacedController=require("../app/http/controllers/customer/orderplacedController");
// const paymentController=require("../app/http/controllers/paymentController");

const guest= require('../app/http/middleware/guest');
const auth=require('../app/http/middleware/auth');
const admin=require('../app/http/middleware/admin');
const authguest=require('../app/http/middleware/authguest');

function initRoutes(app)
{   
    app.get('/',authguest,homeController().index)

    app.get('/login',guest,authController().login)
    app.post('/login',authController().postLogin)
    
   

    app.get('/register',guest,authController().register) 
    app.post('/register',authController().postRegister)

    app.post('/logout',authController().logout)


    app.get('/menu',authguest,menuController().index)
    app.get('/menu-chineseCorner',authguest,menuController().menuvan)
    app.get('/menu-ramjihatti',authguest,menuController().menuramjihatti)
    app.get('/menu-shakes',authguest,menuController().menushake)
    app.get('/menu-bindrapakode',authguest,menuController().menubindrapakode)
    app.get('/menu-motherdairy',authguest,menuController().menumotherdairy)



    app.get('/cart',authguest,cartController().index)
    app.post('/update-cart',cartController().update)
    app.post('/update-delete-cart',cartController().updatedelete)
    app.post('/delete-cart-items',cartController().deleteCartitems)

    //customer routes
    app.post('/orders',auth,orderController().store)
    app.get('/customer/orders',authguest, orderController().index)
    app.get('/customer/orders/:_id',auth, orderController().show)
    app.get('/customer/notlogin',orderController().notlogin)

    app.get('/customer/orderplaced',orderplacedController().index)
    app.get('/terms-and-conditions',orderplacedController().terms)

    //admin routes
    app.get('/admin/orders',admin, adminorderController().index)
    app.post('/admin/order/status',admin, statusController().update)

    //payment routes
    // app.post('/payment',paymentController().index)



}

module.exports=initRoutes; 