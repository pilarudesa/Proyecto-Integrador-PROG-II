/*requiero el moudlo que todavia no cree*/

const users = require("../db/dbusers")

const usersController = {
    registro: function (req , res) {
        res.render("register");
      },
    
    login: function (req , res) {
        res.render("login");
      },
      
    
}

module.exports = usersController