const data = require("../db/dbproducts")
const db = require("../database/models");
let op = db.Sequelize.Op


const indexController = {
  index: function (req, res) {
    //res.render('index', {listaProductos:data.productos});//


    db.productos.findAll()
      .then(function (data) {
        res.render("index", { data: data })
      })


  },

  resultadoBusqueda: function (req, res) {
    /*const producto = data.productos[0]
    res.render('search-results', {data:producto} );*/

    let buscador = req.query.search
    db.Producto.findAll({
      where: {
        nombre: { [op.like]: "%" + busqueda + "%" },
      },

    })
      .then(function (data) {
        res.send(data)
        res.send("search-results", { data: data })
      })
  }
}


module.exports = indexController