
const db = require("../database/models");
let op = db.Sequelize.Op


const indexController = {
  index: function (req, res) {
    


    db.Producto.findAll({
      include: [{association: "comentarios" },{association: "usuario", }]
    })
      .then(function (data) {
        //res.send(data)
        res.render("index", { listaProductos: data })
      })



  },

  resultadoBusqueda: function (req, res) {
    
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