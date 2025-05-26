module.exports = function (sequelize, dataTypes) {

    let alias = "Comentario";

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },

        idProducto: {
            type: dataTypes.INTEGER
        },

        idUsuario: {
            type: dataTypes.INTEGER
        },

        textoComentario: {
            type: dataTypes.STRING
        },
    };

    let config = {
        tableName: 'comentarios',
        timestamps: true,
        underscored: false
    };

    const Comentario = sequelize.define(alias, cols, config);




    //relacion de uno a muchos, un comentario tiene un usuario.

    Comentario.associate = function (models) {
        Comentario.belongsTo(models.Usuario, {
            foreignKey: 'idUsuario'
        });
        Comentario.belongsTo(models.Producto, {
            foreignKey: 'idProducto'
        });


    }

    //un comentario pertenece a un producto//



    return Comentario;

}