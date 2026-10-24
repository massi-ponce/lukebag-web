export const SITIO = {
  nombre: "Lukebag",
  eslogan: "Confección textil e industrial a medida",
  descripcion:
    "Bolsos, mochilas, maletines, estuches, bananos y fundas industriales hechos a medida y personalizados con el logo de tu empresa.",

  // Número de WhatsApp en formato internacional, SIN "+", espacios ni guiones.
  // Ejemplo para Chile: 56912345678
  whatsapp: "56932731679",
  telefonoVisible: "+56 9 3273 1679",
  email: "lukebag@hotmail.cl",
  ubicacion: "Valparaíso, Chile",

  // ID del formulario de Formspree (https://formspree.io). Al crear un formulario
  // te dan una URL como https://formspree.io/f/abcdwxyz -> el ID es "abcdwxyz".
  formspreeId: "TU_ID_FORMSPREE",

  // Redes sociales (deja el texto vacío '' para ocultar el ícono).
  instagram: "https://instagram.com/",
  facebook: "",
  linkedin: "",
};

// Mensaje que aparece escrito al abrir WhatsApp.
export function enlaceWhatsApp(
  mensaje = "Hola Lukebag, quisiera cotizar un producto.",
) {
  return `https://wa.me/${SITIO.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}
