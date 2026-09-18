import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Script from 'next/script';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import JsonLd from '@/components/JsonLd';
import {
  absoluteUrl,
  isPublicSite,
  siteConfig,
  siteUrl,
} from '@/lib/site-config';
import { organization } from '@/lib/seo';

const fraunces = localFont({
  src: './fonts/fraunces-latin.woff2',
  variable: '--font-display',
  weight: '100 900',
  display: 'swap',
  fallback: ['Georgia'],
});
const manrope = localFont({
  src: './fonts/manrope-latin.woff2',
  variable: '--font-body',
  weight: '200 800',
  display: 'swap',
  fallback: ['Arial'],
});
const gaId = /^G-[A-Z0-9]+$/.test(process.env.NEXT_PUBLIC_GA_ID ?? '')
  ? process.env.NEXT_PUBLIC_GA_ID
  : undefined;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Muebles a medida en Panamá | Cocinas Modernas',
    template: '%s | Cocinas Modernas',
  },
  description:
    'Diseño y fabricación de muebles a medida en Panamá. Cocinas, clósets, centros de entretenimiento y remodelaciones adaptadas a cada espacio.',
  robots: { index: isPublicSite, follow: isPublicSite },
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION || undefined },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es-PA"
      className={`${fraunces.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a href="#contenido" className="skip-link">
          Saltar al contenido
        </a>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@graph': [
              organization,
              {
                '@type': 'WebSite',
                '@id': absoluteUrl('/#website'),
                url: absoluteUrl('/'),
                name: siteConfig.name,
                inLanguage: 'es-PA',
                publisher: { '@id': organization['@id'] },
              },
            ],
          }}
        />
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
            >{`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${gaId}');`}</Script>
          </>
        )}
      </body>
    </html>
  );
}
