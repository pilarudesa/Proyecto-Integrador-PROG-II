const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productsController")



router.get("/id/:id", productsController.detalle);

router.get("/add", productsController.formularioAdd)
router.get("/add" ,productsController.procesarFormularioAdd)

router.post("/id/:id", productsController.agregarComentario) //no se si esta mal que la ruta sea esa, no deberia ser la dle id


module.exports = router

