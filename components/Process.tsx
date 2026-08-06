import Image from 'next/image';
import link from 'next/link';
import {
  Ruler,
  Calculator,
  CheckSquare,
  Settings,
  Truck,
  Link,
} from 'lucide-react';
import { TbRulerMeasure } from 'react-icons/tb';

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
  return (
    <section className="bg-[#F5F5F5] py-12 md:py-12">
      <div className="max-w-[1584px] mx-auto">

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch lg:min-h-[850px]">

          {/* LEFT SIDE */}
          <div className="px-8 md:px-16 lg:px-24 flex flex-col justify-center">

            {/* TOP TEXT */}
            <div className="mb-10">
              <p className="text-[#C9A66B] text-xs uppercase tracking-[0.25em] font-semibold mb-4">
                Como trabajamos
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight max-w-lg">
                Un proceso simple y transparente
              </h2>
            </div>

            {/* STEPS */}
            <div className="flex flex-col gap-5">

              {steps.map((step) => (
                <div
                  key={step.number}
                  className="flex items-center"
                >

                  {/* NUMBER */}
                  <div className="min-w-[54px] h-[54px] rounded-full bg-[#D9B37A] flex items-center justify-center text-white text-sm font-bold shadow-md">
                    {step.number}
                  </div>

                  {/* SPACING */}
                  <div className="w-6" />

                  {/* ICON */}
                  <div className="w-[32px] flex justify-center">
                    <step.icon
                      size={32}
                      strokeWidth={1.7}
                      className="text-black"
                    />
                  </div>

                  {/* SPACING */}
                  <div className="w-8" />

                  {/* TEXT */}
                  <div className="max-w-md">
                    <h3 className="text-lg font-bold text-black mb-1">
                      {step.title}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* BUTTON */}
            <div className="mt-12">
              <Link 
                href="https://wa.me/50768414434" 
                className="bg-[#E0E0E0] text-black px-8 py-4 rounded-xl text-lg font-bold hover:bg-white transition-all  inline-block"
              >
                Cotizar mi proyecto
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-[400px] lg:h-auto mt-14 lg:mt-0">

            <Image
              src="/process.png"
              alt="Proceso de fabricación"
              fill
              className="object-cover h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}