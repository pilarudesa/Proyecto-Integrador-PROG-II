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


router.get("/profile", function (req , res) {
  /*todavia no tenemos la base de datos*/
  const usuario = {
    nombre: "Martina Goyanes",
    email: "martina@email.com",
    foto: "/images/foto-perfil.jpg"
  };
  res.render("profile", {usuario})
})

module.exports = router;
