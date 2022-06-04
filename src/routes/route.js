const express = require('express');

const lodash = require('lodash');

const router = express.Router();

router.get('/hello', function (req, res) {
    // ====================================1==========================================
    let month = ["january", "february", "march","april","may","june","july","august","september","ocober","november","december"]
    const result = lodash.chunk(month, [size=4]);
    console.log(result);
    // =====================================2==========================================
    let number = [1, 3, 5, 7 , 9, 11 , 13, 15, 17, 19]
    const result2 = lodash.tail(number)
    console.log(result2);

    // =====================================3=======================================
    const demo =   [25,4,5,6,7,8]
    const demo1 =    [43,56,7,23,4]
    const demo2 =    [65,23,8,12,56]
    const demo3 =    [90,75,34,29,43]
    const demo4 =    [13,29,65,97,36]
        
    const result3 =lodash.union(demo,demo1,demo2,demo3.demo4)
    console.log(result3);
    // =======================================4============================================
    
    const Arr = ([["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]])

    const result4 =lodash.fromPairs(Arr)
    console.log(result4)
    
    // externalModule.log()
    res.send('this is gaurav khajindar api')
});


module.exports = router;
// adding this comment for no reason