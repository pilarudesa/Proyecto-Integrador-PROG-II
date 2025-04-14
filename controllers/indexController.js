const data = require("../db/dbproducts")

const indexController = {
    index: function(req, res) {
        res.render('index', {listaProductos:data.productos});
      },
    
    resultadoBusqueda : function(req, res) {
        const producto = data.productos[0]
        res.render('search-results', {data:producto} );
      
      },
}

module.exports = indexController