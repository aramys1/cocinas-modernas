import type { MetadataRoute } from 'next';
import { absoluteUrl, isPublicSite, sitePaths } from '@/lib/site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  // Never advertise localhost URLs to search engines on an unconfigured preview.
  return isPublicSite
    ? sitePaths.map((path) => ({ url: absoluteUrl(path) }))
    : [];
}
