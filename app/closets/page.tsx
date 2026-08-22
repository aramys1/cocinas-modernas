import type { Metadata } from 'next';

import ServiceHero from '@/components/ServiceHero';

import ServiceProjects, {
  type ServiceProject,
} from '@/components/ServiceProjects';

import ServiceBenefits from '@/components/ServiceBenefits';

import ServiceFAQ, {
  type FAQItem,
} from '@/components/ServiceFAQ';

import Process from '@/components/Process';
import Cotizar from '@/components/Cotizar';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';


export const metadata: Metadata = {
  title: 'Clósets a Medida en Panamá',

  description:
    'Diseño, fabricación e instalación de clósets a medida en Panamá. Creamos soluciones modernas y funcionales para aprovechar mejor cada espacio.',

  openGraph: {
    title:
      'Clósets a Medida en Panamá | Cocinas Modernas',

    description:
      'Diseñamos y fabricamos clósets personalizados en Panamá, adaptados al espacio, almacenamiento y estilo de cada cliente.',

    type: 'website',
  },
};


const closetProjects: ServiceProject[] = [
  {
    id: 1,
    title: 'Clóset a medida',
    category: 'Closets',
    image: '/closet.png',
    alt:
      'Clóset blanco fabricado a medida con almacenamiento personalizado en Panamá',
  },

  {
    id: 2,
    title: 'Clóset moderno',
    category: 'Closets',
    image: '/galeria-closet.png',
    alt:
      'Clóset moderno de madera clara diseñado y fabricado a medida en Panamá',
  },
];


const benefits = [
  {
    title: 'Aprovechamiento del espacio',

    description:
      'Diseñamos cada clóset según las dimensiones disponibles para aprovechar mejor paredes, esquinas y áreas de almacenamiento.',
  },

  {
    title: 'Distribución personalizada',

    description:
      'Podemos organizar espacios para ropa, gavetas, repisas y diferentes tipos de almacenamiento según tus necesidades.',
  },

  {
    title: 'Diseño integrado al ambiente',

    description:
      'Seleccionamos colores, acabados y distribución para que el clóset se integre naturalmente con el dormitorio o espacio donde será instalado.',
  },
];


const faqs: FAQItem[] = [
  {
    question:
      '¿Los clósets se fabrican completamente a medida?',

    answer:
      'Sí. Diseñamos cada clóset según las medidas reales del espacio y las necesidades de almacenamiento del cliente.',
  },

  {
    question:
      '¿Puedo elegir la distribución interior?',

    answer:
      'Sí. La distribución puede personalizarse con áreas para colgar ropa, repisas, gavetas y otros espacios de almacenamiento.',
  },

  {
    question:
      '¿Puedo elegir colores y acabados?',

    answer:
      'Sí. Trabajamos diferentes opciones de colores, texturas y acabados para adaptar el diseño al estilo del espacio.',
  },

  {
    question:
      '¿Realizan la medición del espacio?',

    answer:
      'Sí. Tomamos las medidas necesarias antes de fabricar para asegurar que el diseño se adapte correctamente al lugar de instalación.',
  },

  {
    question:
      '¿También realizan la instalación?',

    answer:
      'Sí. Fabricamos e instalamos los muebles para entregar el clóset correctamente armado y ajustado al espacio.',
  },
];


