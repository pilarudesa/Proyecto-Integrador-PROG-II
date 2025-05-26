const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");


router.get("/register", usersController.registroMostrar)
router.post("/register", usersController.registroProcesar)

router.get("/login", usersController.loginMostrar) //lo cambie a post, tengo que ahrehar mas rutas?
//router.post()


router.get("/profile", usersController.profile)

//router.post("logout")

module.exports = router;
