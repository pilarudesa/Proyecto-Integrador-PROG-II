/* base de datos inventada, no hace falta requerir express aca, es un modulo (obj lit)*/

const products = {
    lista: [
      {
        id: 1,
        nombre: "Zapatillas Urbanas",
        descripcion: "Zapatillas cómodas para uso diario.",
        imagen: "/images/zapatillas.jpg",
        comentarios: ["Muy cómodas", "Me gustaron mucho"]
      },
      {
        id: 2,
        nombre: "Mochila Compacta",
        descripcion: "Ideal para llevar lo esencial.",
        imagen: "/images/mochila.jpg",
        comentarios: ["Buena calidad", "La uso todos los días"]
      }
    ]
  };

module.exports = products;

