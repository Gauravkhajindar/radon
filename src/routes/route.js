const express = require('express');
const demo = require('../logger/logger')
const demo1 = require('../util/helper')
const demo2 = require('../validator/formatter')


const router = express.Router();

router.get('/test-me', function (req, res) {
    demo.welcome()
    demo1.printDate()
    demo1.getBatchInfo()
    demo1.printMonth()
    console.log(demo2.case1)
    console.log(demo2.case2)
    console.log(demo2.case3)
    res.send('This My first api!')
});


    




module.exports = router;
// adding this comment for no reason


