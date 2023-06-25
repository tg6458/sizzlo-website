// const { update } = require("../../../models/menu");

function cartController()
{
    return{
        index(req,res){
            res.render('customer/cart')
        },
       update(req,res){
              
            // let cart={
            //     items: {
            //         menuId: {
            //             item: {menuObject,qty:0},
                    // item: {menuObject,qty:0},
                    // item: {menuObject,qty:0}
            //         },
            //         totalQty: 0,
            //         totalPrice: 0
            //     }
            // }

              //for first time create cart 
               if(!req.session.cart){
                req.session.cart={
                    items: {},
                    totalQty: 0,
                    totalPrice: 0
                }
               }

               let cart=req.session.cart
               //check if item does not exist in cart 
               if(!cart.items[req.body._id]){ 
                cart.items[req.body._id]={
                    items: req.body,
                    qty: 1
                }
                cart.totalQty=cart.totalQty+ 1
                cart.totalPrice= cart.totalPrice + req.body.price
               }

               else{
                cart.items[req.body._id].qty=cart.items[req.body._id].qty + 1,
                cart.totalQty= cart.totalQty + 1,
                cart.totalPrice= cart.totalPrice + req.body.price
               }

               return res.json({data: req.session.cart.totalQty,itemQty:req.session.cart.items[req.body._id].qty})
        },

        updatedelete(req,res){
            if(req.session.cart){
                let cart=req.session.cart
                if(cart.items[req.body._id]){
                    if(cart.items[req.body._id].qty!=0){
                        cart.items[req.body._id].qty=cart.items[req.body._id].qty - 1,
                        cart.totalQty= cart.totalQty - 1,
                        cart.totalPrice= cart.totalPrice - req.body.price
                    }
                }
            }
            return res.json({data: req.session.cart.totalQty,itemQty:req.session.cart.items[req.body._id].qty})
        },

        deleteCartitems(req,res){
            if(req.session.cart){
                let cart=req.session.cart
                if(cart.items[req.body._id]){
                    if(cart.items[req.body._id].qty!=0){
                        cart.totalQty= cart.totalQty - cart.items[req.body._id].qty,
                        cart.totalPrice= cart.totalPrice - req.body.price*cart.items[req.body._id].qty,
                        cart.items[req.body._id].qty=0
                    }
                }
            }
            return res.json({data: req.session.cart.totalQty,itemQty:req.session.cart.items[req.body._id].qty})
        }
    }
}

module.exports=cartController  