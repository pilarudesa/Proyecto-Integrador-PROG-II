
const db = require("../db/dbproducts")


const productsController = {
    
        
    detalle: function (req , res) {
        
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