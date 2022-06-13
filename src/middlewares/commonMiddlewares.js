
const mid1= function ( req, res, next) {
    const newHeader = req.headers.isfreeappuser
    console.log(newHeader)
    if (!newHeader) { res.send({msg:"header is not present"})
    }
    else{
        next()
    }
    
}



module.exports.mid1= mid1

