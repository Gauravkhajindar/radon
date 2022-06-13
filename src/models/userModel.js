const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    firstName: String,
    balance:
     {type :Number,
        default:100},
    address: String,   
    age: Number,
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"]
    }
  
   
}, { timestamps: true });

module.exports = mongoose.model('User7', userSchema) 



