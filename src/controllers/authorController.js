const AuthorModel= require("../models/authorModel")
const PublisherModel= require("../models/publishermodel")
const BookModel= require("../models/bookModel")


// ====================================createAuthor=================================================
const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.send({data: authorCreated})
}
// ==================================createPublisher===================================================
const createPublisher= async function (req, res) {
    let publisher = req.body
    let publisherCreated = await PublisherModel.create(publisher)
    res.send({data: publisherCreated})
}

// =====================================createBook=================================================
const createBook= async function (req, res) {
    let book = req.body
    //=========================1=============================
    let authorId=book.author_id
    if(!authorId)return res.send("author is is required" )
    // ========================2=============================
    let authordata= await AuthorModel.findById(authorId)
    if(!authordata)return res.send("invalid author id")
    // ========================3=============================
    let publisherId=book.publisher_id
    if(!publisherId)return res.send("publisher id is requied")
    // =========================4=============================
    let publisherdata=await PublisherModel.findById(publisherId)
    if(!publisherdata)return res.send("invalid publisher id")


    let bookCreated = await BookModel.create(book)
    res.send({data: bookCreated})
}

// ===========================BooksWithDetails===================================

const BooksWithDetails = async function (req, res) {
    let specificBook = await BookModel.find().populate('author_id publisher_id')
    res.send({data: specificBook})

}
// ===========================Upadatekey=========================================


const Upadatekey=async function(req,res){
    let data=await PublisherModel.find({name:"HarperCollins"}).select("_id")
    let data2=await PublisherModel.find({name:"Penguin"}).select("_id")
    let UpdateHardCover=await BookModel.updateMany({publisher_Id:data},{$set:{isHardCover:true}})
    let UpdateHardCover2=await BookModel.updateMany({publisher_Id:data2},{$set:{isHardCover:true}})
    res.send({msg:UpdateHardCover,UpdateHardCover2})
}
// ==========================updatebookprice===================================================
const Upadateprice =async function (req, res) {
    let authorRating = await AuthorModel.find({rating:{$gt:3.5}}).select("_id")
    let updatedprice= await BookModel.updateMany({author_id:authorRating}, {$inc: {price:+10}})
    res.send({data:updatedprice })

}
// ==================================================================================================


module.exports.createAuthor= createAuthor
module.exports.createPublisher= createPublisher
module.exports.createBook= createBook
module.exports.BooksWithDetails= BooksWithDetails
module.exports.Upadatekey= Upadatekey
module.exports.Upadateprice= Upadateprice



