const express = require('express');
const router = express.Router();


const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})



router.post("/createbook", BookController.createbook  )

router.post("/createauthor", BookController.createauthor  )

router.get("/getBooksbyChetanBhagat", BookController.getBooksbyChetanBhagat)

router.get("/authorOfBook", BookController.authorOfBook)

// router.get("/bookebetween50_100", BookController.bookebetween50_100)

router.get("/bookebetween50_100", BookController.bookebetween50_100)
module.exports = router;