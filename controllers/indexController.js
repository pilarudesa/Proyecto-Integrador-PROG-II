
const indexController = {
    index: function(req, res, next) {
        res.render('index');
      },
    
    resultadoBusqueda : function(req, res, next) {
        res.render('search-results');
      
      },
}

module.exports = indexController