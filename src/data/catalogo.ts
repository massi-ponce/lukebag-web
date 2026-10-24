// Catálogo de productos.
//
// Para AGREGAR un producto:
//   1. Copia la foto en la carpeta de su categoría, por ejemplo:
//      src/assets/productos/mochilas/mochila-nueva.jpg
//   2. Agrega un bloque { ... } en la lista "productos" de abajo, con
//      foto: 'mochilas/mochila-nueva.jpg'
//
// Para agregar una CATEGORÍA nueva, agrégala en "categorias" y crea su carpeta de fotos.

export interface Categoria {
  slug: string; // aparece en la URL: /catalogo/<slug>
  nombre: string;
  descripcion: string;
  linea: "textil" | "industrial";
}

export interface Producto {
  nombre: string;
  categoria: string; // debe coincidir con el "slug" de una categoría
  descripcion: string;
  foto: string; // ruta dentro de src/assets/productos/
  caracteristicas: string[];
  destacado?: boolean; // si es true, aparece en la página de inicio
}

export const categorias: Categoria[] = [
  {
    slug: "bolsos",
    nombre: "Bolsos",
    descripcion:
      "Deportivos, de viaje y corporativos. Resistentes y con tu marca.",
    linea: "textil",
  },
  {
    slug: "mochilas",
    nombre: "Mochilas",
    descripcion:
      "Ejecutivas, técnicas y de terreno, diseñadas para el uso diario.",
    linea: "textil",
  },
  {
    slug: "maletines",
    nombre: "Maletines",
    descripcion: "Para notebook, documentos y herramientas de trabajo.",
    linea: "textil",
  },
  {
    slug: "estuches",
    nombre: "Estuches",
    descripcion: "Protección a medida para instrumentos, equipos y accesorios.",
    linea: "textil",
  },
  {
    slug: "bananos",
    nombre: "Bananos",
    descripcion: "Prácticos y resistentes, para la ciudad o para faena.",
    linea: "textil",
  },
  {
    slug: "industrial",
    nombre: "Fundas industriales",
    descripcion:
      "Para maquinaria y equipos expuestos a entornos extremos.",
    linea: "industrial",
  },
];

