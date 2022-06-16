const jwt = require("jsonwebtoken");
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const mid = async function (req, res, next) {

try{  

let token = req.headers["x-Auth-token"];
if (!token) token = req.headers["x-auth-token"];


if (!token) return res.status(401).send({ status: false, msg: "token must be present" });
// 401 - lacks valid authentication

console.log(token);


let decodedToken = jwt.verify(token, "functionup-radon");
if (!decodedToken)
  return res.status(401).send({ status: false, msg: "token is invalid" });
  // 401 - lacks valid authentication


} catch (err) {
  console.log("This is the error :", err.message)
  res.status(500).send({ msg: "Error", error: err.message })
}
  // 500 - SERVER ERROR

next()
}  

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const Authorise = async function (req, res, next) {

try{

  let token = req.headers["x-auth-token"]
  if(!token) return res.send({status: false, msg: "token must be present in the request header"})

  let decodedToken = jwt.verify(token, 'functionup-radon')
  if(!decodedToken) return res.status(401).send({status: false, msg:"token is not valid"})
  // 401 - lacks valid authentication
  
  //userId for which the request is made. In this case message to be posted.
  let userToBeModified = req.params.userId
  //userId for the logged-in user
  let userLoggedIn = decodedToken.userId

  //userId comparision to check if the logged-in user is requesting for their own data
  if(userToBeModified != userLoggedIn) return res.status(403).send({status: false, msg: 'User logged is not allowed to modify the requested users data'})

// 403 - Forbidden

} catch (err) {
  console.log("This is the error :", err.message)
  res.status(500).send({ msg: "Error", error: err.message })
}
  // 500 - SERVER ERROR

next();

}


module.exports.mid = mid;
module.exports.Authorise = Authorise;