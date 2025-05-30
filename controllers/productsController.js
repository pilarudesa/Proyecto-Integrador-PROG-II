const db = require("../database/models")
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
                res.render("product", { data: data, id: req.params.id })
            });
    },


    aregarComentario: function (req, res) {  //no se si esta bine que este aca esto
        /*aca procesa el formulario*/
        if (!req.session.usuariologuedo) {
            return res.redirect("/users/login");
        }

        let nuevoComentario = {
            textoComentario: req.body.texto,
            idProducto: req.body.pk_producto,
            idUsuario: req.body.pk_usuario,

        };

        db.Comentario.create(nuevoComentario)
            .then(function (data) {
                res.redirect("/products/id/" + req.body.pk_producto);
            })

            .catch(function (error) {
                console.log("Error al guardar comentario:", error)
            })
    },

    formularioAdd: function (req, res) {
        /*aca mostrar formulario*/
        res.render("product-add", { usuario: db.usuario }) //
    },

    procesarFormularioAdd: function (req, res) {
        if (!req.session.usuariologueado) {
            return res.redirect("/users/login");
        }

        let NuevoProducto = {
            nombre : req.body.nombre,
            descripcion : req.body.descripcion,
            imagen: req.body.imagen,
            idUsuario: req.session.usuariologueado
        };

        db.Producto.create(NuevoProducto)

        .then(function (data){
            res.redirect("/")
        })

        .catch(function (error) {
            console.log("error al agregar producto", error);
            
        });

    }

};


module.exports = productsController;
