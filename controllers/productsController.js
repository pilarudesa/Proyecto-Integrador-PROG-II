const db = require("../database/models");
const op = db.sequelize.Op

const productsController = {
    /*ahora todo tiene que venir de la base de datos de mysql*/

    detalle: function (req, res) {
        let id = req.params.id;
        db.Producto.findOne({
            where: { id: id },
            include: [
                {
                    association: "comentarios",
                    include: ["usuario"]
                },
                {
                    association: "usuario"
                }
            ]

        })
            .then(function (data) {
                //res.send(data)
                res.render("product", { data: data })
            });


    },

    agregarComentario: function (req, res) {  //no se si esta bine que este aca esto
        /*aca procesa el formulario*/
        //res.send(req.body)
        let logueado = req.session.usuarioLogueado
        if (!logueado) {
            return res.redirect('/users/login')
        }

        db.Comentario.create({
            textoComentario: req.body.texto,
            idProducto: req.params.id,
            idUsuario: req.session.usuarioLogueado.id

        })
            .then(function () {
                res.redirect("/products/id/" + req.params.id);

            })

            
    },

    mostrarFormulario: function (req, res) {
        /*aca mostrar formulario*/
        if(req.session.usuarioLogueado){
            res.render("product-add", { usuario: db.usuario })
        }else{
            res.redirect("/users/login")
        }
    },

    agregarProducto: function (req, res) {

        let NuevoProducto = {
            nombre : req.body.nombre,
            descripcion : req.body.descripcion,
            imagen: req.body.imagen,
            idUsuario: req.session.usuarioLogueado.id
        };

        db.Producto.create(NuevoProducto)

        .then(function (){
            res.redirect("/users/profile/ "+ req.session.usuarioLogueado.id)
        })

        .catch(function (error) {
            console.log("Error al agregar producto", error);
            
        });

    }
    //

};


module.exports = productsController;
