const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");


router.get("/register", usersController.registroMostrar)
router.post("/register", usersController.registroProcesar)

router.get("/login", usersController.loginMostrar) 
router.post("/login", usersController.loginNuevo)


router.get("/profile/:id", usersController.profile)

router.post("/logout", usersController.logout )

module.exports = router;
