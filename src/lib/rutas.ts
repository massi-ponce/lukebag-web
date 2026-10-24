// Construye un enlace interno respetando la "base" del sitio.
// En GitHub Pages el sitio vive en https://usuario.github.io/nombre-repo/,
// así que todos los enlaces internos deben pasar por esta función.
const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export function url(ruta: string) {
  return `${base}${ruta.startsWith("/") ? ruta : `/${ruta}`}`;
}
