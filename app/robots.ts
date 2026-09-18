import type { MetadataRoute } from 'next';
import { absoluteUrl, isPublicSite } from '@/lib/site-config';

export default function robots(): MetadataRoute.Robots {
  return isPublicSite
    ? {
        rules: { userAgent: '*', allow: '/', disallow: '/api/' },
        sitemap: absoluteUrl('/sitemap.xml'),
      }
    : { rules: { userAgent: '*', disallow: '/' } };
}
