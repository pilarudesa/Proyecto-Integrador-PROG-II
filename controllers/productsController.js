/*todavia no tenemos base de datos real pero lo dejo armado*/

const products = require("../db/dbproducts")


const productsController = {
    index: function (req , res) {
        /*mostrar todo el catalogo*/
            res.send(products.lista)
        },
        
    detalle: function (req , res) {
        /*mostrar el detalle de un producto, que pidan por id (parametrizada)*/ 
            let id = req.params.id
            let arrayProducts = [];
            for (let i = 0; i < products.lista.length; i++) {
                if (id == products.lista[i].id) {
                    arrayProducts.push(products.lista[i])
                }
            if (arrayProducts == 0) {
                res.send("No se han encontrado productos con ese id")
            } 
            else {
                res.send(arrayProducts);
              }
              
            }
        },

    formularioAdd:function (req , res) {
        /*aca formulario vacio para agregar producto, el formulario no guarda nada*/ 
            res.render("product-add", {})
        },

}


module.exports = productsController