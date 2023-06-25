const mongoose=require('mongoose')
const Schema=mongoose.Schema

const menuSchema=new Schema({
    restaurant_name:{type: String,required: true},
    name:{type: String,required: true},
    image:{type: String,required: true},
    description:{type: String,required: true},
    price:{type: Number,required: true},
})


module.exports=mongoose.model('Menumotherdairy',menuSchema)