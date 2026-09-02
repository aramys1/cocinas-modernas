import type { Metadata } from 'next';

import {
  Droplets,
  Gem,
  Square,
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
  title: 'Cocinas y Muebles de Cocina a Medida en Panamá',

  description:
    'Diseño y fabricación de cocinas y muebles de cocina a medida en Panamá. Gabinetes, gavetas, almacenamiento y acabados adaptados a cada espacio.',

  openGraph: {
    title:
      'Cocinas y Muebles de Cocina a Medida en Panamá | Cocinas Modernas',

    description:
      'Diseñamos y fabricamos muebles de cocina a medida en Panamá, con soluciones de almacenamiento y acabados personalizados para cada espacio.',

    type: 'website',
  },
};


/* =================================
   PROYECTOS
================================= */

const kitchenProjects: ServiceProject[] = [
  {
    id: 1,
    title: 'Cocina gris',
    category: 'Cocinas',
    image: '/cocina-gris.png',

    alt:
      'Cocina moderna gris fabricada a medida en Panamá',
  },

  {
    id: 2,
    title: 'Cocina moderna',
    category: 'Cocinas',
    image: '/process.png',

    alt:
      'Cocina moderna de madera fabricada a medida en Panamá',
  },
];


/* =================================
   BENEFICIOS
================================= */

const benefits = [
  {
    title: 'Diseño adaptado a tu espacio',

    description:
      'Cada cocina se diseña según las medidas y distribución real de tu hogar para aprovechar mejor cada área disponible.',
  },

  {
    title: 'Almacenamiento funcional',

    description:
      'Planificamos módulos, gavetas y espacios de almacenamiento pensando en comodidad, organización y uso diario.',
  },

  {
    title: 'Materiales y acabados personalizados',

    description:
      'Puedes elegir combinaciones de colores, superficies, herrajes e iluminación para crear una cocina acorde a tu estilo.',
  },
];


/* =================================
   MATERIALES PARA COCINAS
================================= */

const kitchenMaterials: MaterialItem[] = [
  {
    title: 'Aglomerado Hidrófugo',

    description:
      'Tableros resistentes a la humedad, ideales para el uso diario en cocinas.',

    image: '/aglomerado-hidrofugo.png',

    alt:
      'Aglomerado hidrófugo para muebles de cocina a medida en Panamá',

    icon: Droplets,
  },

  {
    title: 'Sobres de cuarzo',

    description:
      'Superficies modernas, resistentes y disponibles en diferentes acabados.',

    image: '/cuarzo.png',

    alt:
      'Sobre de cuarzo para cocina moderna a medida',

    icon: Gem,
  },

  {
    title: 'Sobres de granito',

    description:
      'Piedra natural resistente que aporta carácter y durabilidad a la cocina.',

    image: '/granito.png',

    alt:
      'Sobre de granito para cocina a medida en Panamá',

    icon: Square,
  },

  {
    title: 'Herrajes de calidad',

    description:
      'Bisagras, correderas y accesorios pensados para un uso cómodo y duradero.',

    image: '/herraje.png',

    alt:
      'Herrajes para muebles de cocina fabricados a medida',

    icon: Wrench,
  },

  {
    title: 'Iluminación LED',

    description:
      'Iluminación integrada para mejorar la funcionalidad y resaltar el diseño.',

    image: '/luces-led.png',

    alt:
      'Iluminación LED integrada en cocina moderna',

    icon: Lightbulb,
  },

  {
    title: 'Distribución funcional',

    description:
      'Diseñamos módulos y almacenamiento para aprovechar mejor cada espacio disponible.',

    image: '/espacios-funcionales.png',

    alt:
      'Distribución funcional de cocina diseñada a medida',

    icon: Boxes,
  },
];


/* =================================
   PREGUNTAS FRECUENTES
================================= */

