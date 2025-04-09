const express = require("express");
const router = express.Router();
const products = require("../db/dbproducts")

router.get("/", function (req , res) {
/*mostrar todo el catalogo*/
    res.send(products.lista)
});

router.get("/id/:id", function (req , res) {
/*mostrar el detalle de un producto, que pidan por id (parametrizada)*/ 
    let id = req.params.id
    let arrayProducts = [];
    for (let i = 0; i < products.lista.length; i++) {
        if (id == products.lista[i].id) {
            arrayProducts.push(products.lista[i])
        }
    if (arrayProducts == 0) {
        res.send("no se han encontrado productos con ese id")
    } 
    else {
        res.send(arrayProducts);
      }
      
    }
});

router.get("/add", function (req , res) {
/*aca formulario vacio para agregar producto, y recibir la info del formulario*/ 
    res.render("product-add", {})
});

module.exports = router

