import Image from 'next/image';

import {
  Droplets,
  Square,
  Gem,
  Lightbulb,
  Wrench,
  Boxes,
  type LucideIcon,
} from 'lucide-react';

import Reveal from '@/components/Reveal';

export type MaterialItem = {
  title: string;
  description: string;
  image: string;
  alt?: string;
  icon: LucideIcon;
};

type MaterialsProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  materials?: MaterialItem[];
};

const defaultMaterials: MaterialItem[] = [
  {
    title: 'Aglomerado Hidrófugo',
    description:
      'Tableros resistentes a la humedad ideales para cocinas y baños.',
    image: '/aglomerado-hidrofugo.png',
    alt: 'Aglomerado hidrófugo para fabricación de muebles a medida',
    icon: Droplets,
  },
  {
    title: 'Sobres de granito',
    description:
      'Piedra natural de alta resistencia y elegancia.',
    image: '/granito.png',
    alt: 'Sobre de granito para cocinas a medida',
    icon: Square,
  },
  {
    title: 'Sobres de cuarzo',
    description:
      'Superficies modernas con acabados premium.',
    image: '/cuarzo.png',
    alt: 'Sobre de cuarzo para cocina moderna',
    icon: Gem,
  },
  {
    title: 'Luces LED decorativas',
    description:
      'Iluminación funcional para crear ambientes únicos.',
    image: '/luces-led.png',
    alt: 'Iluminación LED integrada en muebles a medida',
    icon: Lightbulb,
  },
  {
    title: 'Herrajes premium',
    description:
      'Bisagras y accesorios de alta calidad.',
    image: '/herraje.png',
    alt: 'Herrajes para muebles fabricados a medida',
    icon: Wrench,
  },
  {
    title: 'Espacios funcionales',
    description:
      'Soluciones inteligentes para aprovechar cada rincón.',
    image: '/espacios-funcionales.png',
    alt: 'Diseño funcional de muebles y almacenamiento',
    icon: Boxes,
  },
];

export default function Materials({
  eyebrow = 'Materiales y acabados',
  title = 'Materiales seleccionados para tu proyecto',
  description = 'Seleccionamos materiales de calidad para crear muebles duraderos, funcionales y con acabados cuidadosamente trabajados.',
  materials = defaultMaterials,
}: MaterialsProps) {
  const gridColumns =
    materials.length >= 6
      ? 'grid-cols-2 md:grid-cols-3 xl:grid-cols-6'
      : materials.length === 5
      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'
      : materials.length === 4
      ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-4'
      : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';

  return (
    <section className="bg-[#f8f8f8] py-20 md:py-24">

      <div className="mx-auto max-w-[1584px] px-6 md:px-16 lg:px-24">

        {/* HEADER */}
        <Reveal>

          <div className="mb-14 text-center">

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#B9945E]">
              {eyebrow}
            </p>

            <h2
              className="
                mx-auto
                max-w-4xl
                text-3xl
                font-semibold
                leading-tight
                text-black
                md:text-5xl
              "
              style={{
                fontFamily: 'var(--font-display)',
              }}
            >
              {title}
            </h2>

            <div className="mx-auto mt-6 h-[2px] w-20 bg-[#D9B37A]" />

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-gray-600 md:text-base">
              {description}
            </p>

          </div>

        </Reveal>


        {/* GRID */}
        <div
          className={`
            grid
            gap-5
            ${gridColumns}
          `}
        >

          {materials.map((item, index) => (

            <Reveal
              key={item.title}
              delay={index * 120}
              className="h-full"
            >

              <article
                className="
                  group
                  h-full
                  overflow-hidden
                  rounded-3xl
                  bg-white
                  shadow-md
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-xl
                "
              >

                {/* IMAGEN */}
                <div className="relative h-[170px] overflow-hidden">

                  <Image
                    src={item.image}
                    alt={item.alt ?? item.title}
                    fill
                    sizes="
                      (max-width: 640px) 100vw,
                      (max-width: 1024px) 50vw,
                      25vw
                    "
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  <div className="absolute inset-0 bg-black/10" />

                </div>


                {/* ICONO */}
                <div className="relative flex justify-center">

                  <div
                    className="
                      absolute
                      -top-7
                      z-10
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      border-4
                      border-white
                      bg-[#D9B37A]
                      shadow-lg
                    "
                  >
                    <item.icon
                      size={24}
                      strokeWidth={1.8}
                      className="text-black"
                    />
                  </div>

                </div>


                {/* CONTENIDO */}
                <div className="px-5 pb-8 pt-12 text-center">

                  <h3 className="mb-3 text-lg font-bold leading-tight text-black">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-gray-600">
                    {item.description}
                  </p>

                </div>

              </article>

            </Reveal>

          ))}

        </div>

      </div>

    </section>
  );
}