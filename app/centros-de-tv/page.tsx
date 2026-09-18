import { pageMetadata, serviceSchema } from '@/lib/seo';
import { serviceProjects } from '@/data/projects';
import JsonLd from '@/components/JsonLd';

import { Layers, Lightbulb, Wrench, Boxes } from 'lucide-react';

import ServiceHero from '@/components/ServiceHero';

import ServiceProjects from '@/components/ServiceProjects';

import ServiceBenefits from '@/components/ServiceBenefits';

import ServiceFAQ, { type FAQItem } from '@/components/ServiceFAQ';

import Materials, { type MaterialItem } from '@/components/Materials';

import Process from '@/components/Process';
import Cotizar from '@/components/Cotizar';
import Reveal from '@/components/Reveal';

export const metadata = pageMetadata(
  'Centros de Entretenimiento a Medida en Panamá',
  'Diseño y fabricación de centros de entretenimiento y muebles de TV a medida en Panamá. Diseños modernos, funcionales y adaptados a cada espacio.',
  '/centros-de-tv',
  '/centro-entretenimiento-gris.png',
);

/* =================================
   PROYECTOS
================================= */

const tvProjects = serviceProjects('centros-de-tv');

/* =================================
   BENEFICIOS
================================= */

const benefits = [
  {
    title: 'Diseño adaptado a tu pared',

    description:
      'Diseñamos el mueble según las dimensiones de la pared, el tamaño del televisor y la distribución general del espacio.',
  },

  {
    title: 'Organización y almacenamiento',

    description:
      'Integramos módulos, gavetas, repisas y espacios para equipos electrónicos sin perder una apariencia limpia y ordenada.',
  },

  {
    title: 'Acabados personalizados',

    description:
      'Podemos combinar colores, texturas, panelados e iluminación para crear un centro de entretenimiento integrado al ambiente.',
  },
];

/* =================================
   MATERIALES Y ACABADOS
================================= */

const tvMaterials: MaterialItem[] = [
  {
    title: 'Panelados y revestimientos',

    description:
      'Paneles y acabados que ayudan a integrar el televisor y el mobiliario dentro del diseño de la pared.',

    image: '/aglomerado-hidrofugo.png',

    alt: 'Panelados para centro de entretenimiento a medida en Panamá',

    icon: Layers,
  },

  {
    title: 'Iluminación LED',

    description:
      'Iluminación decorativa integrada en paneles y repisas para destacar el diseño del mueble.',

    image: '/luces-led.png',

    alt: 'Iluminación LED en centro de entretenimiento moderno',

    icon: Lightbulb,
  },

  {
    title: 'Herrajes y accesorios',

    description:
      'Bisagras, correderas y accesorios que permiten mantener puertas y gavetas funcionales y discretas.',

    image: '/herraje.png',

    alt: 'Herrajes para muebles de televisión y centros de entretenimiento',

    icon: Wrench,
  },

  {
    title: 'Almacenamiento integrado',

    description:
      'Diseñamos módulos para organizar consolas, controles, equipos electrónicos y otros accesorios.',

    image: '/espacios-funcionales.png',

    alt: 'Almacenamiento integrado en centro de entretenimiento a medida',

    icon: Boxes,
  },
];

/* =================================
   PREGUNTAS FRECUENTES
================================= */

const faqs: FAQItem[] = [
  {
    question: '¿Instalan también el televisor y dejan el área lista para usar?',

    answer:
      'Sí. Podemos encargarnos de la instalación del centro de entretenimiento, televisor y otros elementos contemplados en el proyecto para entregar el área lista para usar. Si se requieren trabajos adicionales de remodelación, también pueden incluirse dentro de la cotización.',
  },

  {
    question: '¿Pueden ocultar los cables del televisor y los equipos?',

    answer:
      'Sí. Durante el diseño buscamos ocultar o integrar los cables y conexiones en la medida de lo posible para mantener el área limpia y ordenada. Esto puede incluir conexiones para televisión, consolas, barras de sonido y otros equipos incluidos en el proyecto.',
  },

  {
    question: '¿Pueden incluir electricidad, tomacorrientes e iluminación LED?',

    answer:
      'Sí. Podemos contemplar trabajos eléctricos básicos, puntos de conexión e iluminación LED como parte del diseño. Estos elementos deben definirse durante la planificación y cotización para integrarlos correctamente.',
  },

  {
    question:
      '¿Pueden hacer panelados y muebles completos alrededor del televisor?',

    answer:
      'Sí. Diseñamos panelados, módulos, gavetas, puertas, repisas, elementos aéreos y otras soluciones según el espacio y la idea del cliente. Podemos trabajar a partir de una propuesta propia o desarrollar el diseño a partir de referencias del cliente.',
  },

  {
    question:
      '¿Toman en cuenta consolas, barras de sonido y otros equipos electrónicos?',

    answer:
      'Sí. Podemos diseñar espacios específicos para consolas, decodificadores, routers, barras de sonido y otros equipos siempre que sean considerados durante el diseño y la cotización. Si es necesario, también pueden contemplarse espacios de ventilación.',
  },

  {
    question:
      '¿Puedo ver un diseño antes de fabricar el centro de entretenimiento?',

    answer:
      'Sí. Podemos trabajar con diseños o representaciones visuales para definir la distribución, proporciones, panelados, iluminación y almacenamiento antes de iniciar la fabricación.',
  },

  {
    question: '¿Pueden retirar un centro de TV existente y remodelar el área?',

    answer:
      'Sí. Podemos desmontar mobiliario existente y realizar trabajos adicionales para renovar el espacio, incluyendo panelados, pequeñas adecuaciones, electricidad u otros elementos previamente acordados en el alcance del proyecto.',
  },

  {
    question: '¿Cuánto demora la instalación y qué garantía ofrecen?',

    answer:
      'La instalación de un centro de entretenimiento residencial suele completarse en un día cuando el espacio está preparado y todos los elementos acordados están disponibles. Ofrecemos 3 meses de garantía por defectos relacionados con la instalación. La garantía no cubre daños por mal uso, productos de limpieza inadecuados, sustancias abrasivas u otras causas ajenas a la instalación.',
  },

  {
    question:
      '¿Trabajan centros de entretenimiento para proyectos residenciales y comerciales?',

    answer:
      'Sí. Podemos desarrollar centros de entretenimiento, panelados y mobiliario para residencias, oficinas, salas de reuniones, recepciones y otros proyectos comerciales o empresariales, adaptando el diseño y la planificación al alcance de cada trabajo.',
  },
];

