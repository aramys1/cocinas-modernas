import type { Metadata } from 'next';
import { absoluteUrl, isPublicSite, siteConfig } from './site-config';

export function pageMetadata(
  title: string,
  description: string,
  path: string,
  image = '/cocina-gris-hero.png',
): Metadata {
  const fullTitle = `${title} | ${siteConfig.name}`;
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: absoluteUrl(path) },
    robots: { index: isPublicSite, follow: isPublicSite },
    openGraph: {
      type: 'website',
      locale: 'es_PA',
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      url: absoluteUrl(path),
      images: [{ url: absoluteUrl(image), alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [absoluteUrl(image)],
    },
  };
}

export const organization = {
  '@type': 'Organization',
  '@id': absoluteUrl('/#organization'),
  name: siteConfig.name,
  url: absoluteUrl('/'),
  telephone: siteConfig.phone,
  areaServed: { '@type': 'Country', name: 'Panamá' },
  sameAs: Object.values(siteConfig.social),
};

export function serviceSchema(
  name: string,
  description: string,
  path: string,
  faqs: { question: string; answer: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': absoluteUrl(`${path}#service`),
        name,
        serviceType: name,
        description,
        url: absoluteUrl(path),
        areaServed: organization.areaServed,
        provider: { '@id': organization['@id'] },
      },
      {
        '@type': 'FAQPage',
        '@id': absoluteUrl(`${path}#faq`),
        mainEntity: faqs.map(({ question, answer }) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: { '@type': 'Answer', text: answer },
        })),
      },
    ],
  };
}
