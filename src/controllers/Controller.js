const UserModel= require("../models/userModel")
const ProductModel= require("../models/productModel")
const orderModel = require('../models/orderModel');

// ==============================createProduct==================================================
const createProduct= async function (req, res) {
    let Product = req.body
    if(!Product.price) return res.send({msg: "Price is manditory."})
    let ProductCreated = await ProductModel.create(Product)
    res.send({data: ProductCreated})
}
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>createUser>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const createUser= async function (req, res) {

    let user = req.body
    let UserCreated = await UserModel.create(user)
    res.send({data: UserCreated})
   
}
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>createOrder1>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const createOrder1 = async function(req, res){

    let data = req.body;

    let userId = await UserModel.findById(req.body.userId);
    let productId = await ProductModel.findById(req.body.productId);
    let savedData
  
    if(!data.userId){
      res.send({msg: "User id is manditory."});
    }
    else if(!userId){
      res.send({msg: "Invalid User ID."});
    }
    else if(!data.productId){
      res.send({msg: "Product id is manditory."})
    }
    else if(!productId){
      res.send({msg:  "Invalid Product ID."});
    }
    else{
      savedData = await orderModel.create(data);
  
      if(req.headers['isFreeAppUser']){
        await orderModel.updateOne({ userId: data.userId }, { $set: { amount: 0 } }, { new: true })
      }
      else{
        let productPrice = productId.price;
        if(userId.balance >= productPrice){
          await UserModel.updateOne({ _id: data.userId }, { $inc: { balance: -productPrice } }, { new: true });
          await orderModel.updateOne({ _id: savedData._id }, { $set: { amount: productPrice } }, { new: true });
          res.send({msg: savedData});
        }
        else{
          res.send({ msg: "The user doesn't have enough balance." });
        }
      }
    }
}
  

  

module.exports.createProduct= createProduct
module.exports.createUser= createUser
module.exports.createOrder1 = createOrder1;
