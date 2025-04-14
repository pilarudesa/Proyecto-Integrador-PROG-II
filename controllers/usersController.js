/*requiero el moudlo que todavia no cree*/

const db = require("../db/dbproducts")

const usersController = {
    registro: function (req , res) {
        res.render("register");
      },
    
    login: function (req , res) {
        res.render("login");
      },

    profile: function (req , res) {
  
      res.render("profile", {usuario:db.usuario, productos:db.productos})
    }
      
    
}

module.exports = usersController