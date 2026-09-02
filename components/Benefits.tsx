import {
  Ruler,
  Boxes,
  Layers3,
  Hammer,
  ChevronDown,
} from 'lucide-react';

import Reveal from '@/components/Reveal';


const benefits = [
  {
    icon: Ruler,

    title: 'Diseño a medida',

    description:
      'Cada mueble se diseña según las dimensiones reales del espacio, el estilo y las necesidades de cada proyecto.',
  },

  {
    icon: Boxes,

    title: 'Aprovechamiento del espacio',

    description:
      'Distribuimos módulos, gavetas, repisas y áreas de almacenamiento para utilizar mejor cada rincón.',
  },

  {
    icon: Layers3,

    title: 'Materiales y acabados',

    description:
      'Trabajamos diferentes combinaciones de materiales, colores, herrajes e iluminación según el tipo de mueble.',
  },

  {
    icon: Hammer,

    title: 'Fabricación e instalación',

    description:
      'Acompañamos el proyecto desde la medición y el diseño hasta la fabricación e instalación final.',
  },
];


export default function Benefits() {
  return (
    <section className="bg-white py-10 md:py-15">

      <div className="mx-auto max-w-[1584px] px-6 md:px-16 lg:px-24">

        {/* HEADER */}
        <Reveal>

          <div className="mb-14 text-center">

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#B9945E]">
              Diseño pensado para ti
            </p>

            <h2
              className="
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
              ¿Por qué elegir muebles a medida?
            </h2>

            <div className="mx-auto mt-6 h-[2px] w-20 bg-[#D9B37A]" />

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-gray-600 md:text-base">
              Diseñamos cada proyecto pensando en el espacio,
              la funcionalidad y los detalles que harán parte
              de tu día a día.
            </p>

          </div>

        </Reveal>


        {/* BENEFICIOS */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

          {benefits.map((benefit, index) => {

            const Icon = benefit.icon;

            return (

              <Reveal
                key={benefit.title}
                delay={index * 120}
              >

                <details
                  className="
                    group
                    rounded-2xl
                    border
                    border-neutral-200
                    bg-white
                    transition-all
                    duration-300
                    open:border-[#D9B37A]
                    open:shadow-md
                    hover:border-neutral-300
                  "
                >

                  <summary
                    className="
                      flex
                      cursor-pointer
                      list-none
                      items-center
                      gap-5
                      p-6
                      md:p-8
                    "
                  >

                    {/* ICONO */}
                    <div
                      className="
                        flex
                        h-14
                        w-14
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#F5EFE6]
                      "
                    >
                      <Icon
                        size={25}
                        strokeWidth={1.7}
                        className="text-[#B9945E]"
                      />
                    </div>


                    {/* TÍTULO */}
                    <div className="flex-1">

                      <h3 className="text-lg font-semibold text-black md:text-xl">
                        {benefit.title}
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        Ver más
                      </p>

                    </div>


                    {/* FLECHA */}
                    <ChevronDown
                      size={22}
                      className="
                        shrink-0
                        text-gray-500
                        transition-transform
                        duration-300
                        group-open:rotate-180
                      "
                    />

                  </summary>


                  {/* CONTENIDO DESPLEGABLE */}
                  <div
                    className="
                      px-6
                      pb-7
                      pl-[100px]
                      pr-8
                      text-sm
                      leading-relaxed
                      text-gray-600
                      md:pb-8
                      md:text-base
                    "
                  >
                    {benefit.description}
                  </div>

                </details>

              </Reveal>

            );

          })}

        </div>

      </div>

    </section>
  );
}