
//const db = require("../db/dbproducts")
const db = require("../database/models");
let bcrypt = require("bcryptjs")
let op = db.Sequelize.Op

const usersController = {

  registroMostrar: function (req, res) {
    res.render("register")
  },

  registroProcesar: function (req, res) { 
    //res.send(req.body)
    
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
    res.render("login");
  },

  loginNuevo: function (req, res) {
    db.User.findOne({
      where: {
        email: req.body.email //nombre input y tabla
      }
    })     
    .then(function (data) {
      res.send(data)
        if (data) { //si existe el usuario: usas el metodo de compare syinc, deshashea uno y los compara.si es correcta
          if (bcrypt.compareSyinc(req.body.pass, data.password)) { //si todo da bien lo manda al index o a profile?
            req.session.usuarioLogueado = data
            if(req.body.recordarme){
              res.cookie("userId", data.id, {maxAge: 1000 * 60 * 5})
            }

            res.redirect("users/profile/"+ data.id)
          } else {
            res.send("contraseña incorrecta")
          }


        } else {
          res.send("no existe una cuenta con ese mail"),
            res.redirect("users/register")
        }
      })
  },

  profile: function (req, res) {

    res.render("profile", { usuario: db.usuario, productos: db.productos })
  },




}




module.exports = usersController