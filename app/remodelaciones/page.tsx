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
  title: 'Remodelaciones Residenciales y Comerciales en Panamá',

  description:
    'Remodelaciones residenciales y comerciales en Panamá. Coordinamos mobiliario a medida, albañilería, plomería, electricidad y acabados para transformar cada espacio.',

  openGraph: {
    title:
      'Remodelaciones Residenciales y Comerciales en Panamá | Cocinas Modernas',

    description:
      'Transformamos espacios residenciales, comerciales e institucionales con mobiliario a medida, instalaciones y soluciones adaptadas a cada proyecto.',

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
      'Proyecto completo de principio a fin',

    description:
      'Podemos coordinar mobiliario, desmontajes, albañilería, plomería, electricidad y acabados para facilitar la remodelación y entregar el espacio listo para usar.',
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
      'Buscamos que colores, materiales, iluminación y mobiliario funcionen en conjunto para lograr un resultado coherente y adaptado al proyecto.',
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
      'Podemos trabajar en prácticamente cualquier tipo de espacio residencial, comercial o institucional. Si el cliente tiene una idea o propuesta, evaluamos el lugar y buscamos la mejor forma de desarrollarla teniendo en cuenta sus condiciones, dimensiones y limitaciones.',
  },

  {
    question:
      '¿Pueden encargarse de una remodelación completa de principio a fin?',

    answer:
      'Sí. Podemos coordinar y ejecutar los diferentes trabajos necesarios para facilitar el proceso al cliente, incluyendo desmontajes, mobiliario a medida, albañilería, plomería, electricidad, acabados y otros trabajos previamente acordados. Nuestro objetivo es entregar el espacio terminado y listo para usar.',
  },

  {
    question:
      '¿Necesito contratar otros profesionales por separado?',

    answer:
      'No necesariamente. Podemos gestionar gran parte de los trabajos requeridos dentro de una remodelación. El cliente también puede contratar servicios externos si lo prefiere, pero no podemos ofrecer garantía sobre trabajos realizados por terceros.',
  },

  {
    question:
      '¿Pueden retirar muebles o elementos existentes antes de remodelar?',

    answer:
      'Sí. Podemos contemplar el desmontaje y retiro de muebles, panelados, revestimientos y otros elementos existentes como parte del alcance de la remodelación.',
  },

  {
    question:
      '¿Puedo elegir los materiales, colores y acabados?',

    answer:
      'Sí. El cliente puede elegir los materiales, colores, texturas y acabados del proyecto. Puede adquirirlos directamente o, si lo prefiere, podemos gestionar las compras con nuestros proveedores para facilitar el proceso y trabajar con materiales adecuados para cada aplicación.',
  },

  {
    question:
      '¿Pueden preparar un diseño o render antes de comenzar?',

    answer:
      'Sí. Dependiendo del proyecto podemos trabajar con diseños o renders para ayudar a visualizar la propuesta antes de iniciar. En remodelaciones de mayor tamaño o complejidad, este servicio puede representar un costo adicional.',
  },

  {
    question:
      '¿Qué ocurre si quiero hacer cambios después de iniciar la remodelación?',

    answer:
      'Los cambios pueden evaluarse durante el proyecto, pero cualquier modificación solicitada después de haber acordado el alcance puede requerir ajustes en materiales, tiempo y mano de obra. Cuando sea necesario, se replanteará el costo antes de continuar.',
  },

  {
    question:
      '¿Qué pasa si durante la remodelación aparecen problemas que no se veían inicialmente?',

    answer:
      'Buscamos solucionar los imprevistos siempre que sea razonablemente posible. Si encontramos daños o condiciones preexistentes que requieren trabajo adicional importante, evaluamos la situación con el cliente. Cuando el problema requiera una especialidad fuera del alcance acordado, puede recomendarse que sea atendido por un profesional especializado.',
  },

  {
    question:
      '¿Cuánto demora una remodelación y qué garantía ofrecen?',

    answer:
      'El tiempo depende del tamaño, complejidad y alcance de cada proyecto. Antes de comenzar se establece una planificación según los trabajos acordados. Ofrecemos 3 meses de garantía por defectos relacionados con nuestra instalación. La garantía no cubre daños por mal uso, productos de limpieza inadecuados, sustancias abrasivas ni trabajos realizados por terceros.',
  },

  {
    question:
      '¿Trabajan remodelaciones residenciales, comerciales e institucionales?',

    answer:
      'Sí. Podemos atender residencias, negocios, oficinas, edificios, hospitales, entidades públicas, empresas privadas y otros tipos de instalaciones. Cuando el proyecto lo requiere, también podemos organizar los trabajos por etapas o en horarios acordados para reducir las interrupciones del espacio.',
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
          'Remodelaciones residenciales y comerciales en Panamá',

        serviceType:
          'Remodelaciones, renovación de interiores y fabricación de muebles a medida',

        description:
          'Remodelaciones residenciales, comerciales e institucionales en Panamá con mobiliario a medida, instalaciones y acabados adaptados a cada proyecto.',

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
          Transformamos espacios residenciales, comerciales
          e institucionales con mobiliario a medida,
          instalaciones y acabados adaptados a las
          necesidades de cada proyecto.
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
                md:text-justify
                md:hyphens-auto
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
                Podemos integrar mobiliario, instalaciones y
                otros trabajos dentro del mismo proyecto para
                facilitar el proceso y conseguir un resultado
                más coherente y listo para usar.
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
          Cada proyecto parte de las condiciones reales del lugar,
          del alcance acordado y de las necesidades de quienes
          utilizarán el espacio.
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
          Puedes seleccionar los materiales y acabados de tu proyecto
          o permitirnos gestionar las compras con nuestros proveedores
          para facilitar el proceso y asegurar que todo esté disponible
          al momento de la instalación.
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
          Conoce más sobre el alcance, planificación,
          ejecución y garantía de nuestros proyectos
          de remodelación.
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