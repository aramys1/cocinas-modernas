# Lista de lanzamiento

- [ ] Elegir hosting con soporte para Next.js, servidor Node.js, optimización de imágenes y rutas API; conectar el repositorio y configurar el despliegue automático.
- [ ] Elegir/comprar dominio, conectar DNS y activar HTTPS.
- [ ] Configurar `NEXT_PUBLIC_SITE_URL` con el origen público HTTPS definitivo, sin ruta, query ni fragmento. Hacer un nuevo build/deploy. Mientras no esté configurado, el sitio emite `noindex`, bloquea rastreo y deja el sitemap vacío.
- [ ] Verificar el dominio de envío en Resend con sus registros DNS.
- [ ] Configurar en el hosting `RESEND_API_KEY`, `CONTACT_EMAIL` (buzón que recibirá solicitudes) y `RESEND_FROM_EMAIL` (remitente del dominio verificado). Las tres son privadas, sin prefijo `NEXT_PUBLIC_`.
- [ ] Enviar una cotización real desde el dominio publicado y verificar recepción, carpeta de spam y respuesta al remitente. El remitente de pruebas de Resend no sustituye un dominio verificado.
- [ ] Comprobar los enlaces reales de Instagram, Facebook, WhatsApp y teléfono desde móvil.
- [ ] Crear Google Search Console, verificar propiedad mediante DNS o `GOOGLE_SITE_VERIFICATION` (solo el token de la etiqueta HTML) y volver a desplegar si se utiliza la variable.
- [ ] Enviar la URL `/sitemap.xml` del dominio público a Search Console y revisar una URL con su herramienta de inspección. El sitemap incluye Inicio, Galería y los cuatro servicios.
- [ ] Si se desea Analytics, crear una propiedad GA4 y un flujo web. Antes de activarlo, decidir la información/consentimiento de privacidad aplicable al negocio. Configurar `NEXT_PUBLIC_GA_ID` con el ID real `G-…` y volver a desplegar. Verificar medición y cambios de página; sin ID no se carga ningún script.
- [ ] Crear/verificar Google Business Profile como negocio de área de servicio. Comunicar Panamá Oeste y servicio en todo Panamá; mantener oculta la dirección residencial y publicar únicamente datos confirmados.
- [ ] Revisar en el dominio real los formularios, las páginas compartidas en redes, la indexación, HTTPS y métricas de rendimiento. Los Core Web Vitals de usuarios reales solo se conocerán tras el despliegue y tráfico suficiente.
