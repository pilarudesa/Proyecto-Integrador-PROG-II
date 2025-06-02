const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productsController")

router.get("/id/:id", productsController.detalle);

router.get("/add", productsController.mostrarFormulario);
router.post("/add" ,productsController.agregarProducto);

router.post("/id/:id", productsController.agregarComentario) 


//router.get("/edit/:id", productsController.mostrarEditar)
//router.post("/edit/:id", productsController.editar)


module.exports = router

