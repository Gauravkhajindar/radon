
const bookModel= require("../models/bookModel")
const authorModel= require("../models/authorModel")
// =========================createbook=============================================
const createbook= async function (req, res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
}

// ==========================createauthor=============================================
const createauthor= async function (req, res) {
    let data= req.body

    let savedData= await authorModel.create(data)
    res.send({msg: savedData})
}
// ========================getBooksbyChetanBhagat==============================================


const getBooksbyChetanBhagat = async function (req,res){
    let data = await authorModel.find({author_name:"Chetan Bhagat"}).select("author_id")
    let bookData = await bookModel.find({author_id:data[0].author_id})
    res.send({msg:bookData})
}
// ==========================authorOfBook==================================================

const authorOfBook=async function(req,res){
    let data=await bookModel.findOneAndUpdate({name:"Two states"},{$set:{price:100}},{new:true})
     let authorname1=await authorModel.find({author_id:data.author_id}).select({author_Name:1, _id:0})
     let price=data.price
     res.send({msg:authorname1,price})
} 

// ==========================================================================

const bookebetween50_100 =async function(req,res){
    let data=await bookModel.find({price : { $gte: 50}  ,  price: {$lte: 100}}).select({author_id:1, _id:0})
    const demo = data.map(inp => inp.author_id)
    let temp = []

    for(let i = 0; i < demo.length; i++){
        let x = demo[i]
        const author = await authorModel.find({author_id:x}).select({author_Name:1,author_id:1, _id:0})
        temp.push(author)

    }
   
    const author_Name = temp.flat()
    res.send({msg:author_Name})
}


module.exports.createbook= createbook
module.exports.createauthor= createauthor
module.exports.getBooksbyChetanBhagat= getBooksbyChetanBhagat
module.exports.authorOfBook= authorOfBook
module.exports.bookebetween50_100= bookebetween50_100



