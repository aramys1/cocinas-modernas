import Image from 'next/image';
import Link from 'next/link';

import {
  Ruler,
  Calculator,
  CheckSquare,
  Settings,
  Truck,
  ArrowUpRight,
} from 'lucide-react';

import Reveal from '@/components/Reveal';

const steps = [
  {
    number: '01',
    icon: Ruler,
    title: 'Medición del espacio',
    description:
      'Visitamos tu hogar y tomamos medidas exactas para garantizar un resultado perfecto.',
  },
  {
    number: '02',
    icon: Calculator,
    title: 'Cotización personalizada',
    description:
      'Te presentamos el diseño, materiales y presupuesto adaptado a tu proyecto.',
  },
  {
    number: '03',
    icon: CheckSquare,
    title: 'Aprobación y pago',
    description:
      'Ajustamos los detalles finales, apruebas el proyecto y confirmas tu pedido.',
  },
  {
    number: '04',
    icon: Settings,
    title: 'Fabricación',
    description:
      'Fabricamos cada módulo con precisión utilizando materiales de alta calidad.',
  },
  {
    number: '05',
    icon: Truck,
    title: 'Instalación final',
    description:
      'Armamos e instalamos tus muebles en sitio y dejamos todo listo para usar.',
  },
];

export default function Process() {
  const whatsappMessage = encodeURIComponent(
    'Hola, quisiera cotizar un trabajo de ebanistería.'
  );

  const whatsappUrl = `https://wa.me/50768414434?text=${whatsappMessage}`;

  return (
    <section className="bg-[#F5F5F5] py-12 md:py-12">
      <div className="mx-auto max-w-[1584px]">

        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-1 items-stretch lg:min-h-[850px] lg:grid-cols-2">

          {/* LADO IZQUIERDO */}
          <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24">

            {/* ENCABEZADO */}
            <Reveal delay={100}>
              <div className="mb-10">

                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A66B]">
                  Cómo trabajamos
                </p>

                <h2 className="max-w-lg text-3xl font-bold leading-tight text-black md:text-4xl">
                  Un proceso simple y transparente
                </h2>

                <div className="mt-6 h-[2px] w-20 bg-[#D9B37A]" />

              </div>
            </Reveal>


            {/* PASOS */}
            <div className="flex flex-col gap-5">

              {steps.map((step, index) => (
                <Reveal
                  key={step.number}
                  delay={200 + index * 140}
                >
                  <div className="flex items-center">

                    {/* NÚMERO */}
                    <div
                      className="
                        flex
                        h-[54px]
                        min-w-[54px]
                        items-center
                        justify-center
                        rounded-full
                        bg-[#D9B37A]
                        text-sm
                        font-bold
                        text-white
                        shadow-md
                      "
                    >
                      {step.number}
                    </div>


                    {/* ESPACIO */}
                    <div className="w-6" />


                    {/* ICONO */}
                    <div className="flex w-[32px] justify-center">
                      <step.icon
                        size={32}
                        strokeWidth={1.7}
                        className="text-black"
                      />
                    </div>


                    {/* ESPACIO */}
                    <div className="w-8" />


                    {/* TEXTO */}
                    <div className="max-w-md">

                      <h3 className="mb-1 text-lg font-bold text-black">
                        {step.title}
                      </h3>

                      <p className="text-sm leading-relaxed text-gray-600">
                        {step.description}
                      </p>

                    </div>

                  </div>
                </Reveal>
              ))}

            </div>


            {/* BOTÓN */}
            <Reveal delay={950}>
              <div className="mt-12">

                <Link
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    rounded-xl
                    bg-[#D9B37A]
                    px-7
                    py-4
                    text-base
                    font-semibold
                    text-white
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-[#C9A66B]
                    hover:shadow-md
                    md:text-lg
                  "
                >
                  Cotizar mi proyecto

                  <ArrowUpRight
                    size={20}
                    strokeWidth={1.8}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </Link>

                <p className="mt-3 text-sm text-gray-500">
                  Cuéntanos sobre tu proyecto y solicita una cotización.
                </p>

              </div>
            </Reveal>

          </div>


          {/* IMAGEN DERECHA */}
          <Reveal delay={250} className="h-full">
            <div className="relative mt-14 h-[400px] lg:mt-0 lg:h-full">

              <Image
                src="/process.png"
                alt="Proceso de fabricación de muebles a medida"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
}