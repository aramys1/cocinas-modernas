import type { Metadata } from 'next';
import { Fraunces, Manrope } from 'next/font/google';

import './globals.css';

import Navbar from '../components/Navbar';
import WhatsAppButton from '../components/WhatsAppButton';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: {
    default: 'Cocinas Modernas | Muebles a Medida en Panamá',
    template: '%s | Cocinas Modernas',
  },

  description:
    'Diseño y fabricación de muebles a medida en Panamá. Cocinas, clósets, centros de entretenimiento y remodelaciones adaptadas a cada espacio.',

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: 'website',
    locale: 'es_PA',
    siteName: 'Cocinas Modernas',
    title: 'Cocinas Modernas | Muebles a Medida en Panamá',
    description:
      'Diseño y fabricación de cocinas, clósets, centros de entretenimiento y muebles a medida en Panamá.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Navbar />

        {children}

        <WhatsAppButton />
      </body>
    </html>
  );
}