module.exports = function (sequelize, dataTypes) {

    let alias = "Producto";

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },

        nombre: {
            type: dataTypes.STRING
        },

        descripcion: {
            type: dataTypes.STRING
        },

        imagen: {
            type: dataTypes.STRING
        },

        idUsuario: {
            type: dataTypes.INTEGER
        },
    };

    let config = {
        tableName: 'productos',
        timestamps: true,
        underscored: false
    };

    const Producto = sequelize.define(alias, cols, config);



    // un producto tiene un usuario//
    Producto.associate = function (models) {
        Producto.belongsTo(models.Usuario, {
            as: "usuario",
            foreignKey: 'idUsuario'
        });
        Producto.hasMany(models.Comentario, {
            as: "comentarios",
            foreignKey: "idProducto"
        })

    }


    //un producto tiene muchso comentarios



    return Producto;
}