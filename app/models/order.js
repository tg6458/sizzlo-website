const mongoose=require('mongoose')
const Schema=mongoose.Schema

const orderSchema= new Schema({
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    items: {type: Object,required: true},
    phone: {type: String,required: true},
    address: {type: String,required: true},
    specialInstructions: {type: String, default:" "},
    deliveryInstructions1: {type: String,default: ""},
    deliveryInstructions2: {type: String,default: ""},
    deliveryInstructions3: {type: String,default: ""},
    deliveryInstructions4: {type: String,default: ""},
    appttime: {type: String,default: "Instant Delivery"},
    amount: {type: String,default: " "},
    paymentType: {type: String,default: " " },
    status: {type: String,default: 'order_placed'},
},{timestamps: true})



module.exports=mongoose.model('Order',orderSchema)