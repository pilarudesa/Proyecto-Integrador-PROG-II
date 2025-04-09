
/*mostrar un producto al azar, siempre el mismo*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('search-results');
  
});

module.exports = router;