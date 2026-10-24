# Lukebag · sitio web

Sitio web de **Lukebag**, empresa de confección textil e industrial a medida. Es un sitio 100% estático (sin backend)
hecho con [Astro](https://astro.build) y [Tailwind CSS](https://tailwindcss.com), y se publica gratis en GitHub Pages.

> **Estado:** prototipo. Las fotos, el teléfono, el correo, la dirección y los textos de "Nosotros" son de ejemplo.

---

## 1. Requisitos (una sola vez)

1. Instala **Node.js 24 (LTS)** desde <https://nodejs.org>. Comprueba en una terminal: `node -v` debe mostrar `v24...`.
2. En VS Code instala las extensiones recomendadas (VS Code te las sugiere al abrir la carpeta):
   **Astro** y **Tailwind CSS IntelliSense**.

## 2. Ver el sitio en tu computador

En la terminal de VS Code (`Ctrl + ñ` o menú *Terminal → Nueva terminal*), dentro de la carpeta del proyecto:

```bash
npm install      # solo la primera vez: descarga las dependencias
npm run dev      # levanta el sitio en http://localhost:4321
```

Abre <http://localhost:4321> en el navegador. Cada vez que guardes un archivo, la página se actualiza sola.
Para detenerlo, presiona `Ctrl + C` en la terminal.

Otros comandos útiles:

| Comando           | Qué hace                                                   |
| ----------------- | ---------------------------------------------------------- |
| `npm run build`   | Genera la versión final del sitio en la carpeta `dist/`.   |
| `npm run preview` | Muestra en el navegador lo que se generó con `build`.      |

## 3. Cómo está organizado

```text
├── public/                  Archivos que se copian tal cual (favicon, etc.)
├── src/
│   ├── assets/
│   │   ├── productos/       ← FOTOS DEL CATÁLOGO, una carpeta por categoría
│   │   ├── sitio/           Fotos generales (taller, línea industrial)
│   │   └── logo-original.svg
│   ├── components/          Piezas reutilizables (menú, pie de página, tarjeta de producto…)
│   ├── data/
│   │   ├── catalogo.ts      ← CATEGORÍAS Y PRODUCTOS
│   │   └── sitio.ts         ← WHATSAPP, CORREO, DIRECCIÓN, FORMULARIO
│   ├── layouts/
│   │   └── BaseLayout.astro Estructura común de todas las páginas (head, menú, pie)
│   ├── lib/                 Funciones de ayuda (enlaces y fotos)
│   ├── pages/               ← CADA ARCHIVO ES UNA PÁGINA DEL SITIO
│   │   ├── index.astro              → /
│   │   ├── catalogo/index.astro     → /catalogo/
│   │   ├── catalogo/[categoria].astro → /catalogo/bolsos/, /catalogo/mochilas/, …
│   │   ├── linea-industrial.astro   → /linea-industrial/
│   │   ├── nosotros.astro           → /nosotros/
│   │   └── contacto.astro           → /contacto/
│   └── styles/global.css    Colores y tipografías de la marca
├── astro.config.mjs         Configuración de Astro
└── .github/workflows/deploy.yml  Publicación automática en GitHub Pages
```

Un archivo `.astro` tiene dos partes: arriba, entre las líneas `---`, va el código (importar cosas, preparar datos);
abajo va el HTML. Las clases como `bg-tinta text-white px-4` son de Tailwind: cada una aplica un estilo
(fondo, color, espaciado…). Puedes buscarlas en <https://tailwindcss.com/docs>.

## 4. Tareas frecuentes

### Cambiar WhatsApp, correo o dirección

Edita `src/data/sitio.ts`. El número de WhatsApp va sin `+` ni espacios (ej. `56912345678`).

### Agregar o cambiar un producto

1. Copia la foto en la carpeta de su categoría, por ejemplo `src/assets/productos/mochilas/mochila-roja.jpg`.
   Sirven JPG, PNG o WebP. Astro las comprime y redimensiona solo, pero conviene que no pesen más de 1–2 MB.
   Usa nombres sin espacios ni tildes.
2. En `src/data/catalogo.ts` agrega un bloque dentro de `productos`:

   ```ts
   {
     nombre: 'Mochila roja',
     categoria: 'mochilas',
     descripcion: 'Descripción corta del producto.',
     foto: 'mochilas/mochila-roja.jpg',
     caracteristicas: ['Característica 1', 'Característica 2'],
     destacado: true, // opcional: lo muestra en la portada
   },
   ```

3. Para quitar un producto, borra su bloque (y su foto si ya no se usa).

Las fotos actuales son imágenes de referencia: reemplázalas por fotos reales con el **mismo nombre** o cambia la ruta en `foto`.

### Agregar una categoría

Agrega un bloque en `categorias` (en `src/data/catalogo.ts`) con un `slug` sin espacios (ej. `'carpas'`), crea la carpeta
`src/assets/productos/carpas/` y agrega productos con `categoria: 'carpas'`. La página `/catalogo/carpas/` se crea sola.

### Activar el formulario de contacto

El formulario usa [Formspree](https://formspree.io) (gratis hasta 50 mensajes al mes):

1. Crea una cuenta y un formulario nuevo con el correo donde quieres recibir los mensajes.
2. Te darán una dirección como `https://formspree.io/f/abcdwxyz`. Copia la parte final (`abcdwxyz`).
3. Pégala en `formspreeId` dentro de `src/data/sitio.ts`.

### Cambiar colores o tipografías

En `src/styles/global.css`, dentro de `@theme`. Por ejemplo `--color-marca` es el rojo del logo; en el código se usa
como `bg-marca`, `text-marca`, etc.

## 5. Publicar en GitHub Pages

El archivo `.github/workflows/deploy.yml` compila y publica el sitio **automáticamente cada vez que se sube un cambio a
la rama `main`**. Solo hay que activarlo una vez:

1. En GitHub, entra al repositorio → **Settings → Pages**.
2. En **Build and deployment → Source**, elige **GitHub Actions**.
3. Sube un cambio a `main` (o en la pestaña **Actions** ejecuta "Publicar en GitHub Pages" a mano).
   En un par de minutos el sitio queda en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`.

> ⚠️ **Repositorio privado:** GitHub Pages en repositorios privados requiere un plan pagado (GitHub Pro, ~USD 4/mes).
> Con el plan gratuito, el repositorio debe ser **público** (el código queda visible, pero no contiene nada secreto).
> Alternativas gratuitas que sí aceptan repos privados: Cloudflare Pages, Netlify o Vercel.

### Usar un dominio propio (ej. `lukebag.cl`)

1. Compra el dominio (`.cl` en [NIC Chile](https://www.nic.cl), ~$10.000 CLP/año).
2. En **Settings → Pages → Custom domain** escribe el dominio y sigue las instrucciones de DNS que muestra GitHub.
3. Con dominio propio el sitio pasa a vivir en la raíz (`https://lukebag.cl/`) y el workflow lo ajusta solo.

## 6. Flujo de trabajo con Git (resumen)

```bash
git pull                     # traer los últimos cambios
# ... editar archivos ...
git add .
git commit -m "Agrega fotos reales de mochilas"
git push                     # al llegar a main, el sitio se publica solo
```

También puedes hacer todo esto desde el panel **Control de código fuente** de VS Code (ícono de ramas en la barra lateral).
