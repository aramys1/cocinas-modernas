# Cocinas Modernas

Sitio de muebles a medida en Panamá, construido con Next.js App Router, React, TypeScript y Tailwind CSS. Mantiene Fraunces para títulos y Manrope para cuerpo/UI. Las fuentes WOFF2 latinas y sus licencias OFL viven en `app/fonts/`; no se descargan fuentes durante el build ni al visitar el sitio.

## Desarrollo

```bash
npm ci
```

Copia `.env.example` a `.env.local`, completa únicamente las variables disponibles y ejecuta:

```bash
npm run dev
npm run lint
npm run build
npm start
```

En PowerShell, si `npm.ps1` está bloqueado, utiliza `npm.cmd`. No hace falta cambiar la política de ejecución del sistema. No se requiere dominio ni cuenta de correo para compilar. El formulario necesita las variables de Resend para enviar.

## Mantenimiento

- **Proyectos:** `data/projects.ts`, consumido por Inicio, Galería y servicios. Instrucciones: [ADDING_PROJECTS.md](ADDING_PROJECTS.md).
- **Marca, teléfono, redes y ubicación:** `lib/site-config.ts`.
- **SEO:** `lib/seo.ts`, metadata en cada página, `app/sitemap.ts`, `app/robots.ts` y `components/JsonLd.tsx`.
- **Formulario:** `components/Cotizar.tsx`, `lib/contact.ts` y `app/api/cotizacion/route.ts`.
- **Estilos comunes:** `app/globals.css`; componentes compartidos para hero, proyectos, beneficios, materiales, proceso y FAQ.
- **Dominio y despliegue:** [LAUNCH_CHECKLIST.md](LAUNCH_CHECKLIST.md).
- **Auditoría:** [AUDIT_REPORT.md](AUDIT_REPORT.md).

`npm run check:projects` valida el catálogo; también se ejecuta antes de cada build. Conservar el lockfile y utilizar `npm ci` en el hosting.

## Variables de entorno

| Variable                   | Uso                                                                                                                                                                |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `NEXT_PUBLIC_SITE_URL`     | Origen público HTTPS. Localhost es el fallback de desarrollo. Sin origen público: noindex, robots bloqueado y sitemap vacío.                                       |
| `RESEND_API_KEY`           | Secreto del servidor para Resend.                                                                                                                                  |
| `CONTACT_EMAIL`            | Destinatario privado de las cotizaciones.                                                                                                                          |
| `RESEND_FROM_EMAIL`        | Remitente verificado; obligatorio para enviar en producción. En `npm run dev`, puede usarse el remitente de prueba si se omite.                                    |
| `NEXT_PUBLIC_GA_ID`        | Opcional; activa GA4 solo con un ID válido. Analytics puede medir cambios de historial mediante su medición mejorada. No enviar campos del formulario a Analytics. |
| `GOOGLE_SITE_VERIFICATION` | Opcional; token de Search Console. Es una verificación pública, no una contraseña.                                                                                 |

Configura las variables antes del build y vuelve a compilar después de cambiar dominio, Analytics o verificación. Los previews deben dejar `NEXT_PUBLIC_SITE_URL` vacío si no deben indexarse. El fallback no es un dominio de lanzamiento.

Las variables privadas no se importan en componentes cliente ni se guardan en git. `.env.example` es la única excepción pública al ignore de archivos `.env*`.

## Alcance de seguridad y operación

El formulario conserva honeypot, tiempo mínimo, normalización, listas permitidas, validación y escape HTML. Valida el origen cuando está presente y limita a 20 KB el cuerpo real de la solicitud. Devuelve errores genéricos y no registra datos personales ni errores completos del proveedor. El control de origen y el honeypot reducen ruido; no son autenticación ni una defensa completa contra bots.

Si aparece abuso, activar límites en el hosting/WAF o un servicio de rate limiting compartido. No se implementa un contador en memoria para serverless. No hay autenticación, CMS, base de datos ni CAPTCHA. Las cabeceras básicas no sustituyen el HTTPS que debe configurar el hosting. No se añade una CSP restrictiva sin conocer los orígenes definitivos de despliegue y Analytics.

Las fotos existentes se conservan y `next/image` genera variantes responsivas. Los archivos de `public` son públicos. No subir secretos, ubicaciones residenciales ni información de clientes no autorizada.
