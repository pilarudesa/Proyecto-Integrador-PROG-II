
//const db = require("../db/dbproducts") //
const db = require("../database/models")
const op = db.sequelize.Op

const productsController = {
  /*ahora todo tiene que venir de la base de datos de mysql*/

  detalle: function (req, res) {

    let id = req.params.id
    db.Producto.findOne({
      where: { id: id },
      include: [
        {
          association: "comentarios",
          include: ["usuario"]
        },
        {
          association: "usuario"
        }
      ]

    })
      .then(function (data) {
        //res.send(data)
        res.render("product", { data: data, id: req.params.id })
      })
  },

  formularioAdd: function (req, res) {
    /*aca formulario vacio para agregar producto, ahora si tiene que guardar algo*/
    res.render("product-add", { usuario: db.usuario })
  },

  procesasrFormularioAdd: function (req, res) {

  }

}


module.exports = productsController