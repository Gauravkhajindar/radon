const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const OrderSchema = new mongoose.Schema( {
    userId:{
        type: ObjectId,
        ref:"User7"
    },
    ProductId:{
        type: ObjectId,
        ref:"Product"
    },
    amount:Number,
    isFreeAppUser:{
        type:Boolean
    },
    date: Date
 

}, { timestamps: true });


module.exports = mongoose.model('Order', OrderSchema) 
