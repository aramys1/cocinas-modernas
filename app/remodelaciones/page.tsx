import type { Metadata } from 'next';

import {
  Layers,
  Lightbulb,
  Wrench,
  Boxes,
} from 'lucide-react';

import ServiceHero from '@/components/ServiceHero';

import ServiceProjects, {
  type ServiceProject,
} from '@/components/ServiceProjects';

import ServiceBenefits from '@/components/ServiceBenefits';

import ServiceFAQ, {
  type FAQItem,
} from '@/components/ServiceFAQ';

import Materials, {
  type MaterialItem,
} from '@/components/Materials';

import Process from '@/components/Process';
import Cotizar from '@/components/Cotizar';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';


export const metadata: Metadata = {
  title: 'Remodelaciones en Panamá',

  description:
    'Remodelaciones de interiores en Panamá con diseño, fabricación de muebles a medida y renovación de espacios. Transformamos cocinas, áreas sociales y otros ambientes del hogar.',

  openGraph: {
    title:
      'Remodelaciones en Panamá | Cocinas Modernas',

    description:
      'Renovamos espacios con soluciones de diseño, muebles a medida y acabados personalizados para transformar hogares en Panamá.',

    type: 'website',
  },
};


/* =================================
   PROYECTOS
================================= */

const remodelingProjects: ServiceProject[] = [
  {
    id: 1,

    title:
      'Remodelación interior',

    category:
      'Remodelaciones',

    image:
      '/galeria-remodelaciones.jpeg',

    alt:
      'Remodelación de espacio interior con muebles a medida en Panamá',
  },
];


/* =================================
   BENEFICIOS
================================= */

const benefits = [
  {
    title:
      'Renovación integral del espacio',

    description:
      'Analizamos la distribución existente y proponemos soluciones para mejorar la funcionalidad, apariencia y aprovechamiento del ambiente.',
  },

  {
    title:
      'Muebles diseñados para la remodelación',

    description:
      'Fabricamos muebles a medida que se integran con el nuevo diseño del espacio y ayudan a aprovechar mejor cada área disponible.',
  },

  {
    title:
      'Diseño y acabados coordinados',

    description:
      'Buscamos que colores, materiales, iluminación y mobiliario funcionen en conjunto para lograr un resultado más uniforme y moderno.',
  },
];


/* =================================
   MATERIALES Y SOLUCIONES
================================= */

const remodelingMaterials: MaterialItem[] = [
  {
    title:
      'Panelados y revestimientos',

    description:
      'Soluciones decorativas para renovar paredes, integrar mobiliario y darle una nueva apariencia al espacio.',

    image:
      '/aglomerado-hidrofugo.png',

    alt:
      'Panelados y revestimientos para remodelaciones de interiores en Panamá',

    icon:
      Layers,
  },

  {
    title:
      'Iluminación LED',

    description:
      'Integramos iluminación decorativa y funcional para resaltar muebles, paneles y áreas específicas.',

    image:
      '/luces-led.png',

    alt:
      'Iluminación LED integrada en remodelación de interiores',

    icon:
      Lightbulb,
  },

  {
    title:
      'Mobiliario y herrajes',

    description:
      'Fabricamos muebles a medida con herrajes y accesorios adecuados para cada área del proyecto.',

    image:
      '/herraje.png',

    alt:
      'Herrajes y mobiliario a medida para remodelaciones',

    icon:
      Wrench,
  },

  {
    title:
      'Soluciones funcionales',

    description:
      'Diseñamos almacenamiento, módulos y distribución para aprovechar mejor cada espacio renovado.',

    image:
      '/espacios-funcionales.png',

    alt:
      'Soluciones funcionales y almacenamiento en remodelación de interiores',

    icon:
      Boxes,
  },
];


/* =================================
   PREGUNTAS FRECUENTES
================================= */

const faqs: FAQItem[] = [
  {
    question:
      '¿Qué tipo de espacios pueden remodelar?',

    answer:
      'Podemos trabajar en diferentes áreas del hogar, incluyendo cocinas, salas, áreas sociales y otros espacios que requieran renovación y mobiliario a medida.',
  },

  {
    question:
      '¿La remodelación puede incluir muebles a medida?',

    answer:
      'Sí. Podemos diseñar y fabricar muebles personalizados como parte de la remodelación para adaptar mejor el espacio a las necesidades del cliente.',
  },

  {
    question:
      '¿Realizan una evaluación del espacio antes de cotizar?',

    answer:
      'Sí. Revisamos las condiciones y dimensiones del área para definir el alcance del proyecto y preparar una propuesta adecuada.',
  },

  {
    question:
      '¿Puedo elegir los materiales y acabados?',

    answer:
      'Sí. Dependiendo del proyecto, se pueden seleccionar diferentes opciones de materiales, colores, superficies y acabados para lograr el estilo deseado.',
  },

  {
    question:
      '¿Pueden remodelar solamente una parte del espacio?',

    answer:
      'Sí. El proyecto puede enfocarse en un área específica o contemplar una renovación más amplia según las necesidades y el presupuesto.',
  },

  {
    question:
      '¿También realizan la instalación de los muebles?',

    answer:
      'Sí. Los muebles fabricados para la remodelación pueden ser instalados como parte del proyecto para entregar el espacio terminado.',
  },
];


