const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productsController")



router.get("/id/:id", productsController.detalle);

router.get("/add", productsController.mostrarFormulario)
router.post("/add" ,productsController.agregarProducto)

router.post("/id/:id", productsController.agregarComentario) 


module.exports = router

