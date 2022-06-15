const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middleware= require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

router.get("/getUserData/:userId",middleware.mid,middleware.Authorise, userController.getUserData)

router.put("/updateUser/:userId",middleware.mid,middleware.Authorise, userController.updateUser)

router.post("/postMessage/:userId/posts",middleware.mid,middleware.Authorise, userController.postMessage)

router.delete("/Deleteuser/:userId",middleware.mid,middleware.Authorise, userController.Deleteuser)

module.exports = router;