export default function RemodelacionesPage() {

  /* =================================
     DATOS ESTRUCTURADOS SEO
  ================================= */

  const structuredData = {
    '@context': 'https://schema.org',

    '@graph': [
      {
        '@type': 'Service',

        name:
          'Remodelaciones de interiores en Panamá',

        serviceType:
          'Remodelación de interiores y fabricación de muebles a medida',

        description:
          'Remodelación de espacios interiores en Panamá con diseño, fabricación e instalación de mobiliario a medida.',

        areaServed: {
          '@type': 'Country',

          name:
            'Panamá',
        },

        provider: {
          '@type': 'Organization',

          name:
            'Cocinas Modernas',

          telephone:
            '+507 6841-4434',
        },
      },

      {
        '@type': 'FAQPage',

        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',

          name:
            faq.question,

          acceptedAnswer: {
            '@type': 'Answer',

            text:
              faq.answer,
          },
        })),
      },
    ],
  };


  return (
    <main className="bg-white">

      {/* =================================
          DATOS PARA GOOGLE
      ================================= */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            structuredData
          ).replace(/</g, '\\u003c'),
        }}
      />


      {/* =================================
          HERO
      ================================= */}

      <ServiceHero
        eyebrow="Diseño · Renovación · Muebles a medida"

        title="Remodelaciones en Panamá"

        description="
          Transformamos espacios con soluciones de diseño,
          mobiliario a medida y acabados personalizados para
          crear ambientes más funcionales, modernos y adaptados
          a cada necesidad.
        "

        image="/galeria-remodelaciones.jpeg"

        imageAlt="
          Remodelación de interior con muebles a medida en Panamá
        "

        whatsappMessage="
          Hola, quisiera cotizar una remodelación.
        "

        ctaLabel="Cotizar mi remodelación"

        projectsHref="#proyectos"
      />


      {/* =================================
          INTRODUCCIÓN
      ================================= */}

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

          {/* IZQUIERDA */}
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
                Renovación de espacios
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
                Dale una nueva vida a tu espacio
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


          {/* DERECHA */}
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
                Una remodelación permite mejorar tanto la
                apariencia como la funcionalidad de un espacio
                que ya no responde a las necesidades actuales.
              </p>


              <p>
                Analizamos la distribución, el mobiliario y los
                acabados existentes para proponer soluciones
                que aprovechen mejor el área disponible.
              </p>


              <p>
                Podemos integrar muebles a medida dentro del
                proyecto para lograr un resultado más ordenado,
                coherente y adaptado al estilo de cada cliente.
              </p>

            </div>

          </Reveal>

        </div>

      </section>


      {/* =================================
          PROYECTOS
      ================================= */}

      <ServiceProjects
        eyebrow="Proyectos realizados"

        title="Espacios que hemos transformado"

        description="
          Explora algunos de nuestros proyectos de remodelación.
          Puedes abrir cada fotografía para observar los detalles
          y cotizar una transformación similar para tu espacio.
        "

        projects={remodelingProjects}

        galleryHref="/galeria?categoria=Remodelaciones"

        galleryLabel="Ver más proyectos de remodelación"
      />


      {/* =================================
          BENEFICIOS
      ================================= */}

      <ServiceBenefits
        eyebrow="Transformación personalizada"

        title="Una remodelación pensada para mejorar tu espacio"

        description="
          Cada proyecto parte de las condiciones reales del lugar
          y de las necesidades de quienes lo utilizan.
        "

        benefits={benefits}
      />


      {/* =================================
          MATERIALES Y SOLUCIONES
      ================================= */}

      <Materials
        eyebrow="Soluciones para tu espacio"

        title="Materiales y acabados según cada remodelación"

        description="
          Cada remodelación requiere soluciones diferentes.
          Seleccionamos materiales, iluminación, mobiliario y
          acabados de acuerdo con las necesidades del proyecto.
        "

        materials={remodelingMaterials}
      />


      {/* =================================
          PROCESO
      ================================= */}

      <Process
        image="/galeria-remodelaciones.jpeg"

        imageAlt="
          Proceso de remodelación de espacio interior en Panamá
        "

        whatsappMessage="
          Hola, quisiera cotizar una remodelación.
        "

        ctaLabel="Cotizar mi remodelación"
      />


      {/* =================================
          PREGUNTAS FRECUENTES
      ================================= */}

      <ServiceFAQ
        eyebrow="Preguntas frecuentes"

        title="Preguntas sobre nuestras remodelaciones"

        description="
          Algunas respuestas útiles antes de comenzar
          la renovación de tu espacio.
        "

        faqs={faqs}
      />


      {/* =================================
          COTIZAR
      ================================= */}

      <Cotizar />


      {/* =================================
          FOOTER
      ================================= */}

      <Footer />

    </main>
  );
}