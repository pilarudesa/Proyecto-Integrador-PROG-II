const express = require("express");
const router = express.Router();
const products = require("../db/dbproducts")
const productsController = require("../controllers/productsController")



router.get("/id/:id", productsController.detalle);

router.get("/add", productsController.formularioAdd)

module.exports = router

