CREATE SCHEMA baseDatosPerfumes;

USE baseDatosPerfumes;

CREATE TABLE usuarios (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(50) NOT NULL,
    usuario VARCHAR(50) NOT NULL,
    contrasenia VARCHAR(100) NOT NULL,
    fechaNacimiento DATE,
    dni INT UNSIGNED NOT NULL,
    imagenPerfil VARCHAR(250),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE productos (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    descripcion VARCHAR(100),
    imagen VARCHAR(250),
    idUsuario INT UNSIGNED NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (idUsuario) REFERENCES usuarios(id)
);

CREATE TABLE comentarios(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    idProducto INT UNSIGNED NOT NULL,
    idUsuario INT UNSIGNED NOT NULL,
    textoComentario VARCHAR(100) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (idProducto) REFERENCES productos(id),
    FOREIGN KEY (idUsuario) REFERENCES usuarios(id)
    );

INSERT INTO usuarios (email, usuario, contrasenia, fechaNacimiento, dni, imagenPerfil)
VALUES ("camila@gmail.com", " Camila Homs", "cami123", "1996-01-02", 22777335, "/images/users/Cami.png");
INSERT INTO usuarios (email, usuario, contrasenia, fechaNacimiento, dni, imagenPerfil)
VALUES ("china@gmail.com", "China", "china123", "1992-03-09", 27888999, "/images/users/China.png");

INSERT INTO usuarios (email, usuario, contrasenia, fechaNacimiento, dni, imagenPerfil)
VALUES ("emilia@gmail.com", "Emilia", "emilia123", "1996-10-29", 28444111, "/images/users/Emilia.png");

INSERT INTO usuarios (email, usuario, contrasenia, fechaNacimiento, dni, imagenPerfil)
VALUES ("lali@gmail.com", "Lali", "lali123", "1991-10-10", 26123456, "/images/users/Lali.png");

INSERT INTO usuarios (email, usuario, contrasenia, fechaNacimiento, dni, imagenPerfil)
VALUES ("tini@gmail.com", "Tini", "tini123", "1997-03-21", 27666777, "/images/users/Tini.png");

INSERT INTO productos (nombre, descripcion, imagen, idUsuario)
VALUES (
  'CACHAREL AMOR AMOR',
  'Descripcion: Aroma suave y duradero',
  '/images/products/AmorAmor.jpeg',
  1
);

INSERT INTO productos (nombre, descripcion, imagen, idUsuario)
VALUES (
  'CALVIN KLEIN ONE',
  'Descripcion: Ideal para todos los dias',
  '/images/products/CalvinKlein-One.webp',
  2
);

INSERT INTO productos (nombre, descripcion, imagen, idUsuario)
VALUES (
  'CAROLINA HERRERA 212 VIP ROSE',
  'Descripcion: Inteso y sofistifado',
  '/images/products/CH-Rose.jpg',
  3
);

INSERT INTO productos (nombre, descripcion, imagen, idUsuario)
VALUES (
  'CHANEL CHANCE',
  'Descripcion: Aroma frutal, dulce y equilibrado',
  '/images/products/Chance-Chanel.webp',
  4
);

INSERT INTO productos (nombre, descripcion, imagen, idUsuario)
VALUES (
  'MARC JACOBS DAISY EAU SO FRESH',
  'Descripcion: Aroma ligero y encantador',
  '/images/products/Daisy-MJ.webp',
  4
);

INSERT INTO productos (nombre, descripcion, imagen, idUsuario)
VALUES (
  'PACO RABANNE FAME',
  'Descripcion: Aroma elegante y moderno',
  '/images/products/Fame-PacoRabanne.webp',
  1
);

INSERT INTO productos (nombre, descripcion, imagen, idUsuario)
VALUES (
  'CAROLINA HERRERA VERY GOOD GIRL',
  'Descripcion: Sofisticacion embotellada',
  '/images/products/GoodGirl.jpg',
  2
);

INSERT INTO productos (nombre, descripcion, imagen, idUsuario)
VALUES (
  'MISS DIOR',
  'Descripcion: Aroma con estilo y personalidad',
  '/images/products/MissDior.jpg', 
  3
);

INSERT INTO productos (nombre, descripcion, imagen, idUsuario)
VALUES (
  'PACO RABANNE OLYMPEA',
  'Descripcion: Elegancia que perdura',
  '/images/products/Olympea-PacoRabanne.webp',
  4
);

INSERT INTO productos (nombre, descripcion, imagen, idUsuario)
VALUES (
  'YSL LIBRE',
  'Descripcion: Un clasico moderno y atemporal',
  '/images/products/YSL-Libre.webp',
  5
);



INSERT INTO comentarios (idProducto, idUsuario, textoComentario)
VALUES
(2, 1, 'Aroma delicado pero duradero. Me encanta.'),
(2, 2, 'Tiene ese no sé qué que lo hace único.'),
(2, 3, 'Me hace sentir segura y femenina. Lo amo.');

INSERT INTO comentarios (idProducto, idUsuario, textoComentario)
VALUES
(3, 2, 'Ideal para regalar. Fue un acierto total.'),
(3, 3, 'Tiene un aroma limpio y elegante, ideal para todos los días.'),
(3, 4, 'Me hace sentir segura y femenina. Lo amo.');

INSERT INTO comentarios (idProducto, idUsuario, textoComentario)
VALUES
(4, 3, 'Tiene un aroma limpio y elegante, ideal para todos los días.'),
(4, 4, 'Me hace sentir segura y femenina. Lo amo.'),
(4, 5, 'Aroma delicado pero duradero. Me encanta.');

INSERT INTO comentarios (idProducto, idUsuario, textoComentario)
VALUES
(5, 4, 'Tiene ese no sé qué que lo hace único.'),
(5, 5, 'Aroma delicado pero duradero. Me encanta.'),
(5, 1, 'No pensé que me iba a durar tanto en la piel');

INSERT INTO comentarios (idProducto, idUsuario, textoComentario)
VALUES
(6, 5, 'Es el único perfume que uso desde hace años. Nunca falla.'),
(6, 1, 'Me lo elogiaron tres veces el primer día que lo usé.'),
(6, 2, 'Huele a elegancia, definitivamente lo volvería a comprar.');

INSERT INTO comentarios (idProducto, idUsuario, textoComentario)
VALUES
(7, 1, 'Tiene un aroma limpio y elegante, ideal para todos los días.'),
(7, 2, 'Me hace sentir segura y femenina. Lo amo.'),
(7, 3, 'Aroma delicado pero duradero. Me encanta.');

INSERT INTO comentarios (idProducto, idUsuario, textoComentario)
VALUES
(8, 2, 'Aroma delicado pero duradero. Me encanta.'),
(8, 3, 'Tiene ese no sé qué que lo hace único.'),
(8, 4, 'Me hace sentir segura y femenina. Lo amo.');

INSERT INTO comentarios (idProducto, idUsuario, textoComentario)
VALUES
(9, 3, 'Ideal para regalar. Fue un acierto total.'),
(9, 4, 'Tiene un aroma limpio y elegante, ideal para todos los días.'),
(9, 5, 'Me hace sentir segura y femenina. Lo amo.');

INSERT INTO comentarios (idProducto, idUsuario, textoComentario)
VALUES
(10, 4, 'Es el único perfume que uso desde hace años. Nunca falla.'),
(10, 5, 'Me lo elogiaron tres veces el primer día que lo usé.'),
(10, 5, 'Huele a elegancia, definitivamente lo volvería a comprar.');


    