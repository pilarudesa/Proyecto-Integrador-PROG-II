
//const db = require("../db/dbproducts")
const db = require("../database/models");
let bcrypt = require("bcryptjs")
let op = db.Sequelize.Op

const usersController = {

  registroMostrar: function (req, res) {
     if(!req.session.usuarioLogueado){
      res.render("register", {error: ""})
    } else{
      res.redirect("/")
    }
    
  },

  registroProcesar: function (req, res) {

    if (!req.body.password.length < 3) {
      return res.render("register", { error: "la contraseña tiene que tener al menos tres caracteres" })
    }
    let usuario = {
      email: req.body.email,
      usuario: req.body.usuario,
      contrasenia: bcrypt.hashSync(req.body.password, 10),
      fechaNacimiento: req.body.fechaNacimiento,
      dni: req.body.documento,
      imagenPerfil: req.body.foto
    }
    
    console.log(usuario);
    
    db.Usuario.create(usuario) //las propiedades tienen que ser el nombre que este en las tablas y el otro el nombre dle modelo
      .then(function (data) {
        console.log(data);
        
        res.redirect("/users/login")

      })
  },

  loginMostrar: function (req, res) {
    if (!req.session.usuarioLogueado) {
      res.render("login", { error: "" });
    } else {
      res.redirect("/")
    }
    
  },

  loginNuevo: function (req, res) {
    
    db.Usuario.findOne({
      where: {
        email: req.body.usuario //nombre input y tabla
      }
    })     
    .then(function (data) {
      
        if (data) { //si existe el usuario: usas el metodo de compare syinc, deshashea uno y los compara.si es correcta
          if (bcrypt.compareSync(req.body.contrasena, data.contrasenia)) { //si todo da bien lo manda al index o a profile?
            req.session.usuarioLogueado = data
            if(req.body.recordarme){
              res.cookie("user", data, {maxAge: 1000 * 60 * 5})
            }
            //console.log("redirijo");
            
            return res.redirect("/")
          } else {
            res.send("contraseña incorrecta")
          }


        } else {
          res.render("login", { error: "no existe una cuenta con ese mail" })

        }
      })
  },

  profile: function (req, res) {
    let id = req.params.id
    db.Usuario.findByPk(
      id, {
         include: [
                {
                    association: "comentarios",
                },
                {
                    association: "productos",
                    include : ["comentarios"]
                }
            ]
      }
    ).then(function (data) {
      //res.send(data)
      res.render("profile", {data:data})
    })
    
  },

  logout: function (req,res) {
    req.session.destroy()
    if (req.cookies.user) {
      res.clearCookie("user")
    }
    res.redirect("/")
  }

}


module.exports = usersController