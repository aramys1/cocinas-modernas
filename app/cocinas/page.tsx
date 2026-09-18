import { pageMetadata, serviceSchema } from '@/lib/seo';
import { serviceProjects } from '@/data/projects';
import JsonLd from '@/components/JsonLd';

import { Droplets, Gem, Square, Lightbulb, Wrench, Boxes } from 'lucide-react';

import ServiceHero from '@/components/ServiceHero';

import ServiceProjects from '@/components/ServiceProjects';

import ServiceBenefits from '@/components/ServiceBenefits';

import ServiceFAQ, { type FAQItem } from '@/components/ServiceFAQ';

import Materials, { type MaterialItem } from '@/components/Materials';

import Process from '@/components/Process';
import Cotizar from '@/components/Cotizar';
import Reveal from '@/components/Reveal';

export const metadata = pageMetadata(
  'Cocinas y Muebles de Cocina a Medida en Panamá',
  'Diseño y fabricación de cocinas y muebles de cocina a medida en Panamá. Gabinetes, gavetas, almacenamiento y acabados adaptados a cada espacio.',
  '/cocinas',
  '/cocina-gris-hero.png',
);

/* =================================
   PROYECTOS
================================= */

const kitchenProjects = serviceProjects('cocinas');

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
    title: 'Tu cocina lista para usar',

    description:
      'Podemos encargarnos de los muebles, instalación, plomería y electricidad básica, además de la colocación de fregadores, extractores y electrodomésticos contemplados en el proyecto.',
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

    alt: 'Aglomerado hidrófugo para muebles de cocina a medida en Panamá',

    icon: Droplets,
  },

  {
    title: 'Sobres de cuarzo',

    description:
      'Superficies modernas, resistentes y disponibles en diferentes acabados.',

    image: '/cuarzo.png',

    alt: 'Sobre de cuarzo para cocina moderna a medida',

    icon: Gem,
  },

  {
    title: 'Sobres de granito',

    description:
      'Piedra natural resistente que aporta carácter y durabilidad a la cocina.',

    image: '/granito.png',

    alt: 'Sobre de granito para cocina a medida en Panamá',

    icon: Square,
  },

  {
    title: 'Herrajes de calidad',

    description:
      'Bisagras, correderas y accesorios pensados para un uso cómodo y duradero.',

    image: '/herraje.png',

    alt: 'Herrajes para muebles de cocina fabricados a medida',

    icon: Wrench,
  },

  {
    title: 'Iluminación LED',

    description:
      'Iluminación integrada para mejorar la funcionalidad y resaltar el diseño.',

    image: '/luces-led.png',

    alt: 'Iluminación LED integrada en cocina moderna',

    icon: Lightbulb,
  },

  {
    title: 'Distribución funcional',

    description:
      'Diseñamos módulos y almacenamiento para aprovechar mejor cada espacio disponible.',

    image: '/espacios-funcionales.png',

    alt: 'Distribución funcional de cocina diseñada a medida',

    icon: Boxes,
  },
];

/* =================================
   PREGUNTAS FRECUENTES
================================= */

