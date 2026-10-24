import type { ImageMetadata } from "astro";

// Carga todas las fotos que estén dentro de src/assets/productos/.
// Así, en el catálogo basta con escribir la ruta de la foto como texto.
const fotos = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/productos/**/*.{jpg,jpeg,png,webp,avif}",
  { eager: true },
);

export function foto(ruta: string): ImageMetadata {
  const encontrada = fotos[`/src/assets/productos/${ruta}`];
  if (!encontrada) {
    throw new Error(
      `No se encontró la foto "${ruta}" dentro de src/assets/productos/`,
    );
  }
  return encontrada.default;
}
