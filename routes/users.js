const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

/* GET users listing. 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

lo comento pero no nos sirve
*/
router.get("/register", usersController.registro)


router.get("/login", usersController.login)


router.get("/profile", usersController.profile)

module.exports = router;
