const express = require('express');

const underscore = require('underscore')

const router = express.Router();

let array = ['Rang de basanti', 'The shining', 'kuch kuch hota hai', 'shadi me jarur ana', 'bajirao mastani'];
// =================================1=================================================
router.get('/movies', function (req, res) {
    res.send(array);
});
// =================================2=================================================
router.get("/movies/:index", (req, res) => {
  let index = req.params['index'];
  
  if(index>4){
    res.send('ERROR! Please Provide a Valid Index Number.');
  }
  else{
    res.send(array[index]);
  } 
})
// ==================================3================================================
router.get('/films', (req, res) => {
  result = underscore.map(array, function(value, index){
    return {"id": index+1, "name": value};
 });
 res.send(result);
})
// ==================================4================================================
router.get('/films/:filmId', (req, res) => {
  let filmId = req.params['filmId'];
 
  if(filmId>5){
    res.send('ERROR! No movie exists with this id');
  }
  else{
    res.send({
      "id": filmId,
      "name": array[filmId-1]
    });
  }
})

module.exports = router;
// adding this comment for no reason