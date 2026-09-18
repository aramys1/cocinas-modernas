# Añadir un proyecto en menos de 5 minutos

1. Copia tu foto WebP a `public/proyectos/`. Crea la carpeta si no existe. Usa un nombre sencillo, por ejemplo `cocina-nueva.webp`, sin espacios y con las mismas mayúsculas/minúsculas que usarás en el código. Exporta una imagen de buena calidad de unos 1600–2000 px de ancho; evita subir el original de cámara de muchos megabytes.
2. Abre **`data/projects.ts`** y añade un objeto dentro de `projects`. No necesitas modificar ninguna página.

Este es un ejemplo real del catálogo actual:

```ts
{
  id: 'cocina-gris',
  title: 'Cocina gris',
  category: 'cocinas',
  image: '/cocina-gris.png',
  alt: 'Cocina gris con gabinetes y almacenamiento a medida',
  featured: true,
  serviceFeatured: true,
  published: true,
},
```

Para un proyecto nuevo, copia la estructura y cambia `id` por uno único, `title`, `image` (por ejemplo `/proyectos/cocina-nueva.webp`) y `alt`. Describe lo que realmente muestra la imagen. No vuelvas a añadir el ejemplo con el mismo ID.

| Campo                   | Qué hace                                                                                                                         |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `category`              | Solo `cocinas`, `closets`, `centros-de-tv` o `remodelaciones`. Los acentos de las etiquetas visibles se aplican automáticamente. |
| `published: true`       | Lo muestra en Galería. Si omites este campo, también se publica. `false` lo oculta de todas las listas.                          |
| `featured: true`        | Lo incluye en Inicio, respetando el orden del archivo. Quita la marca de otro si quieres sustituir su posición.                  |
| `serviceFeatured: true` | Lo incluye en la página del servicio correspondiente.                                                                            |
| `description`           | Texto opcional de «Sobre el proyecto» en el visor.                                                                               |
| `location`              | Ubicación general y confirmada, por ejemplo `Panamá Oeste`. No añadas direcciones particulares.                                  |
| `projectType`           | Tipo confirmado del proyecto, si quieres publicarlo.                                                                             |
| `duration`              | Tiempo real y confirmado de ese proyecto; no es una promesa para futuros trabajos.                                               |

Los datos opcionales se omiten si no los conoces. El visor no muestra títulos vacíos. `homeImage` y `homeAlt` conservan una imagen alternativa existente en Inicio; normalmente **no necesitas usarlos**. No borres los renders o imágenes actuales sin una sustitución adecuada. Una imagen en `public` es accesible mediante su URL incluso si el proyecto tiene `published: false`; no subas información privada.

3. Comprueba y publica:

```bash
npm run lint
npm run build
git add public/proyectos data/projects.ts
git commit -m "content: add project"
git push
```

El build comprueba automáticamente IDs, categorías e imágenes del catálogo. Con el repositorio conectado a tu hosting, el push activa el despliegue según su configuración. Sin despliegue automático, solicita un redeploy desde tu hosting.
