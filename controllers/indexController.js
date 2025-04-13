const data = require("../db/dbproducts")

const indexController = {
    index: function(req, res) {
        res.render('index', {listaProductos:data.productos});
      },
    
    resultadoBusqueda : function(req, res) {
        res.render('search-results');
      
      },
}

module.exports = indexController