const faqs: FAQItem[] = [
  {
    question:
      '¿Diseñan cocinas completamente a medida?',

    answer:
      'Sí. Cada proyecto se diseña considerando las medidas del espacio, la distribución, las necesidades de almacenamiento y las preferencias del cliente.',
  },

  {
    question:
      '¿Realizan la medición antes de fabricar la cocina?',

    answer:
      'Sí. La medición del espacio forma parte del proceso para preparar un diseño y una cotización adecuados al proyecto.',
  },

  {
    question:
      '¿Qué materiales utilizan para las cocinas?',

    answer:
      'Trabajamos con materiales resistentes y acabados pensados para el uso diario, incluyendo tableros resistentes a la humedad, herrajes de calidad y diferentes opciones de sobres.',
  },

  {
    question:
      '¿Puedo elegir colores y acabados?',

    answer:
      'Sí. El diseño puede personalizarse con diferentes colores, texturas, tiradores, superficies e iluminación según las opciones disponibles para el proyecto.',
  },

  {
    question:
      '¿También realizan la instalación?',

    answer:
      'Sí. El proceso contempla la fabricación y la instalación de los muebles para entregar el proyecto listo en el espacio del cliente.',
  },
];


export default function CocinasPage() {

  /* =================================
     DATOS ESTRUCTURADOS SEO
  ================================= */

  const structuredData = {
    '@context': 'https://schema.org',

    '@graph': [

      {
        '@type': 'Service',

        name:
          'Diseño y fabricación de cocinas a medida en Panamá',

        serviceType:
          'Diseño y fabricación de cocinas a medida',

        description:
          'Diseño, fabricación e instalación de cocinas modernas a medida en Panamá.',

        areaServed: {
          '@type': 'Country',
          name: 'Panamá',
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
        eyebrow="Diseño · Fabricación · Instalación"

        title="Cocinas a medida en Panamá"

        description="
          Diseñamos y fabricamos cocinas modernas adaptadas
          a cada espacio, combinando funcionalidad,
          almacenamiento y acabados personalizados.
        "

        image="/cocina-gris-hero.png"

        imageAlt="
          Cocina moderna a medida fabricada en Panamá
        "

        whatsappMessage="
          Hola, quisiera cotizar una cocina a medida.
        "

        ctaLabel="Cotizar mi cocina"

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
                Cocinas personalizadas
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
                Una cocina diseñada para tu forma de vivir
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
                Una cocina a medida permite aprovechar mejor el
                espacio disponible. Diseñamos gabinetes, gavetas
                y módulos según las medidas y necesidades reales
                de cada hogar.
              </p>


              <p>
                 La distribución, el almacenamiento, los materiales,
                la iluminación y los acabados se planifican para
                crear un espacio funcional y agradable para el
                uso diario.
              </p>


              <p>
                Cada proyecto se desarrolla de acuerdo
                con las medidas del espacio y las
                preferencias del cliente, buscando un
                equilibrio entre diseño, comodidad y
                durabilidad.
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

        title="Cocinas que hemos diseñado y fabricado"

        description="
          Explora algunos de nuestros proyectos de cocinas
          a medida. Puedes abrir cada fotografía para
          observar los detalles y cotizar un proyecto similar.
        "

        projects={kitchenProjects}

        galleryHref="/galeria?categoria=Cocinas"

        galleryLabel="Ver más proyectos de cocinas"
      />


      {/* =================================
          BENEFICIOS
      ================================= */}

      <ServiceBenefits
        eyebrow="Diseño a tu medida"

        title="Pensamos cada detalle de tu cocina"

        description="
          Una cocina funcional comienza con una buena
          planificación del espacio y de las necesidades
          de quienes la utilizan.
        "

        benefits={benefits}
      />


      {/* =================================
          MATERIALES
      ================================= */}

      <Materials
        eyebrow="Materiales para cocinas"

        title="Materiales y acabados para tu cocina"

        description="
          Seleccionamos materiales resistentes y acabados
          pensados para crear cocinas funcionales, duraderas
          y adaptadas a tu estilo.
        "

        materials={kitchenMaterials}
      />


      {/* =================================
          PROCESO
      ================================= */}

      <Process
        image="/process.png"

        imageAlt="
          Proceso de diseño y fabricación de cocina a medida en Panamá
        "

        whatsappMessage="
          Hola, quisiera cotizar una cocina a medida.
        "

        ctaLabel="Cotizar mi cocina"
      />


      {/* =================================
          PREGUNTAS FRECUENTES
      ================================= */}

      <ServiceFAQ
        eyebrow="Preguntas frecuentes"

        title="Preguntas sobre nuestras cocinas"

        description="
          Resolvemos algunas de las dudas más comunes
          antes de comenzar un proyecto de cocina a medida.
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