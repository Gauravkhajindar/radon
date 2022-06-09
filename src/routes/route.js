const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
// const bookController= require("../controllers/bookController")



router.post("/createAuthor", authorController.createAuthor  )

router.post("/createPublisher", authorController.createPublisher  )

router.post("/createBook", authorController.createBook  )

// router.get("/getBooksData", bookController.getBooksData)

router.get("/BooksWithDetails", authorController.BooksWithDetails)

router.put("/Upadatekey", authorController.Upadatekey)

router.put("/Upadateprice", authorController.Upadateprice)

module.exports = router;

