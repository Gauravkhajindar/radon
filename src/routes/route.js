const express = require('express');
const router = express.Router();

const Controller= require("../controllers/Controller")

const commonMW = require ("../middlewares/commonMiddlewares")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createProduct", Controller.createProduct  )

router.post("/createUser",commonMW.mid1, Controller.createUser  )

router.post("/createOrder1", Controller.createOrder1  )


module.exports = router;