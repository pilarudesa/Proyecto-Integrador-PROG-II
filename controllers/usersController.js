/*requiero el moudlo que todavia no cree*/

const data = require("../db/data")

const usersController = {
    registro: function (req , res) {
        res.render("register");
      },
    
    login: function (req , res) {
        res.render("login");
      },

    profile: function (req , res) {
  
      res.render("profile", {usuario:data.usuario})
    }
      
    
}

module.exports = usersController