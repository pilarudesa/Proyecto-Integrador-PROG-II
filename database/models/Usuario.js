module.exports = function (sequelize, dataTypes) {

    let alias = "Usuario";

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },


        email: {
            type: dataTypes.STRING
        },

        usuario:{
            type: dataTypes.STRING
        },


        contrasenia: {
            type: dataTypes.STRING
        },

        fechaNacimiento: {
            type: dataTypes.DATE
        },

        dni: {
            type: dataTypes.INTEGER
        },

        imagenPerfil: {
            type: dataTypes.STRING
        }
    };

    let config = {
        tableName: 'usuarios',
        timestamps: true,
        underscored: false
    };

    const Usuario = sequelize.define(alias, cols, config);


    /*usuario tiene muchos productos, un producto pertenece a un usuario. 
        Uno a muchos (1:N)
        foreign key:  En la tabla productos, con la columna idUsuario
    
    */
    Usuario.associate = function (models) {
        Usuario.hasMany(models.Producto, {
            as: "productos",
            foreignKey: 'idUsuario'
        })
        Usuario.hasMany(models.Comentario, {
            as: "comentarios",
            foreignKey: "idUsuario"


        });
    }


    // un usuario tiene muchos comentarios, un comentario pertenece a un usuario


    return Usuario;
}
