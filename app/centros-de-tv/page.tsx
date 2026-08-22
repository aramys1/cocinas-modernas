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
  title: 'Centros de Entretenimiento a Medida en Panamá',

  description:
    'Diseño y fabricación de centros de entretenimiento y muebles de TV a medida en Panamá. Diseños modernos, funcionales y adaptados a cada espacio.',

  openGraph: {
    title:
      'Centros de Entretenimiento a Medida en Panamá | Cocinas Modernas',

    description:
      'Diseñamos y fabricamos muebles de TV y centros de entretenimiento a medida en Panamá, adaptados al espacio y estilo de cada hogar.',

    type: 'website',
  },
};


const tvProjects: ServiceProject[] = [
  {
    id: 1,
    title: 'Centro de entretenimiento moderno',
    category: 'Centros de TV',
    image: '/centro-entretenimiento-gris.png',

    alt:
      'Centro de entretenimiento moderno fabricado a medida para televisión en Panamá',
  },
];


const benefits = [
  {
    title: 'Diseño adaptado a tu pared',

    description:
      'Diseñamos el mueble según las dimensiones de la pared, el tamaño del televisor y la distribución del espacio.',
  },

  {
    title: 'Organización y almacenamiento',

    description:
      'Integramos módulos, gavetas, repisas y espacios para equipos electrónicos sin perder una apariencia limpia y ordenada.',
  },

  {
    title: 'Acabados personalizados',

    description:
      'El diseño puede combinar diferentes colores, texturas, iluminación y detalles decorativos para integrarse con el ambiente.',
  },
];


const faqs: FAQItem[] = [
  {
    question:
      '¿Los centros de entretenimiento se fabrican a medida?',

    answer:
      'Sí. Diseñamos cada centro de entretenimiento según las dimensiones de la pared, el televisor, los equipos que deseas colocar y el estilo del espacio.',
  },

  {
    question:
      '¿Pueden diseñar el mueble según el tamaño de mi televisor?',

    answer:
      'Sí. El tamaño y ubicación del televisor se toman en cuenta desde el diseño para mantener buenas proporciones y una distribución adecuada.',
  },

  {
    question:
      '¿Se pueden incluir gavetas y espacios de almacenamiento?',

    answer:
      'Sí. Podemos integrar gavetas, puertas, repisas y módulos para organizar controles, consolas, equipos electrónicos y otros objetos.',
  },

  {
    question:
      '¿Pueden incorporar iluminación LED?',

    answer:
      'Sí. Dependiendo del diseño, se pueden incorporar luces LED decorativas para resaltar paneles, repisas u otros elementos del mueble.',
  },

  {
    question:
      '¿Puedo elegir los colores y acabados?',

    answer:
      'Sí. El diseño puede personalizarse con distintas combinaciones de colores, texturas y acabados según las opciones disponibles para el proyecto.',
  },

  {
    question:
      '¿También realizan la instalación?',

    answer:
      'Sí. Fabricamos e instalamos el centro de entretenimiento para que quede correctamente ajustado al espacio.',
  },
];


export default function CentrosDeTVPage() {

  const structuredData = {
    '@context': 'https://schema.org',

    '@graph': [
      {
        '@type': 'Service',

        name:
          'Diseño y fabricación de centros de entretenimiento a medida en Panamá',

        serviceType:
          'Diseño y fabricación de centros de entretenimiento y muebles de TV',

        description:
          'Diseño, fabricación e instalación de centros de entretenimiento y muebles de televisión a medida en Panamá.',

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

        title="Centros de entretenimiento a medida en Panamá"

        description="
          Diseñamos y fabricamos muebles de TV personalizados
          que combinan almacenamiento, diseño y funcionalidad
          para crear un espacio moderno y organizado.
        "

        image="/centro-entretenimiento-gris.png"

        imageAlt="
          Centro de entretenimiento moderno fabricado a medida en Panamá
        "

        whatsappMessage="
          Hola, quisiera cotizar un centro de entretenimiento a medida.
        "

        ctaLabel="Cotizar mi centro de TV"

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
                Diseño para tu sala
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
                Más que un mueble para el televisor
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
                Un centro de entretenimiento a medida puede
                convertirse en uno de los elementos principales
                de una sala, combinando el televisor con
                almacenamiento y detalles decorativos.
              </p>


              <p>
                Diseñamos cada mueble considerando el tamaño
                de la pared, las dimensiones del televisor,
                los equipos electrónicos y la distribución
                general del espacio.
              </p>


              <p>
                El resultado es un diseño integrado al ambiente,
                con módulos y acabados personalizados que ayudan
                a mantener el espacio organizado y visualmente limpio.
              </p>

            </div>

          </Reveal>

        </div>

      </section>


      {/* PROYECTOS */}
      <ServiceProjects
        eyebrow="Proyectos realizados"

        title="Centros de entretenimiento diseñados a medida"

        description="
          Explora algunos de nuestros muebles de TV y centros
          de entretenimiento. Puedes abrir cada fotografía para
          observar los detalles y cotizar un proyecto similar.
        "

        projects={tvProjects}

        galleryHref="/galeria?categoria=Centros%20de%20TV"

        galleryLabel="Ver más centros de entretenimiento"
      />


      {/* BENEFICIOS */}
      <ServiceBenefits
        eyebrow="Diseño personalizado"

        title="Una solución que forma parte de tu espacio"

        description="
          Cada centro de entretenimiento se diseña pensando
          tanto en la apariencia como en la organización y
          funcionalidad del área.
        "

        benefits={benefits}
      />


      {/* PROCESO */}
      <Process
        image="/centro-entretenimiento-gris.png"

        imageAlt="
          Diseño y fabricación de centro de entretenimiento a medida en Panamá
        "

        whatsappMessage="
          Hola, quisiera cotizar un centro de entretenimiento a medida.
        "

        ctaLabel="Cotizar mi centro de TV"
      />


      {/* FAQ */}
      <ServiceFAQ
        eyebrow="Preguntas frecuentes"

        title="Preguntas sobre nuestros centros de entretenimiento"

        description="
          Algunas respuestas antes de comenzar el diseño
          de tu centro de entretenimiento a medida.
        "

        faqs={faqs}
      />


      {/* CTA */}
      <Cotizar />


      {/* FOOTER */}
      <Footer />

    </main>
  );
}