export default function ClosetsPage() {

  const structuredData = {
    '@context': 'https://schema.org',

    '@graph': [
      {
        '@type': 'Service',

        name:
          'Diseño y fabricación de clósets a medida en Panamá',

        serviceType:
          'Diseño y fabricación de clósets a medida',

        description:
          'Diseño, fabricación e instalación de clósets personalizados y muebles de almacenamiento a medida en Panamá.',

        areaServed: {
          '@type': 'Country',
          name: 'Panamá',
        },

        provider: {
          '@type': 'Organization',
          name: 'Cocinas Modernas',
          telephone: '+507 6841-4434',
        },
      },

      {
        '@type': 'FAQPage',

        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',

          name: faq.question,

          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };


  return (
    <main className="bg-white">

      {/* SEO ESTRUCTURADO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            structuredData
          ).replace(/</g, '\\u003c'),
        }}
      />


      {/* HERO */}
      <ServiceHero
        eyebrow="Diseño · Fabricación · Instalación"

        title="Clósets a medida en Panamá"

        description="
          Diseñamos y fabricamos clósets personalizados
          para aprovechar mejor cada espacio y crear
          soluciones de almacenamiento funcionales,
          modernas y adaptadas a tu hogar.
        "

        image="/closet.png"

        imageAlt="
          Clóset moderno fabricado a medida en Panamá
        "

        whatsappMessage="
          Hola, quisiera cotizar un clóset a medida.
        "

        ctaLabel="Cotizar mi clóset"

        projectsHref="#proyectos"
      />


      {/* INTRODUCCIÓN */}
      <section className="bg-white py-20 md:py-24">

        <div
          className="
            mx-auto
            grid
            max-w-[1584px]
            grid-cols-1
            gap-10
            px-6
            md:px-16
            lg:grid-cols-2
            lg:gap-20
            lg:px-24
          "
        >

          <Reveal>

            <div>

              <p
                className="
                  mb-4
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#B9945E]
                "
              >
                Almacenamiento personalizado
              </p>


              <h2
                className="
                  max-w-xl
                  text-3xl
                  font-semibold
                  leading-tight
                  text-black
                  md:text-5xl
                "
                style={{
                  fontFamily:
                    'var(--font-display)',
                }}
              >
                Un clóset pensado para tu espacio
              </h2>


              <div
                className="
                  mt-6
                  h-[2px]
                  w-20
                  bg-[#D9B37A]
                "
              />

            </div>

          </Reveal>


          <Reveal
            delay={180}
            direction="right"
          >

            <div
              className="
                flex
                h-full
                flex-col
                justify-center
                gap-5
                text-base
                leading-relaxed
                text-gray-600
                md:text-lg
              "
            >

              <p>
                Un clóset a medida permite utilizar mejor
                el espacio disponible y organizar cada
                área según las necesidades de quien lo usa.
              </p>


              <p>
                Diseñamos distribuciones con espacios para
                ropa, gavetas, repisas y almacenamiento,
                buscando que cada elemento tenga una
                función clara.
              </p>


              <p>
                El resultado es un mueble integrado al
                ambiente, con dimensiones, colores y
                acabados adaptados al estilo de cada
                habitación.
              </p>

            </div>

          </Reveal>

        </div>

      </section>


      {/* PROYECTOS */}
      <ServiceProjects
        eyebrow="Proyectos realizados"

        title="Clósets diseñados para aprovechar cada espacio"

        description="
          Conoce algunos de nuestros proyectos de clósets
          personalizados. Abre cada fotografía para observar
          los detalles y cotizar un diseño similar.
        "

        projects={closetProjects}

        galleryHref="/galeria?categoria=Closets"

        galleryLabel="Ver más proyectos de clósets"
      />


      {/* BENEFICIOS */}
      <ServiceBenefits
        eyebrow="Diseño personalizado"

        title="Más organización sin desperdiciar espacio"

        description="
          Diseñamos cada distribución pensando en cómo
          utilizarás el clóset y en las dimensiones reales
          disponibles.
        "

        benefits={benefits}
      />


      {/* PROCESO */}
      <Process
        image="/galeria-closet.png"
        imageAlt="Proceso de diseño y fabricación de clóset a medida en Panamá"
        whatsappMessage="Hola, quisiera cotizar un clóset a medida."
        ctaLabel="Cotizar mi clóset"
        />


      {/* FAQ */}
      <ServiceFAQ
        eyebrow="Preguntas frecuentes"

        title="Preguntas sobre nuestros clósets"

        description="
          Algunas respuestas útiles antes de comenzar
          el diseño de tu clóset a medida.
        "

        faqs={faqs}
      />


      {/* COTIZACIÓN */}
      <Cotizar />


      {/* FOOTER */}
      <Footer />

    </main>
  );
}