export const productos: Producto[] = [
  // ---------- Bolsos ----------
  {
    nombre: "Bolso deportivo",
    categoria: "bolsos",
    descripcion:
      "Bolso amplio con compartimento para calzado y correa ajustable.",
    foto: "bolsos/bolso-deportivo.webp",
    caracteristicas: [
      "Lona de alta resistencia",
      "Bordado o estampado de logo",
      "Medidas a pedido",
    ],
    destacado: true,
  },
  {
    nombre: "Bolso de viaje",
    categoria: "bolsos",
    descripcion: "Gran capacidad, asas reforzadas y cierre de doble carro.",
    foto: "bolsos/bolso-viaje.webp",
    caracteristicas: [
      "Base impermeable",
      "Asas reforzadas",
      "Colores corporativos",
    ],
  },
  {
    nombre: "Tote corporativo",
    categoria: "bolsos",
    descripcion:
      "Bolso tipo tote ideal para eventos, ferias y regalos de empresa.",
    foto: "bolsos/tote-corporativo.webp",
    caracteristicas: [
      "Ideal para merchandising",
      "Logo a todo color",
      "Producción por volumen",
    ],
  },

  // ---------- Mochilas ----------
  {
    nombre: "Mochila ejecutiva",
    categoria: "mochilas",
    descripcion: "Compartimento acolchado para notebook y organizador interno.",
    foto: "mochilas/mochila-ejecutiva.webp",
    caracteristicas: [
      'Porta notebook hasta 15,6"',
      "Espalda acolchada",
      "Logo bordado",
    ],
    destacado: true,
  },
  {
    nombre: "Mochila de terreno",
    categoria: "mochilas",
    descripcion: "Pensada para faena, minería y trabajo en exterior.",
    foto: "mochilas/mochila-terreno.webp",
    caracteristicas: [
      "Cintas reflectantes",
      "Tela repelente al agua",
      "Costuras reforzadas",
    ],
  },
  {
    nombre: "Mochila escolar personalizada",
    categoria: "mochilas",
    descripcion:
      "Para colegios e instituciones, con insignia y colores propios.",
    foto: "mochilas/mochila-escolar.webp",
    caracteristicas: [
      "Insignia institucional",
      "Tallas a elección",
      "Alta durabilidad",
    ],
  },

  // ---------- Maletines ----------
  {
    nombre: "Maletín porta notebook",
    categoria: "maletines",
    descripcion: "Formato delgado y elegante para el día a día en la oficina.",
    foto: "maletines/maletin-notebook.webp",
    caracteristicas: [
      "Interior acolchado",
      "Correa desmontable",
      "Logo en relieve o bordado",
    ],
    destacado: true,
  },
  {
    nombre: "Maletín de herramientas",
    categoria: "maletines",
    descripcion: "Bolsillos y elásticos distribuidos según tus herramientas.",
    foto: "maletines/maletin-herramientas.webp",
    caracteristicas: [
      "Distribución interior a medida",
      "Base rígida",
      "Tela de alto tráfico",
    ],
  },
  {
    nombre: "Maletín porta documentos",
    categoria: "maletines",
    descripcion: "Para planos, carpetas y documentación técnica.",
    foto: "maletines/maletin-documentos.webp",
    caracteristicas: [
      "Formato carta u oficio",
      "Cierre seguro",
      "Personalizable",
    ],
  },

  // ---------- Estuches ----------
  {
    nombre: "Estuche para instrumentos",
    categoria: "estuches",
    descripcion:
      "Protección acolchada para instrumentos de medición y equipos delicados.",
    foto: "estuches/estuche-instrumentos.webp",
    caracteristicas: [
      "Espuma interior a medida",
      "Cierre resistente",
      "Asa y correa",
    ],
  },
  {
    nombre: "Estuche porta tablet",
    categoria: "estuches",
    descripcion: "Para tablets y equipos portátiles en terreno.",
    foto: "estuches/estuche-tablet.webp",
    caracteristicas: [
      "Ventana transparente opcional",
      "Resistente al polvo",
      "Medida exacta del equipo",
    ],
  },
  {
    nombre: "Neceser",
    categoria: "estuches",
    descripcion:
      "Estuche multiuso para viajes, kits de bienvenida o regalos corporativos.",
    foto: "estuches/neceser.webp",
    caracteristicas: [
      "Interior lavable",
      "Varias medidas",
      "Logo personalizado",
    ],
  },

  // ---------- Bananos ----------
  {
    nombre: "Banano urbano",
    categoria: "bananos",
    descripcion: "Compacto y liviano, para llevar lo esencial.",
    foto: "bananos/banano-urbano.webp",
    caracteristicas: [
      "Correa regulable",
      "Bolsillo interior",
      "Colores a elección",
    ],
  },
  {
    nombre: "Banano de trabajo",
    categoria: "bananos",
    descripcion: "Porta herramientas pequeñas y accesorios en faena.",
    foto: "bananos/banano-trabajo.webp",
    caracteristicas: [
      "Tela técnica",
      "Hebilla de alta resistencia",
      "Detalles reflectantes",
    ],
  },

  // ---------- Fundas industriales ----------
  {
    nombre: "Funda anticorrosión salina",
    categoria: "industrial",
    descripcion:
      "Cubierta para equipos instalados cerca del mar, que los protege de la niebla salina y la humedad.",
    foto: "industrial/funda-anticorrosion.webp",
    caracteristicas: [
      "Material resistente a la sal",
      "Costuras selladas",
      "Ventilación anti condensación",
    ],
    destacado: true,
  },
  {
    nombre: "Cubierta para motores y generadores",
    categoria: "industrial",
    descripcion:
      "Fundas a la medida exacta de motores, bombas y grupos electrógenos.",
    foto: "industrial/funda-generador.webp",
    caracteristicas: [
      "Fabricada según planos o medidas en terreno",
      "Accesos con cierre",
      "Anclajes a la base",
    ],
  },
  {
    nombre: "Funda para tableros y válvulas",
    categoria: "industrial",
    descripcion:
      "Protección para tableros eléctricos, válvulas e instrumentación.",
    foto: "industrial/funda-valvulas.webp",
    caracteristicas: [
      "Ventanas de inspección",
      "Apertura rápida",
      "Resistente a químicos",
    ],
  },
  {
    nombre: "Cobertor anti UV para maquinaria",
    categoria: "industrial",
    descripcion: "Para maquinaria detenida o almacenada al aire libre.",
    foto: "industrial/cobertor-uv.webp",
    caracteristicas: ["Filtro UV", "Repelente al agua", "Ojetillos y tensores"],
  },
];

export function productosDe(slug: string) {
  return productos.filter((p) => p.categoria === slug);
}

export function categoria(slug: string) {
  return categorias.find((c) => c.slug === slug);
}
