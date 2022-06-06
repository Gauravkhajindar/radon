const UserModel= require("../models/userModel")

const createNewBook= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getAllBook= async function (req, res) {
    let allbooks= await UserModel.find()
    res.send({msg: allbooks})
}

module.exports.createNewBook= createNewBook
module.exports.getAllBook= getAllBook