const faqs: FAQItem[] = [
  {
    question:
      '¿Fabrican gabinetes, gavetas y módulos de cocina completamente a medida?',

    answer:
      'Sí. Cada cocina se diseña según las dimensiones reales del espacio y las necesidades del cliente. La distribución puede incluir gabinetes, gavetas, módulos aéreos y diferentes soluciones de almacenamiento.',
  },

  {
    question: '¿Toman en cuenta los electrodomésticos al diseñar la cocina?',

    answer:
      'Sí. El diseño contempla las dimensiones y espacios necesarios para nevera, estufa, horno, microondas, extractor, fregador y otros elementos que formen parte del proyecto. El diseño debe ser aprobado por el cliente antes de iniciar la fabricación.',
  },

  {
    question: '¿Pueden entregar la cocina terminada y lista para usar?',

    answer:
      'Sí. Podemos encargarnos del proyecto de forma integral, incluyendo la instalación de los muebles, trabajos básicos de plomería y electricidad, fregadores comunes, extractores y electrodomésticos contemplados en el diseño. Si alguna instalación requiere condiciones especiales, se evalúa y se considera dentro de la cotización.',
  },

  {
    question:
      '¿Pueden encargarse también de plomería, electricidad y albañilería?',

    answer:
      'Sí. Si el proyecto lo requiere, podemos coordinar estos trabajos para facilitar la remodelación y mantener una mejor integración entre instalaciones, acabados y mobiliario. De esta manera el cliente reduce la necesidad de coordinar diferentes contratistas por separado.',
  },

  {
    question: '¿Cuánto demora la instalación de una cocina?',

    answer:
      'Cuando el espacio está preparado y todos los elementos acordados están disponibles, normalmente buscamos completar la instalación de una cocina residencial en un solo día. Esto permite reducir las molestias dentro del hogar y optimizar el trabajo de instalación. Proyectos o trabajos adicionales pueden requerir más tiempo.',
  },

  {
    question: '¿Puedo elegir los materiales, colores y acabados?',

    answer:
      'Sí. Cada proyecto puede personalizarse con diferentes colores, texturas, herrajes, iluminación y superficies. También contamos con opciones de sobres de cuarzo o granito según las características del proyecto.',
  },

  {
    question:
      '¿Qué ocurre si quiero hacer cambios después de aprobar el diseño?',

    answer:
      'Los cambios pueden evaluarse, pero modificaciones o trabajos adicionales solicitados después de aprobar el diseño pueden afectar materiales, tiempo de instalación y mano de obra. Cuando sea necesario, se realizará un ajuste en la cotización antes de continuar.',
  },

  {
    question: '¿Qué garantía tienen las cocinas?',

    answer:
      'Ofrecemos una garantía de 3 meses por defectos relacionados con la instalación. La garantía no cubre daños ocasionados por mal uso, productos de limpieza inadecuados, sustancias abrasivas u otras condiciones ajenas al trabajo de instalación.',
  },
];

export default function CocinasPage() {
  /* =================================
     DATOS ESTRUCTURADOS SEO
  ================================= */

  const structuredData = serviceSchema(
    'Cocinas y Muebles de Cocina a Medida en Panamá',
    'Diseño y fabricación de cocinas y muebles de cocina a medida en Panamá. Gabinetes, gavetas, almacenamiento y acabados adaptados a cada espacio.',
    '/cocinas',
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

        title="Cocinas a medida en Panamá"

        description="
          Diseñamos y fabricamos muebles de cocina a medida,
          combinando funcionalidad, almacenamiento y acabados
          personalizados para aprovechar mejor cada espacio.
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
        <div className="mx-auto grid max-w-[1584px] grid-cols-1 gap-10 px-6 md:px-12 lg:grid-cols-2 lg:gap-20 lg:px-12">
          {/* IZQUIERDA */}
          <Reveal>
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#816037]">
                Cocinas personalizadas
              </p>

              <h2
                className="max-w-xl text-black section-title"
                style={{
                  fontFamily: 'var(--font-display)',
                }}
              >
                Una cocina diseñada para tu forma de vivir
              </h2>

              <div className="mt-6 h-[2px] w-20 bg-[#D9B37A]" />
            </div>
          </Reveal>

          {/* DERECHA */}
          <Reveal delay={180} direction="right">
            <div className="flex h-full flex-col justify-center gap-5 text-base leading-relaxed text-gray-600 md:text-lg">
              <p>
                Una cocina a medida permite aprovechar mejor el espacio
                disponible. Diseñamos gabinetes, gavetas y módulos según las
                medidas y necesidades reales de cada hogar.
              </p>

              <p>
                La distribución, el almacenamiento, los materiales, la
                iluminación y los acabados se planifican para crear un espacio
                funcional y agradable para el uso diario.
              </p>

              <p>
                Cada proyecto se desarrolla de acuerdo con las medidas del
                espacio y las preferencias del cliente, buscando un equilibrio
                entre diseño, comodidad y durabilidad.
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

        galleryHref="/galeria?categoria=cocinas"

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
          Conoce más sobre el diseño, fabricación,
          instalación y entrega de nuestras cocinas a medida.
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
