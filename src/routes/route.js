const express = require('express');
const router = express.Router();
 
let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
       },
   ]
 
   router.post('/players', function (req, res) {
       let demo = req.body;
       let isSame = false;
       players.forEach(players =>{
           if (players.name == demo.name){
               isSame =true;
           }
       });
       if (!isSame){
           players.push(demo);
       }
       
       console.log(demo);
 
       //LOGIC WILL COME HERE
       res.send(  { demo: players , status: true }  )
   })
  
module.exports = router;