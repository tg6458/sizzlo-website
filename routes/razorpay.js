// const express=require('express');
// const router= express.Router();

// const Razorpay= require('razorpay');

// const instance = new Razorpay({
//     key_id: 'rzp_test_Z9cEGalCpXseOK',
//     key_secret: 'IJQnmPlxQC72ezOU0yf0K3w5'
// });

// router.get('/',(req,res)=>{
//     var options ={
//         amount: 100 *100,
//         currency: 'INR',
//     };

//     instance.orders.create(options,function(err,order){
//         if(err){
//             console.log(err);
//         }else{
//             console.log(order)
//             res.send(order.id)
//         }

//     })
// });

// module.exports= router;