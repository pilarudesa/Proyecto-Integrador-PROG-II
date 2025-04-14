
const db = require("../db/dbproducts")


const productsController = {
    index: function (req , res) {
        /*mostrar todo el catalogo*/
            res.send(products.lista)
        },
        
    detalle: function (req , res) {
        /*mostrar el detalle de un producto, que pidan por id (parametrizada)*/ 
            /*let id = req.params.id
            let arrayProducts = [];
            for (let i = 0; i < products.productos.length; i++) {
                if (id == products.productos[i].id) {
                    arrayProducts.push(products.productos[i])
                }
            if (arrayProducts == 0) {
                res.status(404).send("No se ha encontrado ningun producto con ese id")
            } 
            else {
                res.render("product",{data: arrayProducts[0]});
              }
              
            }
        },*/

        let id = req.params.id;
        for (let idx = 0; idx < db.productos.length; idx++) {
          if (id == db.productos[idx].id) {
            res.render("product", { data: db.productos[idx] });
            break;
          }
        }
    
        // Caso que no haya nada, redirigir a 404
        res.status(404).send("No se ha encontrado el producto con ese id");
      },

    formularioAdd:function (req , res) {
        /*aca formulario vacio para agregar producto, el formulario no guarda nada*/ 
            res.render("product-add", {usuario: db.usuario})
        },

}


module.exports = productsController