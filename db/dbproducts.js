/* base de datos inventada, no hace falta requerir express aca, es un modulo (obj lit)*/

const data = {
    users: [
      {
        id: 1,
        nombre: "Camila",
        apellido: "Homs",
        email: "camila@gmail.com",
        contrasenia: "cami123",
        fechaNacimiento: "1996-01-02",
        imagenPerfil: "/images/users/Cami.png"
      },
      {
        id: 2,
        nombre: "China",
        apellido: "Suarez",
        email: "china@gmail.com",
        contrasenia: "china123",
        fechaNacimiento: "1992-03-09",
        imagenPerfil: "/images/users/China.png",
      },
      {
        id: 3,
        nombre: "Emilia",
        apellido: "Mernes",
        email: "emilia@gmail.com",
        contrasenia: "emilia123",
        fechaNacimiento: "1996-10-29",
        imagenPerfil: "/images/users/Emilia.png",
      },
      {
        id: 4,
        nombre: "Lali",
        apellido: "Esposito",
        email: "lali@gmail.com",
        contrasenia: "lali123",
        fechaNacimiento: "1991-10-10",
        imagenPerfil: "/images/users/Lali.png",
      },
      {
        id: 5,
        nombre: "Nicki",
        apellido: "Nicole",
        email: "nicki@gmail.com",
        contrasenia: "nicki123",
        fechaNacimiento: "2000-08-25",
        imagenPerfil: "/images/users/Nicki.png",
      },
      {
        id: 6,
        nombre: "Pampita",
        apellido: "Ardohain",
        email: "pampita@gmail.com",
        contrasenia: "pampita123",
        fechaNacimiento: "1978-01-17",
        imagenPerfil: "/images/users/Pampita.png",
      },
      {
        id: 7,
        nombre: "Tini",
        apellido: "Stoessel",
        email: "tini@gmail.com",
        contrasenia: "tini123",
        fechaNacimiento: "1997-03-21",
        imagenPerfil: "/images/users/Tini.png",
      },
      {
        id: 8,
        nombre: "Tuli",
        apellido: "Acosta",
        email: "tuli@gmail.com",
        contrasenia: "tuli123",
        fechaNacimiento: "2001-06-20",
        imagenPerfil: "/images/users/Tuli.png",
      },
      {
        id: 9,
        nombre: "Valentina",
        apellido: "Zenere",
        email: "valentina@gmail.com",
        contrasenia: "valen123",
        fechaNacimiento: "1997-01-15",
        imagenPerfil: "/images/users/Valen.png",
      },
      {
        id: 10,
        nombre: "Zaira",
        apellido: "Nara",
        email: "zaira@gmail.com",
        contrasenia: "zaira123",
        fechaNacimiento: "1998-08-15",
        imagenPerfil: "/images/users/Zaira.png",
      }


    ],
    productos: [
      {
        id: 1,
        nombre: "CACHAREL AMOR AMOR",
        descripcion: "Aroma suave y duradero",
        imagen: "/images/products/AmorAmor.jpeg",
        comentarios: [
          {
            nombreUsuario: "Camila Homs",
            textoComentario: "Es el único perfume que uso desde hace años. Nunca falla.",
            imagenPerfil: "/images/users/Cami.png"
          },
          {
            nombreUsuario: "Zaira Nara",
            textoComentario: "Me lo elogiaron tres veces el primer día que lo usé.",
            imagenPerfil: "/images/users/Zaira.png"
          },
          {
            nombreUsuario: "Pampita",
            textoComentario: "Huele a elegancia, definitivamente lo volvería a comprar.",
            imagenPerfil: "/images/users/Pampita.png"
          },
          {
            nombreUsuario: "Tini Stoessel",
            textoComentario: "No pensé que me iba a durar tanto en la piel",
            imagenPerfil: "/images/users/Tini.png"
          },
          {
            nombreUsuario: "China Suarez",
            textoComentario: "Mi pareja no para de preguntarme qué perfume estoy usando.",
            imagenPerfil: "/images/users/China.png"
          }
        ]
      },
      {
        id: 2,
        nombre: "CALVIN KLEIN ONE",
        descripcion: "Ideal para todos los dias",
        imagen: "/images/products/CalvinKlein-One.webp",
        comentarios: [
          {
            nombreUsuario: "Lali Esposito",
            textoComentario: "Aroma delicado pero duradero. Me encanta.",
            imagenPerfil: "/images/users/Lali.png"
          },
          {
            nombreUsuario: "Tuli Acosta",
            textoComentario: "Tiene ese no sé qué que lo hace único.",
            imagenPerfil: "/images/users/Tuli.png"
          },
          {
            nombreUsuario: "Valentina Zenere",
            textoComentario: "Me hace sentir segura y femenina. Lo amo.",
            imagenPerfil: "/images/users/Valen.png"
          },
          {
            nombreUsuario: "Nicki Nicole",
            textoComentario: "Ideal para regalar. Fue un acierto total.",
            imagenPerfil: "/images/users/Nicki.png"
          },
          {
            nombreUsuario: "Emilia Mernes",
            textoComentario: "Tiene un aroma limpio y elegante, ideal para todos los días.",
            imagenPerfil: "/images/users/Emilia.png"
          }
        ]
      },
      {
        id: 3,
        nombre: "CAROLINA HERRERA 212 VIP ROSE ",
        descripcion: "Inteso y sofistifado",
        imagen: "/images/products/CH-Rose.jpg",
        comentarios: [
          {
            nombreUsuario: "Valentina Zenere",
            textoComentario: "Ideal para regalar. Fue un acierto total.",
            imagenPerfil: "/images/users/Valen.png"
          },
          {
            nombreUsuario: "Nicki Nicole",
            textoComentario: "Tiene un aroma limpio y elegante, ideal para todos los días.",
            imagenPerfil: "/images/users/Nicki.png"
          },
          {
            nombreUsuario: "China Suarez",
            textoComentario: "Me hace sentir segura y femenina. Lo amo.",
            imagenPerfil: "/images/users/China.png"
          },
          {
            nombreUsuario: "Lali Esposito",
            textoComentario: "Tiene ese no sé qué que lo hace único.",
            imagenPerfil: "/images/users/Lali.png"
          },
          {
            nombreUsuario: "Pampita",
            textoComentario: "Mi pareja no para de preguntarme qué perfume estoy usando.",
            imagenPerfil: "/images/users/Pampita.png"
          }
        ]
      },
      {
        id: 4,
        nombre: "CHANEL CHANCE",
        descripcion: "Aroma frutal, dulce y equilibrado",
        imagen: "/images/products/Chance-Chanel.webp",
        comentarios: [
          {
            nombreUsuario: "Camila Homs",
            textoComentario: "Tiene un aroma limpio y elegante, ideal para todos los días.",
            imagenPerfil: "/images/users/Cami.png"
          },
          {
            nombreUsuario: "Zaira Nara",
            textoComentario: "Me hace sentir segura y femenina. Lo amo.",
            imagenPerfil: "/images/users/Zaira.png"
          },
          {
            nombreUsuario: "Nicki Nicole",
            textoComentario: "Aroma delicado pero duradero. Me encanta.",
            imagenPerfil: "/images/users/Nicki.png"
          },
          {
            nombreUsuario: "Tini Stoessel",
            textoComentario: "No pensé que me iba a durar tanto en la piel",
            imagenPerfil: "/images/users/Tini.png"
          },
          {
            nombreUsuario: "Pampita",
            textoComentario: "Huele a elegancia, definitivamente lo volvería a comprar.",
            imagenPerfil: "/images/users/Pampita.png"
          },
        ]
      },
      {
        id: 5,
        nombre: "MARC JACOBS DAISY EAU SO FRESH",
        descripcion: "Aroma ligero y encantador",
        imagen: "/images/products/Daisy-MJ.webp",
        comentarios: [
          {
            nombreUsuario: "China Suarez",
            textoComentario: "Tiene ese no sé qué que lo hace único.",
            imagenPerfil: "/images/users/China.png"
          },
          {
            nombreUsuario: "Emilia Mernes",
            textoComentario: "Aroma delicado pero duradero. Me encanta.",
            imagenPerfil: "/images/users/Emilia.png"
          },
          {
            nombreUsuario: "Zaira Nara",
            textoComentario: "No pensé que me iba a durar tanto en la piel",
            imagenPerfil: "/images/users/Zaira.png"
          },
          {
            nombreUsuario: "Tuli Acosta",
            textoComentario: "Es el único perfume que uso desde hace años. Nunca falla.",
            imagenPerfil: "/images/users/Tuli.png"
          },
          {
            nombreUsuario: "Nicki Nicole",
            textoComentario: "Mi pareja no para de preguntarme qué perfume estoy usando.",
            imagenPerfil: "/images/users/Nicki.png"
          }
        ]
      },
      {
        id: 6,
        nombre: "PACO RABANNE FAME",
        descripcion: "Aroma elegante y moderno",
        imagen: "/images/products/Fame-PacoRabanne.webp",
        comentarios: [
          {
            nombreUsuario: "Camila Homs",
            textoComentario: "Es el único perfume que uso desde hace años. Nunca falla.",
            imagenPerfil: "/images/users/Cami.png"
          },
          {
            nombreUsuario: "Zaira Nara",
            textoComentario: "Me lo elogiaron tres veces el primer día que lo usé.",
            imagenPerfil: "/images/users/Zaira.png"
          },
          {
            nombreUsuario: "Pampita",
            textoComentario: "Huele a elegancia, definitivamente lo volvería a comprar.",
            imagenPerfil: "/images/users/Pampita.png"
          },
          {
            nombreUsuario: "Tini Stoessel",
            textoComentario: "No pensé que me iba a durar tanto en la piel",
            imagenPerfil: "/images/users/Tini.png"
          },
          {
            nombreUsuario: "China Suarez",
            textoComentario: "Mi pareja no para de preguntarme qué perfume estoy usando.",
            imagenPerfil: "/images/users/China.png"
          }
        ]
      },
      {
        id: 7,
        nombre: "CAROLINA HERRERA VERY GOOD GIRL ",
        descripcion: "Sofisticacion embotellada",
        imagen: "/images/products/GoodGirl.jpg",
        comentarios: [
          {
            nombreUsuario: "Camila Homs",
            textoComentario: "Tiene un aroma limpio y elegante, ideal para todos los días.",
            imagenPerfil: "/images/users/Cami.png"
          },
          {
            nombreUsuario: "Zaira Nara",
            textoComentario: "Me hace sentir segura y femenina. Lo amo.",
            imagenPerfil: "/images/users/Zaira.png"
          },
          {
            nombreUsuario: "Nicki Nicole",
            textoComentario: "Aroma delicado pero duradero. Me encanta.",
            imagenPerfil: "/images/users/Nicki.png"
          },
          {
            nombreUsuario: "Tini Stoessel",
            textoComentario: "No pensé que me iba a durar tanto en la piel",
            imagenPerfil: "/images/users/Tini.png"
          },
          {
            nombreUsuario: "Pampita",
            textoComentario: "Huele a elegancia, definitivamente lo volvería a comprar.",
            imagenPerfil: "/images/users/Pampita.png"
          }
        ]
      },
      {
        id: 8,
        nombre: "MISS DIOR",
        descripcion: "Aroma con estilo y personalidad",
        imagen: "/images/products/MissDior.webp",
        comentarios: [
          {
            nombreUsuario: "Lali Esposito",
            textoComentario: "Aroma delicado pero duradero. Me encanta.",
            imagenPerfil: "/images/users/Lali.png"
          },
          {
            nombreUsuario: "Tuli Acosta",
            textoComentario: "Tiene ese no sé qué que lo hace único.",
            imagenPerfil: "/images/users/Tuli.png"
          },
          {
            nombreUsuario: "Valentina Zenere",
            textoComentario: "Me hace sentir segura y femenina. Lo amo.",
            imagenPerfil: "/images/users/Valen.png"
          },
          {
            nombreUsuario: "Nicki Nicole",
            textoComentario: "Ideal para regalar. Fue un acierto total.",
            imagenPerfil: "/images/users/Nicki.png"
          },
          {
            nombreUsuario: "Emilia Mernes",
            textoComentario: "Tiene un aroma limpio y elegante, ideal para todos los días.",
            imagenPerfil: "/images/users/Emilia.png"
          }
        ]
      },
      {
        id: 9,
        nombre: "PACO RABANNE OLYMPEA",
        descripcion: "Elegancia que perdura",
        imagen: "/images/products/Olympea-PacoRabanne.webp",
        comentarios: [
          {
            nombreUsuario: "Valentina Zenere",
            textoComentario: "Ideal para regalar. Fue un acierto total.",
            imagenPerfil: "/images/users/Valen.png"
          },
          {
            nombreUsuario: "Nicki Nicole",
            textoComentario: "Tiene un aroma limpio y elegante, ideal para todos los días.",
            imagenPerfil: "/images/users/Nicki.png"
          },
          {
            nombreUsuario: "China Suarez",
            textoComentario: "Me hace sentir segura y femenina. Lo amo.",
            imagenPerfil: "/images/users/China.png"
          },
          {
            nombreUsuario: "Lali Esposito",
            textoComentario: "Tiene ese no sé qué que lo hace único.",
            imagenPerfil: "/images/users/Lali.png"
          },
          {
            nombreUsuario: "Pampita",
            textoComentario: "Mi pareja no para de preguntarme qué perfume estoy usando.",
            imagenPerfil: "/images/users/Pampita.png"
          }
        ]
      },
      {
        id: 10,
        nombre: "YSL LIBRE",
        descripcion: "Un clasico moderno y atemporal",
        imagen: "/images/products/YSL-Libre.webp",
        comentarios: [
          {
            nombreUsuario: "Camila Homs",
            textoComentario: "Es el único perfume que uso desde hace años. Nunca falla.",
            imagenPerfil: "/images/users/Cami.png"
          },
          {
            nombreUsuario: "Zaira Nara",
            textoComentario: "Me lo elogiaron tres veces el primer día que lo usé.",
            imagenPerfil: "/images/users/Zaira.png"
          },
          {
            nombreUsuario: "Pampita",
            textoComentario: "Huele a elegancia, definitivamente lo volvería a comprar.",
            imagenPerfil: "/images/users/Pampita.png"
          },
          {
            nombreUsuario: "Tini Stoessel",
            textoComentario: "No pensé que me iba a durar tanto en la piel",
            imagenPerfil: "/images/users/Tini.png"
          },
          {
            nombreUsuario: "China Suarez",
            textoComentario: "Mi pareja no para de preguntarme qué perfume estoy usando.",
            imagenPerfil: "/images/users/China.png"
          }
        ]
      }
    ]
  };

module.exports = data;

