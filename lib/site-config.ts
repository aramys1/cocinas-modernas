// Public business information only. Keep email credentials on the server.
export const siteConfig = {
  name: 'Cocinas Modernas',
  phone: '+507 6841-4434',
  phoneHref: 'tel:+50768414434',
  whatsapp: 'https://wa.me/50768414434',
  location: 'Panamá Oeste',
  serviceArea: 'Servicio en todo Panamá',
  social: {
    instagram:
      'https://www.instagram.com/cosinasmodernaspanama?igsh=OHpkNXR3cG9wa2N0',
    facebook: 'https://www.facebook.com/share/1LsNDZejCg/',
  },
} as const;

const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const parsedUrl = new URL(configuredUrl || 'http://localhost:3000');
if (
  !['http:', 'https:'].includes(parsedUrl.protocol) ||
  parsedUrl.username ||
  parsedUrl.password ||
  parsedUrl.pathname !== '/' ||
  parsedUrl.search ||
  parsedUrl.hash
) {
  throw new Error(
    'NEXT_PUBLIC_SITE_URL debe ser el origen del sitio, sin ruta, credenciales, query ni fragmento.',
  );
}
export const siteUrl = parsedUrl.origin;
export const isPublicSite =
  Boolean(configuredUrl) &&
  parsedUrl.protocol === 'https:' &&
  !['localhost', '127.0.0.1', '[::1]'].includes(parsedUrl.hostname);
export const sitePaths = [
  '/',
  '/galeria',
  '/cocinas',
  '/closets',
  '/centros-de-tv',
  '/remodelaciones',
] as const;
export const absoluteUrl = (path: string) => new URL(path, siteUrl).toString();
export const whatsappLink = (message?: string) =>
  message
    ? `${siteConfig.whatsapp}?text=${encodeURIComponent(message.trim().replace(/\s+/g, ' '))}`
    : siteConfig.whatsapp;
