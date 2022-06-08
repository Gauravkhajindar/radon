const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String, 
    author_id: 
       {type:String, 
        require:true,
    } ,
    
    price:String,
    rating:Number
    
  
}, { timestamps: true });


module.exports = mongoose.model('Books999', bookSchema) 