export default function CentrosDeTVPage() {
  /* =================================
     DATOS ESTRUCTURADOS SEO
  ================================= */

  const structuredData = serviceSchema(
    'Centros de Entretenimiento a Medida en Panamá',
    'Diseño y fabricación de centros de entretenimiento y muebles de TV a medida en Panamá. Diseños modernos, funcionales y adaptados a cada espacio.',
    '/centros-de-tv',
    faqs,
  );

  return (
    <main id="contenido" tabIndex={-1} className="bg-white">
      {/* =================================
          DATOS PARA GOOGLE
      ================================= */}

      <JsonLd data={structuredData} />

      {/* =================================
          HERO
      ================================= */}

      <ServiceHero
        eyebrow="Diseño · Fabricación · Instalación"

        title="Centros de entretenimiento a medida en Panamá"

        description="
          Diseñamos y fabricamos muebles de TV personalizados
          que combinan almacenamiento, diseño y funcionalidad
          para crear espacios modernos y organizados.
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

      {/* =================================
          INTRODUCCIÓN
      ================================= */}

      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto grid max-w-[1584px] grid-cols-1 gap-10 px-6 md:px-12 lg:grid-cols-2 lg:gap-20 lg:px-12">
          {/* IZQUIERDA */}
          <Reveal>
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#816037]">
                Diseño para tu sala
              </p>

              <h2
                className="max-w-xl text-black section-title"
                style={{
                  fontFamily: 'var(--font-display)',
                }}
              >
                Más que un mueble para el televisor
              </h2>

              <div className="mt-6 h-[2px] w-20 bg-[#D9B37A]" />
            </div>
          </Reveal>

          {/* DERECHA */}
          <Reveal delay={180} direction="right">
            <div className="flex h-full flex-col justify-center gap-5 text-base leading-relaxed text-gray-600 md:text-lg">
              <p>
                Un centro de entretenimiento a medida puede convertirse en uno
                de los elementos principales de una sala, integrando el
                televisor con almacenamiento y detalles decorativos.
              </p>

              <p>
                Diseñamos cada mueble considerando el tamaño de la pared, las
                dimensiones del televisor, los equipos electrónicos y la
                distribución general del espacio.
              </p>

              <p>
                El resultado es un diseño integrado al ambiente, con módulos,
                panelados e iluminación que ayudan a mantener el espacio
                organizado y visualmente limpio.
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

        title="Centros de entretenimiento diseñados a medida"

        description="
          Explora algunos de nuestros muebles de TV y
          centros de entretenimiento. Abre cada fotografía
          para observar los detalles y cotizar un diseño similar.
        "

        projects={tvProjects}

        galleryHref="/galeria?categoria=centros-de-tv"

        galleryLabel="Ver más centros de entretenimiento"
      />

      {/* =================================
          BENEFICIOS
      ================================= */}

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

      {/* =================================
          MATERIALES Y ACABADOS
      ================================= */}

      <Materials
        eyebrow="Diseño y acabados"

        title="Panelados, iluminación y almacenamiento"

        description="
          Combinamos mobiliario, panelados, iluminación
          y soluciones de almacenamiento para crear un
          centro de entretenimiento integrado al espacio.
        "

        materials={tvMaterials}
      />

      {/* =================================
          PROCESO
      ================================= */}

      <Process
        image="/galeria-tv.jpeg"

        imageAlt="
          Proceso de diseño y fabricación de centro de entretenimiento a medida en Panamá
        "

        whatsappMessage="
          Hola, quisiera cotizar un centro de entretenimiento a medida.
        "

        ctaLabel="Cotizar mi centro de TV"
      />

      {/* =================================
          PREGUNTAS FRECUENTES
      ================================= */}

      <ServiceFAQ
        eyebrow="Preguntas frecuentes"

        title="Preguntas sobre nuestros centros de entretenimiento"

        description="
          Algunas respuestas útiles antes de comenzar
          el diseño de tu mueble de TV a medida.
        "

        faqs={faqs}
      />

      {/* =================================
          COTIZAR
      ================================= */}

      <Cotizar />
    </main>
  );
}
