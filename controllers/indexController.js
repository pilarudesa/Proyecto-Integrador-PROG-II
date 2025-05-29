const data = require("../db/dbproducts")
const db = require("../database/models");
let op = db.Sequelize.Op


const indexController = {
  index: function (req, res) {
    res.render('index', {listaProductos:data.productos})


    db.Producto.findAll({
      include: [{association: "comentarios" },{association: "usuario", }]
    })
      .then(function (data) {
        //res.send(data)
        res.render("index", { listaProductos: data })
      })



  },

  resultadoBusqueda: function (req, res) {
    /*const producto = data.productos[0]
    res.render('search-results', {data:producto} );*/

    let busqueda = req.query.search
    db.Producto.findAll({
      where: {
        nombre: { [op.like]: "%" + busqueda + "%" },
      },

    })
      .then(function (resultados) {
        res.render("search-results", {
          productos: resultados,
          termino: busqueda,
        });
      })
  }
}


module.exports = indexController