const mongoose = require('mongoose');

const bookModel1 = new mongoose.Schema( {
    bookName: {
        type: String, 
        required: true
    },
    price:{   
        indianPrice: String,
        europeanPrice: String,
    },
    year:{
        type: String,
        default: 2021
    },
    tags: [String],
    
    authorName: String,
        
    totalPages: Number,
        
    stockAvailable: Boolean,
    
}, 
{ timestamps: true });


module.exports = mongoose.model('newBook1', bookModel1) //users
